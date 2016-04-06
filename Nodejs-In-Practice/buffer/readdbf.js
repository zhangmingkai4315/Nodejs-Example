const fs =require('fs');
fs.readFile('./world.dbf',(err,data) =>{
    if (err) console.log(err);
    readDBF(data);
});

function readDBF(data){
    var header={}
    var date= new Date();
    date.setUTCFullYear(1900+data[1]);
    date.setUTCMonth(data[2]);
    date.setUTCDate(data[3]);
    header.lastedUpdateDate=date.toUTCString();
    header.totalRecords=data.readUInt32LE(4);
    header.bytesInHeader=data.readUInt16LE(8);
    header.bytesPerRecord=data.readUInt16LE(10);

    console.dir(header);
    var fields=[];
    var fieldsOffset=32;
    var fieldTerminator=0x0D;

    var Field_Type={
        C:'character',
        N:'Numeric'
    };
    while (data[fieldsOffset]!=fieldTerminator) {
        // statement
        var fieldBuf=data.slice(fieldsOffset,fieldsOffset+32);
        var field={};
        field.fieldName=fieldBuf.toString('ascii',0,11).replace(/\u0000/g,'');
        field.type=Field_Type[fieldBuf.toString('ascii',11,12)];
        field.length=fieldBuf[16];
        fields.push(field);    
        fieldsOffset+=32;
    }
    console.log(fields);
}