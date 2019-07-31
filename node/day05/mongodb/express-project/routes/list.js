var express = require('express');
var router = express.Router();
var {
    find
} = require("../../mongodb");
/* GET users listing. */
router.get('/list', function (req, res, next) {
    find('user', {}, (data) => {
        console.log(data);
        res.json(data);
    })

});

module.exports = router;