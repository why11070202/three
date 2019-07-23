(function () {
    let num = 3;
    let page = 1;
    let allpage = null;


    function init() {
        let sk = (page - 1) * num
        let str2 = '';
        // console.log('555');
        let data = new Promise(function (resvloed) {
            $.ajax({
                type: 'get',
                url: 'http://localhost:3001/users/list',
                data: {
                    'num': num,
                    'page': sk
                },
                success: str => {
                    resvloed(str);
                }
            })
        })


        data.then(str => {
            // console.log(str);
            let arr = JSON.parse(str);
            let html = arr.data.map(function (item) {
                return ` <tr>
                <td><input type="checkbox" /></td>
                <td class ="uid">${item._id}</td>
                <td contenteditable="true" class ="name">${item.name}</td>
                <td contenteditable="true" class ="password">${item.password}</td>
                <td contenteditable="true"class="center tel">${item.tel}</td>
                <td>
                    <button type="submit" class="btn btn-success">修改并保存</button>
                    <button type="submit" class="btn btn-danger">删除</button>
                    <button type="submit" class="btn btn-info">Edit</button>
                </td>
            </tr>`
            }).join('')
            $('.widget-content tbody').html(html);


            allpage = Math.ceil(arr.num / num);

            //页码样式
            if (page == 1) {
                $('.first').addClass('ui-state-disabled');
                $('.previous').addClass('ui-state-disabled');
            } else if (page == allpage) {
                $('.last').addClass('ui-state-disabled');
                $('.next').addClass('ui-state-disabled');
                $('.first').removeClass('ui-state-disabled');
                $('.previous').removeClass('ui-state-disabled');

            } else {
                $('.first').removeClass('ui-state-disabled');
                $('.last').removeClass('ui-state-disabled');
                $('.next').removeClass('ui-state-disabled');
                $('.previous').removeClass('ui-state-disabled');
            }

            // console.log(allpage);
            if (allpage <= 1) {
                $('.dataTables_paginate').hide();
            } else {
                for (var i = 0; i < allpage; i++) {
                    str2 += `<a tabindex="0" class="fg-button ui-button ui-state-default">${i+1}</a> `
                }
                $('.dataTables_paginate span').html(str2);
                $('.dataTables_paginate span a').eq(page - 1).addClass('ui-state-disabled');
            }
        })
    }

    init();

    //点击页码数字
    $('.dataTables_paginate span').on('click', 'a', function () {
        // console.log($(this).html());
        page = $(this).html();
        init();
    })


    //点击尾页
    $('.dataTables_paginate ').on('click', '.last', function () {
        if (page < allpage) {
            page = allpage;
            window.scrollTo(0, 0);
            init();
        }
    })
    //点击首页
    $('.dataTables_paginate').on('click', '.first', function () {
        if (page > 1) {
            page = 1;
            window.scrollTo(0, 0);
            init();
        }
    })
    //点击下一页
    $('.dataTables_paginate').on('click', '.next', function () {
        if (page < allpage) {
            page++;
            window.scrollTo(0, 0);
            init()
        }
    })
    // 点击上一页
    $('.dataTables_paginate').on('click', '.pprevious', function () {
        if (page > 1) {
            page--;
            window.scrollTo(0, 0);
            init()
        }
    })

    // 点击修改并保存
    $('.widget-content tbody').on('click', '.btn-success', function () {
        let uid = $(this).parents('tr').find('.uid').html()
        let name = $(this).parents('tr').find('.name').html();
        let password = $(this).parents('tr').find('.password').html();
        let tel = $(this).parents('tr').find('.tel').html();
        // console.log(uid, name, password, tel);
        let data = new Promise(resvloed => {
            $.ajax({
                type: 'get',
                url: 'http://localhost:3001/users/update',
                data: {
                    'id': uid,
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
            // console.log(str);
            if (str === '1') {
                alert('修改成功！');
            } else {
                alert('修改失败！');
            }
            init();
        })

    })
    // 点击删除
    $('.widget-content tbody').on('click', '.btn-danger', function () {
        let id = $(this).parents('tr').find('.uid').html()
        // console.log(uid, name, password, tel);
        let data = new Promise(resvloed => {
            $.ajax({
                type: 'get',
                url: 'http://localhost:3001/users/del',
                data: {
                    id
                },
                success: str => {
                    resvloed(str);
                }
            })
        })
        data.then(str => {
            console.log(str);
            // let arr = JSON.parse(str).data;
            if (str === '1') {
                init();
                alert('删除成功！');
            } else {
                init();
                alert('删除失败！');
            }
        })
    })
})()