
<?php 

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$name = $_POST['user_name']; 
$phone = $_POST['user_phone'];
$text = $_POST['user_message'];
//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  																							// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'vladiklfc@mail.ru'; // Ваш логин от почты с которой будут отправляться письма
$mail->Password = 'Andrewbrown'; // Ваш пароль от почты с которой будут отправляться письма
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465; // TCP port to connect to / этот порт может отличаться у других провайдеров

$mail->setFrom('vladiklfc@mail.ru'); // от кого будет уходить письмо?
$mail->addAddress('hopal55651@anlubi.com');     // Кому будет уходить письмо 
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Заявка с сайта';
$mail->Body    = '' .$name . ' оставил заявку!\n Телефон: '.$phone."\n Сообщение: ". $text;

if(!$mail->send()) {
    echo 'Error';
} else {
    echo 'success';
}
?>