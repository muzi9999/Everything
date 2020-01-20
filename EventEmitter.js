var event= require('events');
var eventEmitter=new event.EventEmitter();

//监听器 #1
var listener1=function listener1(){
  console.log('监听器 listener1 执行');
}

//监听器 #2
var listener2=function listener2(){
  console.log('监听器 listener2 执行');
}

//绑定 connection 事件, 处理函数为 listener1
eventEmitter.addListener('connection',listener1);

//绑定 connection 事件,处理函数为 listener2
eventEmitter.on('connection',listener2);

var eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听器连接事件");

//处理connection 事件
eventEmitter.emit('connection');

//移除绑定的listener1函数
eventEmitter.removeListener('connection',listener1);
console.log('listener1 不再受监听.');

//触发连接事件
eventEmitter.emit('connection');


eventListeners=eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听连接事件");

console.log('程序执行完成');