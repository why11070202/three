const {
    createServer
} = require('http');

createServer((req, res) => {
    console.log(req);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.writeHead(200, {
        'Content-Type': 'text/plain;charset=utf-8'
    });
    res.write('记录数据成功！')
    res.end();
}).listen(22222)

console.log('服务器启动成功');