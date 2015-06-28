/**
 * Created by lang on 2015/6/28.
 */
var EventEmitter = require('events').EventEmitter;
var util = require('util');
function Bell(){

}
util.inherits(Bell,EventEmitter);
function teacher(classname,state){
    console.log(classname+"班老师"+state);
}
function student(classname,state){
    console.log(classname+"班学生"+state);
}
function master(classmate){
    console.log("校长走进"+classmate+"班教室");
}
var bell = new Bell();
bell.on('ring',teacher);
bell.on('ring',student);
bell.once('ring',master);
console.log(bell.listeners('ring'));
bell.on('master',master);
bell.emit('ring',1,'上课');
console.log(bell.listeners('ring'));
console.log(EventEmitter.listenerCount(bell,'ring'));

bell.removeListener('master',master);
console.log(EventEmitter.listenerCount(bell,'master'));