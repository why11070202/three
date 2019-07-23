var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
const {
    find,
    add,
    del,
    change
} = require('../../mysql');
app.use(bodyParser.urlencoded({
    extended: false
}));




/* GET home page. */
router.post('/find', function (req, res, next) {
    let {
        name,
        password
    } = req.body
    console.log(req.body);
    console.log(name, password);
    res.append('Access-Control-Allow-Origin', '*');
    // console.log(req.query.password);
    find('users', {
        'username': name,
        // 'password': req.query.password, 
    }, {
        'password': password,
    }, (results) => {
        // console.log(results.length);
        if (results.length) {
            res.send('yes');
        } else { //找不到
            res.send('no');
        }

    });

});

router.get('/add', function (req, res, next) {
    console.log(req.body);
    add('users', {
        username: 'why',
        password: '12345'
    }, (results) => {
        console.log(results);
        res.send('添加成功');
    });
});
router.get('/del', function (req, res, next) {

    del('users', {
        username: 'vsq',
    }, (results) => {
        console.log(results);
        res.send('删除成功');
    });

});
router.get('/change', function (req, res, next) {
    change('users', {
        password: '123456789',
    }, {
        username: 'why'
    }, (results) => {
        console.log(results);
        res.send('添加成功');
    });
});

module.exports = router;