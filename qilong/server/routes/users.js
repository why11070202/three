var express = require('express');
var router = express.Router();
const {
  find,
  insert,
  del,
  update
} = require('../libs/mongodb');
/* GET users listing. */
router.get('/tel', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let tel = req.query.tel
  find('user', {
    'tel': tel
  }, (results) => {
    if (results.length) {
      res.send('no')
    } else {
      res.send('yes')
    }
  });

});
router.post('/add', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    tel,
    password,
  } = req.body
  insert('user', [{
    'tel': tel,
    'password': password
  }], (results) => {
    // console.log(results.ops.length);
    if (results.ops.length) {
      res.send('yes');
      // console.log("yes");
    } else {
      res.send('no');
    }
  });
});

router.post('/login', function (req, res, next) {
  res.append('Access-Control-Allow-Origin', '*');
  let {
    tel,
    password,
  } = req.body
  find('user', {
    'tel': tel,
    'password': password
  }, (results) => {
    if (results.length) {
      res.send('yes');
    } else {
      res.send('no');
    }
  })

});


module.exports = router;