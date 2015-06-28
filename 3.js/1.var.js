/**
 *在JS中，带var关键字和funtion关键字的需要预解释
 * function 声明并赋值
 * var 只声明不赋值
 */
console.log(num);
var num = 9;
fn();
var fn2 = function(){
    console.log('22222222');
}
fn2();
function fn(){
    console.log('10000000000000000');
}


