var express = require('express');
const app = express();
const fs = require('fs')
const bodyParser = require('body-parser');

// 全局添加
app.use((req, res, next) => {
    res.append('Access-Control-Allow-Origin', '*');
    next();
})

app.use(bodyParser.urlencoded({
    extended: false
}))
app.get('/list', async (req, res) => {
    console.log(req);
    let data = await new Promise((resolved, reject) => {
        fs.readFile('./data.json', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolved(data)
            }
        })
    })
    res.send(data);
    // res.append('Access-Control-Allow-Origin', '*');
})

app.post('/post', (req, res) => {
    console.log(req);
    res.send('llll')
});
app.listen(22224);
console.log("服务器启动成功");