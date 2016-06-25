var tar = require('tar');
var fstream = require('fstream');
var path = require('path');

var destination = path.resolve( process.argv[2]);
var sourceA = path.resolve(process[3]);
var sourceB = path.resolve(process[4]);

var pack = tar.Pack();
pack.pipe(fstream.Write(destination));

var endCount = 0;
function onEnd(){
  if(++endCount===2){
    pack.end();//当所有的都结束的时候才调用end
  }
}

var sourceStreamA = fstream.Reader({type:"Directory",path.sourceA})
                    .on('end',onEnd);

var sourceStreamB = fstream.Reader({type:"Directory",path.sourceB})
                    .on('end',onEnd);

sourceStreamA.pipe(pack, {end: false});
sourceStreamB.pipe(pack, {end: false});
