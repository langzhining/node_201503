var number = 2; obj = {
    number :4,
    fn1:(function(){
        //�˴�this.number����obj.number,��Ϊ�ú�������fn1��
        //ֻ���ڵõ�fn1����ǰִ��ĺ������ҽ�ִ��һ��
        this.number *=2;
        number = number *2;
        var number = 3;
        console.log("a"+this.number);
        return function(){
            //�˴�this.numberΪobj.number
            this.number *=2;
            number *=3;
            console.log(number);//9
        }
    })()//ע��˴�()Ϊ������������ִ�У�����fn1Ϊִ���꺯���󷵻صĺ���
}
var fn1 = obj.fn1;//�˴�obj.fn1Ϊ�����ķ��غ�����ַ
var fn2 = obj.fn1;
console.log(number);//2
fn1();//9
fn2();
obj.fn1();//27
console.log(number);//2
console.log(obj.number);//8