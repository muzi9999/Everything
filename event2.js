// var EventEmitter=require('events').EventEmitter;
// var event=new EventEmitter();
var test=require('events')
var event=new test.EventEmitter();
event.on('aa',function(){
  console.log('我最可爱');
})
setInterval(function(){
  event.emit('aa');
},1000)