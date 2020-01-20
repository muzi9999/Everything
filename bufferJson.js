const buf = Buffer.from([0x1, 0x2, 0x3, 0x4, 0x5]);
const json = JSON.stringify(buf);

// 输出: {"type":"Buffer","data":[1,2,3,4,5]}
console.log(json);

const copy = JSON.parse(json, (key, value) => {
  return value && value.type === 'Buffer' ?
    Buffer.from(value.data) :
    value;
    //---8 9 10 怎么看的
   
});

// 输出: <Buffer 01 02 03 04 05>
console.log(copy);



//--缓冲区比较比较的是两个buffer的什么
//eg
// var buffer1 = Buffer.from('ABC');
// var buffer2 = Buffer.from('ABCD');
// var result = buffer1.compare(buffer2);

// if(result < 0) {
//    console.log(buffer1 + " 在 " + buffer2 + "之前");
// }else if(result == 0){
//    console.log(buffer1 + " 与 " + buffer2 + "相同");
// }else {
//    console.log(buffer1 + " 在 " + buffer2 + "之后");
// }