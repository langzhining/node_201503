/**
 * Created by lang on 2015/6/28.
 */
function Dog(){

}
Dog.prototype.name = "羊羊羊";
Object.prototype.name = '三只羊';
var dog = new Dog();
var  d = new Object();
console.log(dog.name);
console.log(dog.__proto__.name);

console.log(d.name);
console.log(dog.__proto__.__proto__.name);

console.log(Dog.name);
console.log(Dog.__proto__.name);

console.log(dog.__proto__.constructor.prototype.name);