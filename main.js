var fs =require("fs");
var data=fs.readFileSync('input.txt');
//文件内容以16进制形式输出
//  console.log(data);
//文件内容以字符串形式输出
 console.log(data.toString());
 console.log("程序运行结束");
