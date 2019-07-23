const request = require('request');
const fs = require('fs');

const jsdom = require("jsdom");
const {
    JSDOM
} = jsdom;

request('http://www.umei.cc/p/gaoqing/cn/', function (err, response, body) {
    // console.log(body);
    const {
        window
    } = new JSDOM(body);
    const $ = require("jquery")(window);
    $('img').each((index, ele) => {
        // console.log($(ele).attr('src'));
        let src = encodeURI($(ele).attr('src'))
        request(src).pipe(fs.createWriteStream(`./img/${index}.png`))
    })
    // console.log($('img'));
})