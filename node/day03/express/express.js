var express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('SQ');
}).listen(2224);

app.post('/post', (req, res) => {
    res.send('post')
}).listen(2222);
console.log('服务器启动成功');