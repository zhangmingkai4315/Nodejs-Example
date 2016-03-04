//定义查询的基本信息
var queryInfo={
	queryDomain:"jsmean.com",   //查询的域名
	queryType:2,                //查询类型 当设置为0x0001代表为A 即查询的为ipv4地址 
	queryServer:"1.2.4.8",      //查询的递归服务器地址
	queryPort:53,               //查询的端口号
	queryRD:1                   //是否属于递归查询 1代表为递归查询
}

//定义发送的数据包
var dnsPackage=new Buffer(512);
	dnsPackage.fill(0)

//定义DNS 协议包 

var dnsProtocol={
    header:{
      qr:0,     //定义查询还是响应 ，定义0代表这是一个查询请求，等待响应的数据包位为qr=1。
      opcode:0, //四位，区分不同的查询请求，0代表标准查询。
      aa:0,     //权威应答位 用来区分是否为权威应答 这个值只对于响应的信息有效。
      tc:0,     //设置位，如果响应被截断则返回错误。
      rd:1,     //是否期待一个递归查询，1代表是。
      ra:0,     //响应消息中设置表示服务器是否支持递归查询，这个值只对于响应的信息有效。
      z:0,      //四位，将来使用
      rcode:0   //四位，rcode 响应位，这个值只对于响应的信息有效。0代表没有错误发生，1 代表格式错误，2 服务器错误 3  域名查询不到 4 域名服务器不支持查询 5 拒绝查询
    },
    body:{
      questions:[],
      answers:[],
      authorities:[],
      additionals:[],
      edns_options:[],
      payload:undefined
    }
   }

var question={
         name:queryInfo.queryDomain,
         type:queryInfo.queryType,
         class:1, // class 为1 代表查询的类型为Internet-Address 
};
dnsProtocol.body.questions.push(question);  //将dns请求信息发送到questions数组中

// 将上述的dns信息对照dns协议写入buffer

function WriteDNSQuery(buffer,dns){
	 var id=Math.floor(Math.random()*65535);   //ID 随机产生的ID值 
 	 var header=dns.header,
         body=dns.body;
         question=body.questions;

         buffer.writeUInt16BE(id&0xFFFF);  //ID 16位 保存了请求的id号


  	  var val=0;
      val+=(header.qr<<15)&0x8000;
      val+=(header.opcode<<11)&0x7800;
      val+=(header.aa<<10)&0x400;
      val+=(header.tc<<9)&0x200;
      val+=(header.rd<<8)&0x100;
      val+=(header.ra<<7)&0x80;
      val+=(header.z<<4)&0xE;
      val+=(header.rcode)&0xF;

      buffer.writeUInt16BE(val&0xFFFF,2);                     // 偏移 2字节=16位 
      buffer.writeUInt16BE(body.questions.length&0xFFFF,4);   // 查询的总个数 设置只发送一个查询请求 查询数量字段
      buffer.writeUInt16BE(body.answers.length&0xFFFF,6);     // 响应的总个数
      buffer.writeUInt16BE(body.authorities.length&0xFFFF,8); // 权威应答的个数
      buffer.writeUInt16BE(body.additionals.length&0xFFFF,10);// 附加信息(additions)个数

      var bodyStart=12;
	  for(var i=0;i<question.length;i++){            //此处只增加了一个条目，所以循环可忽略掉
    	for(var subdomain of question[i].name.split('.')){         // 将jsmean.com 拆分为["jsmean","com"]
     	 	if(subdomain!==''){
	      	 	 var domainlength=subdomain.length; 
	       		 buffer.writeUInt16BE(domainlength<<8&0xFF00,bodyStart);
	        	 bodyStart=bodyStart+1;
	       	  	 buffer.write(subdomain,bodyStart,domainlength,'ascii');
	        	 bodyStart+=subdomain.length;
      		}
    	}
	    buffer.writeUInt16BE(0x00,bodyStart);
	    bodyStart=bodyStart+1
	    buffer.writeUInt16BE(question[i].type&0xFFFF,bodyStart);
	    bodyStart=bodyStart+2
	    buffer.writeUInt16BE(question[i].class&0xFFFF,bodyStart);
    }
    return bodyStart+2;
}

var len=WriteDNSQuery(dnsPackage,dnsProtocol)

var dgram = require('dgram');
var client = dgram.createSocket("udp4");
client.send(dnsPackage, 0,len, queryInfo.queryPort, queryInfo.queryServer, function(err) {
    if(err){
      console.log(err);
    }
    client.once('message',function (message) {
      console.log(message.toString());
    });
  });


