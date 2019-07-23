var fs = require('fs');




// 读
var read = () => {
    return new Promise((resolved, reject) => {
        fs.read('./index.html', async (err, data) => {
            if (err) {
                console.log('打开错误');
            }
            resolved(data);
        })
    })
}

//  写入
var write = (data) => {
    return new Promise(async (resolved, reject) => {
        fs.wirteFile('./newindex.html', data, (err) => {
            if (err) {
                console.log('创建错误');
            }
            resolved(err);
        })
    })
}

// 重命名
var rename = () => {
    return new Promise(async (resolved, reject) => {
        fs.rename('./newindex.html', 'homework.html', (err) => {
            if (err) {
                console.log('创建错误');
            }
            resolved(err);
        })
    })
}
// 关闭原来的
var close = (fd) => {
    return new Promise(async (resolved, reject) => {
        fs.close(fd, (err) => {
            if (err) {
                console.log('创建错误');
            }
            resolved(err);
        })
    })
}


var flag = () => {
    return new Promise((resolved, reject) => {

        fs.access('./index.html', err => {
            if (err) {
                console.log('不存在');
            } else {
                console.log('存在');
                resolved(true);
            }

        })
    })
}


// 打开
var fd = () => {
    return new Promise(async (resolved, reject) => {
        await flag();
        fs.open('./index.html', 'r+', async (err, fd) => {
            if (err) {
                console.log('打开错误');
            }
            resolved(fd);
            await read();
            await write(data);
            await rename();
            await close(fd);

        })
    })
}