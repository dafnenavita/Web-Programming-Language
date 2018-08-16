<html>
<head>

</head>
<body>

<?php session_start();
	if (!isset($_SESSION['username']) || trim($_SESSION['username']) == '')
	 {
     	header("Location: login.html");
	 } 
	 else 
	 {
	  $con=mysqli_connect("localhost","root","root","PW5");
      if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
      } 
      else {

      	$userQuery = "SELECT * FROM Users WHERE username ='" . $_SESSION['username'] . "'";
      	echo $name;
      	$userResult = mysqli_query($con,$userQuery);
		$userData = mysqli_fetch_array($userResult);
		echo "<h2> Welcome ".$userData['fullname']."!</h2>";
		echo "<img src='img/".$userData['avatar'].".png''><br><br><br>";
		$moviesQuery = "SELECT * FROM Movies JOIN FavoriteMovies ON Movies.movie_id=FavoriteMovies.movie_id AND (username ='" . $_SESSION['username'] . "')";
		$moviesResult = mysqli_query($con,$moviesQuery);

		echo "<h3>Your favorite movies :<br></h3>";

		while($row = mysqli_fetch_array($moviesResult)){
			echo '<ul>';
			echo '<li>'.$row['title'].'</li><br>';
			echo '</ul>';		}

      }
      mysqli_close($con);
     }

	?>
</body>
</html>

