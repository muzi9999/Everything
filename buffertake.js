// 读取 Node 缓冲区数据的语法如下所示：
// buf.toString([encoding[, start[, end]]])

// encoding - 使用的编码。默认为 'utf8' 。
// start - 指定开始读取的索引位置，默认为 0。
// end - 结束位置，默认为缓冲区的末尾。


buf=Buffer.alloc(26);
for(var i=0;i<26;i++){
  buf[i]=i+97;//--这啥意思,给buf加长度?
}

console.log(buf.toString('ascii'));
console.log(buf.toString('ascii',0,5));
console.log(buf.toString('utf8',0,5));
console.log(buf.toString('undefined',0,5));