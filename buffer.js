const buf=Buffer.from('runoob','ascii');

console.log(buf)
// hex - 将每个字节编码为两个十六进制字符。
console.log(buf.toString('hex'));// 输出 72756e6f6f62

// base64 - Base64 编码。
console.log(buf.toString('base64'));// 输出 cnVub29i