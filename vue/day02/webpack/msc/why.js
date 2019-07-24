/* 
 * @Author: Marte
 * @Date:   2019-03-28 18:17:55
 * @Last Modified by:   Marte
 * @Last Modified time: 2019-04-02 11:56:30
 */

//四位验证码函数
function securityCode() {

    var arr = "1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM";
    var num = "";
    for (i = 0; i < 4; i++) {
        //创建随机数作为下标
        var sub = parseInt(Math.random() * arr.length);
        //随机数拼接
        num += arr[sub];
    }
    // console.log(num);
    return num
}

// 生成想要范围的i位随机数
function randomNum(min, max) {

    var num = parseInt(Math.random() * (max - min + 1) + min);

    return num
}

// 数组去重
// <script type="text/javascript">
function norepeat(arr) {
    var arr2 = [];
    for (var i = 0; i < arr.length; i++) {

        if (arr2.indexOf(arr[i]) == -1) {
            arr2.push(arr[i]);
        }
    }
    return arr2
}


//对象转成字符串
function objtostr(obj) {
    var html = "";
    for (var key in obj) {
        html += key + '=' + obj[key] + "&"; //字符串拼接
    }

    console.log(html);
    return html.slice(0, -1) //切割掉最后一个&
}

//字符串转换成对象

// var str = 'name=sq&day=0202&adr=青岛'
function strtoobj(str) {
    var str2 = '';
    if (str.indexOf('?') >= 0) {
        str2 = str.slice(str.indexOf('?') + 1);
    } else {
        str2 = str;
    }
    var obj = {}; //准备一个空对象
    var arr = str2.split("&"); //切割成 ["name=sq","day=0202","adr=青岛"]
    arr.forEach(function (item) {
        var arr2 = item.split('=');
        obj[arr2[0]] = arr2[1];
    })
    // for(var i=0;i<arr.length;i++){
    //     var arr2 = arr[i].split("=");//["name","sq"]
    //     obj[arr2[0]]= arr2[1];
    // }
    console.log(obj);
    return obj
}
//补零
function todb(num) {
    if (num < 10) {
        return '0' + num
    } else {
        return '' + num
    }

}
// 获取时间
function gettime() {
    var time = new Date();
    var year = time.getFullYear();
    var month = time.getMonth() + 1;
    var day = time.getDate();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var week = time.getDay();
    var w = '';
    switch (week) {
        case 0:
            w = '天';
            break;
        case 1:
            w = '一';
            break;
        case 2:
            w = '二';
            break;
        case 3:
            w = '三';
            break;
        case 4:
            w = '四';
            break;
        case 5:
            w = '五';
            break;
        case 6:
            w = '六';
            break;
    }
    return {
        year: year,
        month: todb(month),
        date: todb(day),
        hours: todb(hours),
        minutes: todb(minutes),
        seconds: todb(seconds),
        weeknum: week,
        week: '星期' + w
    }
}


//过滤敏感词
function filterword(str) {
    var word = ['傻B', '妈蛋', 'bitch', 'fuck', '操', '艹'];
    word.forEach(function (item) {
        var reg = new RegExp(item, 'gi');
        str = str.replce(reg, '**');
    })
    return str;
}
// 冒泡排序
function sortPop(arr) {
    // var arr = [3, 8, 7, 6, 5, 12, 45, 48, 96];
    for (var i = 0; i < arr.length; i++) {
        for (var j = 0; j < arr.length - i - 1; j++) {
            var max = arr[j];
            if (arr[j] > arr[j + 1]) {
                max = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = max;
            }
        }
    }
    return arr;
}
//选择排序
function sortSle(arr) {
    // var arr = [3, 8, 7, 6, 5, 12, 45, 48, 96];
    for (var i = 0; i < arr.length; i++) {
        var minindex = i;
        for (var j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[minindex]) {
                minindex = j;
            }
        }
        var temp = arr[imindex];
        arr[i] = temp;
        arr[minindex] = arr[i]

    }
    return arr;
}
//设置或获取样式
function css() {
    var ele = arguments[0];
    var attr = arguments[1];
    //获取样式
    if (arguments.length == 2) {
        //兼容
        if (getComputedStyle(ele, attr)) {
            return getComputedStyle(ele, false)[attr];
        } else {
            return ele.currentStyle[attr];
        }
    } else if (arguments.length == 3) { //设置样式
        var val = arguments[2];
        return ele.style[attr] = val;
    }
}

function startMove(obj, json, fnend) {

    clearInterval(obj.timer); //防止定时器叠加
    obj.timer = setInterval(function () {

        var istrue = true;

        //1.获取属性名，获取键名：属性名->初始值
        for (var key in json) { //key:键名   json[key] :键值
            //			console.log(key); //width heigth opacity
            var cur = 0; //存初始值

            if (key == 'opacity') { //初始值
                cur = css(obj, key) * 100; //透明度
            } else {
                cur = parseInt(css(obj, key)); // 300px  300  width heigth borderwidth px为单位的

            }

            //2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
            //距离越大，速度越大,下面的公式具备方向
            var speed = (json[key] - cur) / 6; //出现小数
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

            //保证上一个属性全部都达到目标值了
            if (cur != json[key]) { //width 200 heigth 400
                istrue = false; //如果没有达到目标值，开关false
            } else {
                istrue = true; //true true
            }

            //3、运动
            if (key == 'opacity') {
                obj.style.opacity = (cur + speed) / 100; //0-1
                obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')'; //0-100
            } else {
                obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
            }

        }

        //4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
        if (istrue) { //如果为true,证明以上属性都达到目标值了
            clearInterval(obj.timer);
            if (fnend) { //可选参数的由来
                fnend();
            }
        }

    }, 30); //obj.timer 每个对象都有自己定时器

}





//ajax  多个形参
function ajax(type, url, data, fn) {
    let time = new Date();
    let xhr = new XMLHttpRequest();
    url += '?time=' + time;
    console.log(url);
    console.log(data);
    if (type.toLowerCase() == 'post') {
        xhr.open(type, url, true);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        xhr.send(data);
    } else {
        url += '&' + data;
        xhr.open(type, url, true);
        xhr.send(null);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (fn) {
                    var str = xhr.responseText;
                    fn(str);
                }
            } else {
                console.log(xhr.status);
            }
        }
    }
}

//ajax  一个对象
function ajax2(josn) {
    defaults = {
        async: true
    }

    function extent(opt, opt2) {
        for (var key in opt2) {
            opt[key] = opt2[key];
        }
    }

    extent(defaults, josn);

    let time = new Date();
    let xhr = new XMLHttpRequest();
    defaults.url += '?time=' + time;
    // console.log(defaults.url);
    // console.log(defaults.data);
    if (defaults.type.toLowerCase() == 'post') {
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
        if (defaults.data) {
            xhr.send(defaults.data);
        } else {
            xhr.send();
        }

    } else {
        if (defaults.data) {
            defaults.url += '&' + defaults.data;
        }
        xhr.open(defaults.type, defaults.url, defaults.async);
        xhr.send(null);
    }
    xhr.onreadystatechange = () => {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                if (defaults.succes) {
                    var str = xhr.responseText;
                    // console.log(str);
                    defaults.succes(str);
                }
            } else {
                console.log(xhr.status);
            }
        }
    }
}

// 设置cookie
// function setCookie(key, val, day) {
//     if (day) {
//         let now = new Date();
//         now.setDate(now.getDate + day);
//         document.cookie = key + '=' + val + ';expires=' + now.toUTCString() + ';path=/';
//     } else {
//         document.cookie = key + '=' + val + ';path=/';
//     }
// }

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






//正则集合 
var regtest = {
    //账号规则 ：用户名不得使用特殊字符，长度在6-20之间
    account: function (str) {
        var reg = /^[A-Za-z0-9][\w]{5,19}$/;
        var res = reg.test(str);
        return res;
    },
    //昵称 ：2~12个字符之间，可以汉字，字母和数字组合
    username: function (str) {
        var reg = /^[\u4E00-\u9FA5A-Za-z][\u4E00-\u9FA5A-Za-z]{1,14}$/;
        // var reg = /(?!\d+$)[\dA-Za-z\u4e00-\u9fa5]{2,15}$/;
        return reg.test(str);
    },
    //邮件规则 ： 长度不限，可以使用英文（包括大小写）、数字、点号、下划线、减号，首字母必须是字母或数字；  
    email: function (str) {
        var reg = /^[a-zA-Z0-9][a-zA-Z0-9_\-.]+@[a-zA-Z0-9_\-.]+.[a-zA-Z]+$/;
        return reg.test(str);
    },
    //身份证规则 ：身份证号长度为18或者16最后一位可为X
    Idnum: function (str) {
        var reg = /^(\d{17}|\d{15})[\dX]$/;
        return reg.test(str);
    },
    //手机号码 ：11位数字1开头第二位为3-9；
    tel: function (str) {
        var reg = /^1[3-9]\d{9}$/;
        return reg.test(str);
    },
    day: function (str) {
        var reg = /^(19|20)\d{2}(0?[1-9]|1[0-2])(0?[1-9]|[1-2][\d]|3[0-1])$/;
        return reg.test(str);
    },
    // (长度在6~18之间，只能包含字母、数字) 
    psw: function (str) {
        // 不能包含空格、回车、换行、中文字符，其他都可以，长度6到18位。
        var reg = /^[^\s\u4e00-\u9fa5]{6,18}$/;

        // var reg = /^[a-zA-Z0-9]{6,18}$/;
        return reg.test(str);
    }

    // number: function (str) {
    //     var reg =
    // }

}

//查找第一个子节点兼容处理
function firstChild(ele) {
    if (ele.firstElementChild) {
        return ele.firstElementChild
    } else {
        return ele.firstChild
    }
}


//查找第一个子节点兼容处理
function first(ele) {
    if (ele.firstElementChild) {
        return ele.firstElementChild
    } else {
        return ele.firstChild
    }
}

//查找最后一个子节点兼容处理
function last(ele) {
    if (ele.lastElementChild) {
        return ele.lastElementChild
    } else {
        return ele.lastChild
    }
}
//查找下一个兄弟节点兼容处理
function next(ele) {
    if (ele.nextElementSibling) {
        return ele.nextElementSibling
    } else {
        return ele.nextSibling
    }
}
//查找上一个兄弟节点兼容处理
function previous(ele) {
    if (ele.previousElementSibling) {
        return ele.previousElementSibling
    } else {
        return ele.previousSibling
    }
}