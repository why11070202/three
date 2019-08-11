var express = require('express');
var request = require('request');
var querystring = require('querystring');
var router = express.Router();

var nums = parseInt((Math.random()*900000)+100000)

/* GET users listing. */
router.post('/xin', function(req, res, next) {

    // res.append('Access-Control-Allow-Origin', '*');
    let tel = req.body.tel
    console.log(tel);
    console.log(req.body);
    var queryData = querystring.stringify({
        "mobile": tel,  // 接受短信的用户手机号码
        "tpl_id": "170588",  // 您申请的短信模板ID，根据实际情况修改
        "tpl_value": `#code#=${nums}`,  // 您设置的模板变量，根据实际情况修改
        "key": "d13454acf573b88a36d75d13f9f8aee6",  // 应用APPKEY(应用详细页查询)
      
    });

    var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;

    request(queryUrl, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            console.log(body) // 打印接口返回内容
            
            var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
            res.send({jsonObj,nums})
            // console.log(jsonObj)
        } else {
            // console.log('请求异常');
            res.send('请求异常')
        }
    }) 




});


//node request模块安装命令：npm install request
// var request = require('request');
// var querystring = require('querystring');

// var queryData = querystring.stringify({
//     "mobile": "13429667914",  // 接受短信的用户手机号码
//     "tpl_id": "111",  // 您申请的短信模板ID，根据实际情况修改
//     "tpl_value": "#code#=1235231",  // 您设置的模板变量，根据实际情况修改
//     "key": "您申请的ApiKey",  // 应用APPKEY(应用详细页查询)
// });

// var queryUrl = 'http://v.juhe.cn/sms/send?'+queryData;

// request(queryUrl, function (error, response, body) {
// 	if (!error && response.statusCode == 200) {
// 		console.log(body) // 打印接口返回内容
		
// 		var jsonObj = JSON.parse(body); // 解析接口返回的JSON内容
// 		console.log(jsonObj)
// 	} else {
// 		console.log('请求异常');
// 	}
// }) 





module.exports = router;
