<?php

include 'functions.php';

if (!empty($_POST)){

  $data['success'] = true;
  $_POST  = multiDimensionalArrayMap('cleanEvilTags', $_POST);
  $_POST  = multiDimensionalArrayMap('cleanData', $_POST);

  //your email adress 
  $emailTo ="team@dndwebsite.com";

  //from email adress
  $emailFrom ="maticnk@gmail.com";

  //email subject
  $emailSubject = "Mail from DnDWebsite";

  $name = $_POST["name"];
  $email = $_POST["email"];
  $comment = $_POST["comment"];
  if($name == "")
   $data['success'] = false;
 
 if (!preg_match("/^[_\.0-9a-zA-Z-]+@([0-9a-zA-Z][0-9a-zA-Z-]+\.)+[a-zA-Z]{2,6}$/i", $email)) 
   $data['success'] = false;


 if($comment == "")
   $data['success'] = false;

 if($data['success'] == true){

  $message = "NAME: $name<br>
  EMAIL: $email<br>
  COMMENT: $comment";
  
  $team_message="New message on team@dndwebsite received. Please login on webmail at:<br /> http://www.dndwebsite.com:2095/cpsess4909109787/webmail/paper_lantern/index.html?mailclient=horde <br /> to view the message.<br />Mail: 'team@dndwebsite.com' <br />Password: 'popovicmatic123'";
  


  $headers = "MIME-Version: 1.0" . "\r\n"; 
  $headers .= "Content-type:text/html; charset=utf-8" . "\r\n"; 
  $headers .= "From: <$emailFrom>" . "\r\n";
  mail($emailTo, $emailSubject, $message, $headers);
  mail("maticnk@gmail.com", $emailSubject, $team_message, $headers);
  mail("mirjana.popovic@outlook.com", $emailSubject, $team_message, $headers);

  $data['success'] = true;
  echo json_encode($data);
}
}