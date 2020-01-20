var events=require('events');
var test=new events.EventEmitter();

var listen1=function(){
console.log('监听器1执行')
}

var listen2=function(){
console.log('监听器2执行')
}

test.addListener('connect',listen1);
test.on('connect',listen2);

var testCount=test.listenerCount('connect');
console.log(testCount+'个监听器监听连接事件')
test.emit('connect');

test.removeListener('connect',listen1);
console.log('移除listen1');
testCount=test.listenerCount('connect');
console.log(testCount+'个监听器监听连接事件')
test.emit('connect');

