// Buffer.alloc(size[, fill[, encoding]])： 
// 返回一个指定大小的 Buffer 实例，如果没有设置 fill，
// 则默认填满 0


//创建一个长度为10 且用0填充的Buffer
//---长度是什么?buffer数组的元素多少吗?这里就是ibuffer里面有10个0? 长度和字节数啥关系?
const buf1=Buffer.alloc(10);


//创建一个长度为10, 且用0*1填充的 Buffer
const buf2=Buffer.alloc(10,1)


// 创建一个长度为 10、且未初始化的 Buffer
// 这个方法比调用 Buffer.alloc() 更快，
// 但返回的 Buffer 实例可能包含旧数据，
// 因此需要使用 fill() 或 write() 重写。
const buf3=Buffer.allocUnsafe(10);//---直接后面加.fill(),.write()吗


// 创建一个包含 [0x1, 0x2, 0x3] 的 Buffer。
 //---[0x1, 0x2, 0x3] 啥意思, buffer里面相当于[1,2,3]?长度为3?
const buf4=Buffer.from([1,2,3]) 


// // 创建一个包含 UTF-8 字节 [0x74, 0xc3, 0xa9, 0x73, 0x74] 的 Buffer
const buf5=Buffer.from('tést');
//---[0x74, 0xc3, 0xa9, 0x73, 0x74]74 c3 73 74是进制数?tést通过进制数得出的?tést是编码类型还是字符串?utf8转换成tést的过程


// 创建一个包含 Latin-1 字节 [0x74, 0xe9, 0x73, 0x74] 的 Buffer。
const buf6 = Buffer.from('tést', 'latin1');
//---这玩意儿咋出来的...蒙圈儿