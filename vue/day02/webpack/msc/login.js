// require('./why');
var $ = require('./node_modules/_jquery@3.4.1@jquery/dist/jquery');

var template = require('./login.html');
$('body').html(template);

function setCookie(key, val, iDay) {
    //key：键名；val：键值；iDay：失效时间
    var now = new Date();
    now.setDate(now.getDate() + iDay);
    document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/'; //设置一个站点内的文件可以共享此cookie
}
// 获取cookie
function getCookie(key) {
    let cookie = document.cookie;
    var arr = cookie.split('; ');
    for (let i = 0; i < arr.length; i++) {
        let arr2 = arr[i].split('=');
        if (key == arr2[0]) {
            return arr2[1];
        }
    }
}
// 删除cookie
function removeCookie(key) {
    setCookie(key, '', -1)
}

$('.btn-lg').click(() => {
    let name = $.trim($('#inputEmail').val());
    let password = $.trim($('#inputPassword').val());
    let token = getCookie('token');
    if (!token) {
        token = false;
    }
    console.log(token);
    if (name && password) {
        if (token) {
            $.ajax({
                type: 'post',
                url: 'http://localhost:3001/sign/check',
                data: {
                    token
                }
            }).done((data) => {
                console.log(data);
            })
        } else {
            //第一次登陆
            $.ajax({
                type: 'post',
                url: 'http://localhost:3001/sign/login',
                data: {
                    'name': name,
                    'password': password,
                },
            }).done((data) => {
                // console.log(data);
                if (data.token) {
                    console.log(data.token);
                    //判断是否有免登录
                    setCookie('token', data.token, 1)
                } else {
                    alert('用户密码不正确');
                }
            })
        }

    } else {
        alert('请输入信息');
    }

})