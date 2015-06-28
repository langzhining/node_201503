/**
 * Created by lang on 2015/6/28.
 */
var Home = require('./Home');
var home = new Home('xxx');
home.showName();
home.setName('gggg');
home.showName();
console.log(home.name);