var express = require('express');
var router = express.Router();

const {
  find,
  ObjectId,
  insert,
  del,
  update,
  findnum
} = require('../libs/mongodb');

/* GET users listing. */
router.get('/list', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let num = req.query.num * 1;
  let page = req.query.page * 1;
  // console.log(num, page);
  findnum('user', {}, page, num, (result) => {
    // console.log(result);
    res.send(JSON.stringify(result));
  })
});

router.get('/update', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let id = req.query.id;
  let name = req.query.name;
  let tel = req.query.tel;
  let password = req.query.password;
  // 更新  updata（'表名'，｛条件｝，｛设置｝，fn（））
  update('user', {
    _id: ObjectId(id)
  }, {
    'name': name,
    'password': password,
    'tel': tel
  }, (result) => {
    // console.log(result.result.ok);
    res.send(JSON.stringify(result.result.ok));
  })
})


router.get('/del', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let id = req.query.id;

  del('user', {
    _id: ObjectId(id)
  }, (result) => {
    console.log(result.result.ok);
    res.send(JSON.stringify(result.result.ok));
  })
})

module.exports = router;