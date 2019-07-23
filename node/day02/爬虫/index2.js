const http = require('http');
const fs = require('fs');
const cheerio = require('cheerio');
const request = require('request');

function download(url, callback) {
    http.get(url, (res) => {
        const {
            statusCode
        } = res;
        const contentType = res.headers['content-type'];
        if (statusCode !== 200) {
            //请求失败
        } else {
            let rawData = '';

            res.on('data', chunk => {
                rawData += chunk;
            })
            res.on('end', function () {
                callback(rawData);
            })
        }
    })
}
download("http://www.umei.cc/p/gaoqing/cn/", function (data) {
    // console.log(data);
    var $ = cheerio.load(data);
    console.log($('img'));
    $('img').each(function (index, ele) {
        let src = encodeURI(ele.attribs.src);
        // console.log(src);
        request(src).pipe(fs.createWriteStream(`./cheerioimg/${index}.png`))

    })


})