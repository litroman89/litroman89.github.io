<?php
$name = $_POST['name'];
$email = $_POST['email'];
// $msg = $_POST['msg'];
$name = htmlspecialchars($name);
$email = htmlspecialchars($email);
// $msg = htmlspecialchars($message);
$name = urldecode($name);
$email = urldecode($email);
// $msg = urldecode($message);
$name = trim($name);
$email = trim($email);
// $msg = trim($message);
// echo $name;
// echo "<br>";
// echo $email;
if (mail("romamedrep@gmail.com", "Заявка с сайта", "ФИО:".$name.". E-mail: ".$email ,"From: info@pureodor.com.ua \r\n"))
 {     echo "сообщение успешно отправлено";
} else {
    echo "при отправке сообщения возникли ошибки";
}?>