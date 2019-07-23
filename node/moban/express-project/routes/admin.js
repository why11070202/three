var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var router = express.Router();
const {
    find,
    ObjectId,
    insert,
    del,
    update
} = require('../libs/mongodb');

app.use(bodyParser.urlencoded({
    extended: false
}));


/* GET home page. */
router.post('/login', function (req, res, next) {
    let {
        username,
        password
    } = req.body
    // console.log(req.body);
    // console.log(name, password);
    res.append('Access-Control-Allow-Origin', '*');
    // console.log(req.query.password);
    find('user', {
        '_id': ObjectId("5d327deba0a374219389d87d"),
        'password': password,
        'name': username
        // 'password': req.query.password, 
    }, (data) => {
        if (data.length) {
            res.send('yes');
        } else { //找不到
            res.send('no');
        }
    });
});


module.exports = router;