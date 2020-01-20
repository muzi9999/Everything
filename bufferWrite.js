//写入缓冲区
//256, 长度为256
buf = Buffer.alloc(256);
len=buf.write('www.runoob.com');

console.log('写入字节数:'+len);//打印出--->写入字节数 : 14