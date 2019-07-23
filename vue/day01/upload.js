var http = require('http');
const fs = require('fs');
http.createServer((req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    let data = '';
    res.on('data', chunk => {
        data += chunk;
    })
    res.on('end', () => {
        callback(data);
    })
    request(src).pipe(fs.createWriteStream(`./cheerioimg/${index}.png`))
})