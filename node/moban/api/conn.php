<?php
$servesname = 'localhost'; //服务器名
$usename = 'root';         //用户名
$psw = '';                 //密码
$dbname = 'item';           //数据库名

$conn = new mysqli($servesname,$usename,$psw,$dbname); //连接数据库

if($conn->connect_error){
    die ('连接错误 : '+ $conn->connect_error);
}
// echo '连接成功';
// $sql = "SELECT * FROM useinf ";
// $res = $conn->query($sql);
// var_dump($res);
?>