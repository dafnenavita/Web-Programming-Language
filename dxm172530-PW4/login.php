<?php
session_start();
if($_SERVER["REQUEST_METHOD"]=="POST")
{
if ((empty($_POST['name'])) || (empty($_POST['username'])) || (empty($_POST['password'])))
{
	Header("Location:login.html");
	exit();
}
else 
{
	$_SESSION['name'] = $_POST['name'];
	 $_SESSION['username'] = $_POST['username'];
	 Header("Location: welcome.php");
	 exit();
}
}
?> 

 
 
