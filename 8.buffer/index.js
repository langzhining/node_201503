/**
 * Created by lang on 2015/6/28.
 */

var buf1 = new Buffer(1);
var buf2 = new Buffer([1,2]);
var buf3 = new Buffer('四十四');
console.log(buf3.toString());
buf1[0] = 256;
console.log(buf1);

var buf = new Buffer(12);
buf.write('珠峰');
buf.write('培训',6);
console.log(buf.toString());

var buf4 = new Buffer(10);
buf4.writeInt8(0,0);
buf4.writeInt8(16,1);
//正向 高位优先 big-endian  BE
//逆向 低位优先 little-endian LE
console.log(buf4.readInt16LE(0));
console.log(buf4.readInt16BE(0));
function concat(arr,length){
    var totalarr = new Buffer(length);
    if(!arr.length){
        return totalarr;
    }else if(arr.length == 1){
        return arr[0];
    }else{
        var index=0;
        for(var i=0;i<arr.length;i++){
            arr[i].copy(totalarr,index,0,arr[i].length);
            index+=arr[i].length;
        }
        return totalarr;
    }
}
var buf5 = new Buffer('珠峰培训');
console.log(buf5);
var buf6 = new Buffer([0xe7, 0x8f, 0xa0, 0xe5, 0xb3]);
var buf7 = new Buffer([0xb0,0xe5,0x9f,0xb9,0xe8,0xae,0xad]);
console.log(buf6.toString()+buf7.toString());
console.log(concat([buf6,buf7],buf6.length
                +buf7.length).toString());

var StringDecoding = require('string_decoder').StringDecoder;
var decoding = new StringDecoding();
console.log(decoding.write(buf6)+decoding.write(buf7));

var buf8 = buf5.slice(3,6);
console.log(buf8.toString());
