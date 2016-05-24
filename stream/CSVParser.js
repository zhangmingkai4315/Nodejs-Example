const fs = require ('fs');
const stream = require('stream');
const Transform = stream.Transform;

CSVParser.prototype=Object.create(Transform.prototype,{
    constructor:{
        value:CSVParser
    }
});

function CSVParser(){
    Transform.call(this);
    this.value='';
    this.headers=[];
    this.values=[];
    this.line=0;
}

CSVParser.prototype._transform=function(chunk,encoding,done){
    var c,i;
    chunk=chunk.toString();
    for (i=0;i<chunk.length;i++){
        c=chunk.charAt(i);
        if(c===','){
            this.addValue();
        }else if(c==='\n'){
            this.addValue();
            if(this.line > 0){
                this.push(JSON.stringify(this.toObject()));
            }
            this.values=[];
            this.line++;
        }else{
            this.value+=c;
        }
    }
    done();
};

CSVParser.prototype.toObject=function(){
    var i;
    var object={};
    for(i=0;i<this.headers.length;i++){
        object[this.headers[i]]=this.values[i];
    }
    return object;
}

CSVParser.prototype.addValue=function(){
    if(this.line===0){
        this.headers.push(this.value);
    }else{
        this.values.push(this.value);
    }
    this.value='';
}


var parser=new CSVParser();
fs.createReadStream(__dirname+'/sample.csv').pipe(parser).pipe(process.stdout);
