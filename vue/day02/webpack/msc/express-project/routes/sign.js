var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
const {
    find,
    insert,
    del,
    update
} = require('../libs/mongodb');

const {
    createToken,
    decodeToken,
    checkToken
} = require('../libs/token');

app.use(bodyParser.urlencoded({
    extended: false
}));



/* GET home page. */
//
router.post('./check', function (req, res, next) {
    let {
        token
    } = req.cookies;
    ses.send(checkToken(token));
})
//第一次登陆
router.post('/login', function (req, res, next) {
    let {
        name,
        password,
    } = req.body
    console.log(req.body);
    // console.log(name, password);
    res.append('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Credentials', true)


    // res.append('Access-Control-Allow-Origin', 'file:///D:/three/why/msc/login.html');
    // console.log(req.query.password);
    find('user', {
        'name': name,
        'password': password,
        // 'password': req.query.password, 
    }, (data) => {
        console.log(data.length);
        if (data.length) {
            // 找到
            let token = createToken({
                name
            }, 300);
            res.setHeader('Set-Cookie', 'token=' + token);
            res.json({
                status: 'sucecss',
                token
            })
            // res.send('yes');
        } else { //找不到
            res.json({
                status: 'fail',
            });
        }
    });
});


module.exports = router;