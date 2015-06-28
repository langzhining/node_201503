//对象各属性以数组形式返回
//非继承对象
//判断类型
//遍历方法
//过滤方法
//更改元素值
//去空格
//存取器，扩展属性方法，同扩展get方法
Object.prototype.email = "langzhining@163.com";
var obj={name:'作者',age:15};
console.log(Object.keys(obj));
console.log(Object.keys(obj)[1]);
for(var i in obj){
    console.log(i);
    if(obj.hasOwnProperty(i)){
        console.log(i);
    }
}

console.log(Array.isArray([]));
console.log(typeof []);
console.log(Object.prototype.toString.call([]));

var arr = [1,2,3];
arr.forEach(function(v){
    console.log(v);
});
var result1 = arr.filter(function(v){
    return v<3;//true保存
})
console.log(result1);
var result2 = arr.map(function(v){
   return v *= 2;
});
console.log(result2);

console.log("   d    ");
console.log("   d    ".trim());

Date.prototype.__defineGetter__("befor",function(){
    var diff = (new Date().getTime() - this.getTime());
    return "时间过去了"+(diff/1000)+'秒'
})

var a = new Date(new Date().getTime() - 7200*1000);
console.log(a.befor);