<?php

//   use PHPMailer\PHPMailer\Exception;
//   use PHPMailer\PHPMailer\PHPMailer;

//  require_once 'include/Exception.php';
//  require_once 'include/PHPMailer.php';
//  require_once 'include/SMTP.php';

//  if (isset($_POST["email"], $_POST["message"]) && !empty($_POST["email"]) && !empty($_POST["message"])) {
//    $email = $_POST["email"];
//    $message = $_POST["message"];
//    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {

//      $mail = new PHPMailer(true);

//      try {
//        // configuration
//        $mail->isSMTP();
//        $mail->Host = "smtp.gmail.com";
//        $mail->SMTPAuth = true;
//        $mail->Username = "@gmail.com";
//        $mail->Password = "ufwyxnildbmerssj";
//        $mail->Port = 587;
//        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;

//       // charSet
//        $mail->CharSet = "utf-8\r\n";

//       // Expediteur 
//        $mail->addAddress($email);

//       // Destinateur 
//        $mail->setFrom("@gmail.com");

//       // Contenu 
//        $mail->Subject = "Portfolio";
//        $mail->Body = $message;

//       //send
//        $mail->send();
//        echo "<span class = 'sendMessage sendMessage-success'> Success! </span>";
//      } catch (Exception) {
//        echo "<span class = 'sendMessage sendMessage-error'> Error to send the message </span>";
//      }
//    } else {
//      echo "<span class = 'sendMessage sendMessage-error'> Email address invalid </span>";
//    }
//  } else {
//    echo "<span class= 'sendMessage sendMessage-error'> Please check your inputs </span>";
//   }