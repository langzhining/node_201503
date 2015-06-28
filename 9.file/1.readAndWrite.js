/**
 * Created by lang on 2015/6/28.
 */
var fs = require('fs');
var str = '异步写文件并读取';
fs.writeFile('./text.txt',str,
    {encoding:'utf8',mode:0666,flag:'w'},function(err){
        if(err){
            console.error('写文件错误');
            return 0;
        }
        fs.readFile('./text.txt',
            {encoding:'utf8',mode:0666,flag:'r'},function(err,data){
                if(err){
                    console.error('读文件错误');
                    return 0
                }
                console.log(data);
                console.log(data.toString());
            })
    });
fs.writeFileSync('./text2.txt','异步写入未执行完毕');
var data = fs.readFileSync('./text2.txt');
console.log(data.toString());