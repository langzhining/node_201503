/**
 * Created by lang on 2015/6/27.
 * 实现：反馈给浏览器请求的url路径和参数信息
 * 问题：浏览器显示乱码，可通过writeHead解决
 */
/**
 * 1xx 请求已经爱理，需要继续处理
 * 2xx 服务器已经接收，正常响应。
 * 3xx 重定向 需要客户端进一步。
 * 4xx 客户端错误
 * 5xx 服务器端错误
 **/
var http = require('http');
http.createServer(function(req,res){
    var url = req.url;
    var path = url.split('?')[0];
    var query = url.split('?')[1];
    res.writeHead(200,{"Content-Type":'text/html;charset=utf-8'});
    //res.write(url);
    if(path=='/baozi'){
        res.end(query.split('=')[1]+'个包子');
    }
    else if(path == 'jiaozi'){
        res.end(query.split('=')[1]+'个饺子');
    }
    else{
        res.end('没有这道菜');
    }
}).listen(8081);