var EventEmitter = require('events').EventEmitter;
var event = new EventEmitter();
//on 绑定监听器
event.on('some_event', function () {
  console.log('some_event 事件触发');
});

setTimeout(function () {
  //emit 触发
  event.emit('some_event');
}, 1000);