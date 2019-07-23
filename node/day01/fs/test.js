var fs = require('fs');

// 打开文件
fs.open('./index.html', 'r', (err, fd) => {
    if (err) {
        console.log('打开文件夹失败');
    }
    console.log('文件打开成功！');
})

// 获取文件信息
fs.stat('./index.html', (err, stats) => {
    if (err) {
        console.log('失败');
    }
    console.log(stats.isFile());
})

// 读取文本异步
fs.readFile('./index.html', (err, data) => {
    if (err) {
        console.log('读取失败');
    }
    console.log('文件内容为' + data.toString());
})


// 追加写入文本 
fs.appendFile('./test.txt', 'hello world', (err) => {
    if (err) {
        console.log('写入失败');
    }
    console.log('数据写入成功');
    // 读
    fs.readFile('./test.txt', (err, data) => {
        if (err) {
            console.log('读取失败');
        }
        console.log('test.txt的内容为' + data.toString());
    })
})

// 截取文件 fs.ftruncate(fd, len, callback)
fs.open('./test/txt', 'r+', (err, fd) => {
    if(err)
    fs.ftruncate(fd,5)
})