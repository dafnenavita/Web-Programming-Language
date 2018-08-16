<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") 
{
  $username = $_POST['username'];
  $password = $_POST['password'];

  if(trim($username) == "" || trim($password) =="")
  {
    header("Location: login.html");
  }
  else
  {
      $con=mysqli_connect("localhost","root","root","pw5");

      if (mysqli_connect_errno()) {
        echo "Failed to connect to MySQL: " . mysqli_connect_error();
      } 
      
      $query = "SELECT username,password FROM USERS WHERE username =$_POST['username'] and password = '" . $password . "'";

      $result = mysqli_query($con,$query);
      $num  = mysqli_num_rows($result);
      if($num == 0){
          header("Location: login.html");
      } else{
          session_start();
          $_SESSION["username"] = $username;
          header('Location: welcome.php');
      }    
    }
    mysqli_close($con); 
}


?>
