<?php
include 'login.php';

if(!isset($_SESSION['username']) || !isset($_SESSION['name'])) 
{

	header('Location: login.html');
	exit();	
}

?>

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset-utf-8" />
</head>
<body>
<?php
$_SESSION['count']++; 
?>
<p><?php echo "Welcome, " . $_SESSION['name']; ?></p>
<p><?php echo "Username:" . $_SESSION['username'] ;?></p>
<h4>You have visited this page <?php echo( $_SESSION['count'] ); ?> times in this session</h4>
<form method="POST" action="welcome.php">
<input type="submit" value="Reload"/> 
<input type="checkbox" name="logout" onClick="
<?php if(isset($_POST["logout"]))
{	
	session_start();
	session_destroy();
}?>">
</form>
</body>
</html>
