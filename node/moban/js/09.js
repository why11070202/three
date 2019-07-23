(function () {

    let data = () => {
        let name = $.trim($('.control-group input').val());
        let password = $.trim($('.control-group2 input').val());
        if (name && password) {
            return new Promise((resolve, reject) => {
                $.ajax({
                    url: 'http:localhost:3001/admin/login',
                    type: 'post',
                    data: {
                        'username': name,
                        'password': password
                    }
                }).done((data) => {
                    resolve(data);
                })
            })
        } else {
            alert('请输入完整的信息');
        }
    }

    $('#checkBtn').click(async () => {
        // console.log(name, password);
        let str = await data();
        if (str === 'yes') {
            location.href = '01admin.html'
        } else {
            alert('账号密码错误！');
            $('.control-group2 input').val('');
            $('.control-group2 input').focus();
        }
    })

}())