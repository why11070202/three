var express = require('express');
var router = express.Router();
const {
    find,
    insert,
    del,
    update
} = require('../libs/mongodb');
/* GET home page. */
router.get('/data', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*')
    find('goodlist', {}, (results) => {
        console.log(results.length);
        res.send(results);
    })

});
router.get('/good', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*')
    let id = req.query.id * 1;
    find('goodlist', {
        id
    }, (results) => {
        console.log(results.length);
        res.send(results);
    })

});

module.exports = router;