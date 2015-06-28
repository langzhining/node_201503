/**
 * Created by lang on 2015/6/28.
 */
function Event(){

}

Event.prototype.addListener = function(type,listener){
    if(typeof listener != 'function'){
        throw TypeError('listener is not a function');
    }
    if(!this._events){
        this._events={};
    }
    if(this._events[type]){
        this._events[type].push(listener);
    }else{
        this._events[type]=[listener];
    }
}
Event.prototype.emit = function (type) {
    if(!this._events){
        this._events={};
    }
    var handles = this._events[type];
    var arr = new Array(arguments.length-1);
    for(var i=1;i<arguments.length;i++){
        arr[i-1] = arguments[i];
    }
    for(var i=0;i<handles.length;i++){
        handles[i].apply(this,arr);
    }
}
function Bell(){

}
Bell.prototype = new Event();
function teacher(classname,state){
    console.log(classname+"班老师"+state);
}
function student(classname,state){
    console.log(classname+"班学生"+state);
}
var bell = new Bell();
bell.addListener('ring',teacher);
bell.addListener('ring',student);
bell.emit('ring',2,'上课');
bell.emit('ring',3,'下课');


