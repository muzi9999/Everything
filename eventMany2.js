var events=require("events").EventEmitter;
var test=new events();

test.on('xiaowu',function(a,b){
  console.log('小五写代码1'+a+b)
})


test.on('xiaowu',function(a,b){
  console.log('小五写代码2'+a+b)
})

test.emit('xiaowu','参数1','参数2')