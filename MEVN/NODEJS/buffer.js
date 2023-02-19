var buffer1=Buffer.alloc(100);

buffer1.write("i am here");

var a = buffer1.toString('utf-8');

console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);

var BufferSource =new Buffer('ABC');
var BufferDesination = Buffer.alloc(3);
BufferSource.copy(BufferDesination );
var Data = BufferDesination .toString('utf-8');
console.log(Data);

var bufferOld = new Buffer('INDIA IS MY COUNTRY');
var bufferNew = bufferOld.slice(0,4);
console.log(bufferNew.toString());

var bufferOne = new Buffer('INDIA');
var bufferTwo = new Buffer('IS GREAT');
var bufferFour = new Buffer('JAI HIND');
var bufferThree = Buffer.concat([bufferOne,bufferTwo,bufferFour]);
console.log(bufferThree.toString());
