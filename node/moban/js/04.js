(function () {
    $('#required').focus();
    $('.btn-success').click(function () {
        console.log($(this));
        // let uid = $(this).parents('tr').find('#required').val()
        let name = $(this).parents('form').find('#required').val();
        let password = $(this).parents('form').find('#date').val();
        let tel = $(this).parents('form').find('#email').val();
        console.log(name, password, tel);
        let data = new Promise(resvloed => {
            $.ajax({
                type: 'post',
                url: 'api/user.php',
                data: {
                    'a': 'add',
                    // 'uid': uid,
                    'name': name,
                    'password': password,
                    'tel': tel
                },
                success: str => {
                    resvloed(str);
                }
            })
        })
        data.then(str => {
            console.log(str);
            let arr = JSON.parse(str).data;
            if (arr) {
                alert('添加成功！');
                $('#required').val('');
                $('#date').val('');
                $('#email').val('');
                $('#required').focus();
            } else {
                alert('添加失败！');
            }

        })
        // init();

    })
})()