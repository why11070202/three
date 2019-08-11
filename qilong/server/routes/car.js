var express = require('express');
var router = express.Router();
const {
    find,
    insert,
    del,
    update
} = require('../libs/mongodb');
/* GET users listing. */
router.get('/car', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    let tel = req.query.tel
    find('car', {
        'tel': tel
    }, (results) => {
        // console.log(results.length);
        res.send(results);
    });
});
router.get('/carlist', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    let id = req.query.id * 1
    console.log(id);
    find('goodlist', {
        'id': id
    }, (results) => {
        // console.log(results);
        res.send(results);
    });
});
router.get('/del', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    let id = req.query.id * 1
    del('car', {
        'id': id
    }, (results) => {
        // console.log(results.length);
        res.send(results);
    });
});
router.get('/update', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    let id = req.query.id * 1
    let num = req.query.num * 1
    let tel = req.query.tel
    update('car', {
        'tel': tel,
        'id': id
    }, {
        'num': num,
    }, (result) => {
        console.log(result.result.ok);
    })

});
router.get('/add', function (req, res, next) {
    // res.append('Access-Control-Allow-Origin', '*');
    let id = req.query.id * 1
    let num = req.query.num * 1
    let tel = req.query.tel
    find('car', {
        'tel': tel,
        'id': id
    }, (result) => {
        // 查找数据库是否存在
        if (result.length) { //存在
            // 更新  updata（'表名'，｛条件｝，｛设置｝，fn（））
            // console.log(result[0].num);
            let oldnum = result[0].num * 1
            num = num * 1 + oldnum
            console.log(oldnum, num);
            update('car', {
                'tel': tel,
                'id': id,
            }, {
                'num': num,
            }, (result) => {
                res.send(result.result)
            })

        } else { //不存在
            // 插入
            insert('car', [{
                'id': id,
                'tel': tel,
                'num': num * 1
            }], (result) => {

                res.send(result.result)
                // res.send(status)
            })
        }
        // console.log(result);
    })


});

module.exports = router;