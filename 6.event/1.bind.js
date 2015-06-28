/**
 * Created by lang on 2015/6/28.
 */
var person = {
    name : "流量",
    age : 18,
    say : function(words){
        console.log(this.name+' '+(this.age++)+words);
    }
}
person.say('hello');
var p = {name: '东方',age : 40};
person.say.call(p,'hi~hi~');

var pp = person.say.bind(p,"dddd");
pp();
pp.call(person,'依然是dddd,name/age依然为pp');