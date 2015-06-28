/**
 * Created by lang on 2015/6/28.
 */
function Home(name){
    this.name = name;
}
Home.prototype.showName = function () {
    console.log('name is '+this.name);
}
Home.prototype.setName = function(name){
    this.name = name;
}

module.exports = Home;