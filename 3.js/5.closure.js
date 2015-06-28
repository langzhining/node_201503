var number = 2; obj = {
    number :4,
    fn1:(function(){
        //此处this.number不是obj.number,因为该函数不是fn1，
        //只是在得到fn1函数前执向的函数，且仅执行一次
        this.number *=2;
        number = number *2;
        var number = 3;
        console.log("a"+this.number);
        return function(){
            //此处this.number为obj.number
            this.number *=2;
            number *=3;
            console.log(number);//9
        }
    })()//注意此处()为匿名函数立即执行，函数fn1为执向完函数后返回的函数
}
var fn1 = obj.fn1;//此处obj.fn1为函数的返回函数地址
var fn2 = obj.fn1;
console.log(number);//2
fn1();//9
fn2();
obj.fn1();//27
console.log(number);//2
console.log(obj.number);//8