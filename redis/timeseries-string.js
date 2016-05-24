var redis=require('redis');
function TimeSeries(client,namespace){
    this.namespace=namespace;
    this.client=client;
    // 定义时间的度量单位
    this.units={
        second:1,
        minute:60,
        hour:60*60,
        day:24*60*60,
    };
    // 定义存入redis的键值所代表的含义以及属性ttl:生存周期
    this.gaps={
        '30sec':{name:'30sec',ttl:this.units.hour*2,duration:this.units.second*30},
        '5min':{name:'5min',ttl:this.units.day*2,duration:this.units.minute*5},
        '1hour':{name:'1hour',ttl:this.units.day*60,duration:this.units.hour},
        '1day':{name:'1day',ttl:null,duration:this.units.day},
    }
};

TimeSeries.prototype.insert=function(timestampeInSeconds,nodename,qps){
    for(var gap in this.gaps){
        var obj=this.gaps[gap];
        var key=this._getKeyName(obj,timestampeInSeconds);
        this.client.hset(key,nodename,qps)
        if(obj.ttl!==null){
            this.client.expire(key,obj.ttl);
        }
    }
};
TimeSeries.prototype._getKeyName=function(gap_obj,timestampeInSeconds){
    var roundedTimestamp=this._getRoundedTimestamp(timestampeInSeconds,gap_obj.duration);
    return [this.namespace,gap_obj.name,roundedTimestamp].join(':');
};
// 获得基于粒度级别的最低的时间戳
TimeSeries.prototype._getRoundedTimestamp=function(timestampeInSeconds,duration){
    return Math.floor(timestampeInSeconds/duration)*duration;
}
// 获取数据比如１分钟粒度下，从１点到２点的数据
TimeSeries.prototype.fetch=function(gapName,beginTime,endTime,onComplete){
    var gap_obj=this.gaps[gapName];
    var begin=this._getRoundedTimestamp(beginTime,gap_obj.duration);
    var end=this._getRoundedTimestamp(endTime,gap_obj.duration);
    var keys=[];
    for (var timestamp=begin;timestamp<=end;timestamp+=gap_obj.duration){
        var key = this._getKeyName(gap_obj,timestamp)
        keys.push(key)
    }
    this.client.mget(keys,function(err,replies){
        var results=[];
        for (var i=0;i<replies.length;i++){
            var timestamp=beginTime+i*gap_obj.duration;
            var value=parseInt(replies[i],10)||0;
            results.push({timestamp:timestamp,value:value});
        }
        onComplete(gapName,results);
    });
}

exports.TimeSeries=TimeSeries;