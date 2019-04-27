const http = require('http');
const fs =  require('fs');
var qs = require('querystring');
var wp = '';
var jsFile = '';
var data1 = '';
var data2 = '';
var data3 = '';
fs.readFile('htmlfile.html', function(err,data){
        if(err) throw err;
        data1 = data.toString();
});
fs.readFile('style.css', function(err,data){
        if(err) throw err;
        data2 = data.toString();
});
fs.readFile('htmlfile3.html', function(err,data){
    if(err) throw err;
    data3 = data.toString();
});
http.createServer((req,res)=>{
    switch(req.url) {
        case '/':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data1);
        case '/htmlfile.html':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data1);

        case '/style.css':
            res.writeHead(200, {'Content-Type':'text/css'});
            res.end(data2);

        case '/htmlfile3.html':
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.end(data3);

        default:
            res.writeHead(404, {'Content-Type':'text/plain'});
            res.end('404 не найдено');
    }
}).listen(4000,()=> console.log('Сервер работает'));