/**
 *
 */
var n =9;
var s = 'hello';
//预解释是在作用域中的预解释
function fn(){
    console.log(n);//undefined
    console.log(s);//hello
    n=7;
    var n=6;
}
fn();