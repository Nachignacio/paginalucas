<?php

echo "Hola Nacho";

$name = $_POST["name"];
$email = $_POST["email"];
$subject = $_POST["subject"];
$message = $_POST["message"];

require "vendor/autoload.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

$mail -> SMTPDebug = SMTP::DEBUG_SERVER;

$mail -> isSMTP();
$mail -> SMTPAuth = true;

$mail -> Host = "smtp.gmail.com";
$mail -> SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
$mail -> Port = 587;

$mail -> Username = "nachomanfredini@gmail.com";
$mail -> Password = "gpyz joks esue yvdj";

$mail -> setFrom($email, $name);
$mail -> addAddress("nachomanfredini@gmail.com", $name);

$subjectSpace = " - ";

$mail -> Subject = $name . $subjectSpace . $subject;

$from = "\n\n\n\n\n\nThis mail is from: ";

$mail -> Body = $message . $from . $email;

$mail -> send();

header("Location: http://www.onyria.com");

?>
