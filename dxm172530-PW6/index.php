<?php

$servername = "localhost";
$username = "root";
$password = "root";
$dbname="PW6";

//create connection
$con=mysqli_connect($servername,$username,$password,$dbname);

// Check connection
if (!$con) 
{
    die("Connection failed: " . mysqli_connect_error());
}

$sql = "Select * from  Book";

$result = mysqli_query($con, $sql);
if (mysqli_num_rows($result) > 0) 
{
    // output 
	while($row = mysqli_fetch_assoc($result)) 
    {
    	$bookList[] = Array("id" => $row['Book_id'], "category" => $row['category'], "title" => $row['title'], "year" => $row['year'], "price" => $row['price']);
    }
}
else 
{
   echo "0 results";
}

$result = $bookList;
header('content-type: application/json');
echo (json_encode($result)); 

mysqli_close($con);

?>