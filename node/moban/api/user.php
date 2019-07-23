<?php
    include 'conn.php';
    $a =isset($_POST['a'])?$_POST['a']:'read';
    $sql ="SELECT * FROM `user` ";
    $res = $conn->query($sql);
    $total =$res->num_rows; 
    switch($a){
        case 'read':
        $num = isset($_POST['num'])?$_POST['num']:'6';
        $page = isset($_POST['page'])?$_POST['page']:'1';
        $index = ($page-1)*$num;
        $sql2 = "SELECT * FROM `user` LIMIT $index,$num";
        $res2 = $conn->query($sql2);
        $content = $res2->fetch_all(MYSQLI_ASSOC);
        break;
        
        case 'success':
        $uid = isset($_POST['uid'])?$_POST['uid']:'6';
        $name = isset($_POST['name'])?$_POST['name']:'1';
        $password = isset($_POST['password'])?$_POST['password']:'6';
        $tel = isset($_POST['tel'])?$_POST['tel']:'1';
        $sql2 = " UPDATE `user` SET `name`= '$name', password= '$password', tel='$tel'  WHERE uid = $uid";
        $res2 = $conn->query($sql2);
        $content = $res2;
        break;

        case 'del':
        $uid = isset($_POST['uid'])?$_POST['uid']:'6';
        $sql2 = " DELETE FROM user WHERE uid = $uid";
        $res2 = $conn->query($sql2);
        $content = $res2;
        break;
        
        case 'add':
        $name = isset($_POST['name'])?$_POST['name']:'1';
        $password = isset($_POST['password'])?$_POST['password']:'6';
        $tel = isset($_POST['tel'])?$_POST['tel']:'1';
        $sql2 = "INSERT INTO `user` (name,password,tel)VALUES('$name','$password','$tel')";
        $res2 = $conn->query($sql2);
        $content = $res2;
    }


    $data =array(
        "data"=>$content,
        'total'=>$total,
    );
    echo json_encode($data,JSON_UNESCAPED_UNICODE);


?>