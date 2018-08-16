<?php
$uri = $_SERVER['REQUEST_URI'];
$id=substr($uri,7,1);
$con = mysqli_connect("localhost", "root", "root", "HW4");
if($id==null)
{
	 $sql = "SELECT * FROM book";
	 $bookarray = array();
	 $result = mysqli_query($con,$sql);
     while($row = mysqli_fetch_assoc($result)) {
		 $bookarray[] = array('title' => $row['title'],'price' => $row['price'],'category' => $row['category']);		 
        }
		echo json_encode($bookarray);
}
else
{
	$sql1 = "SELECT * from book where book_id = ".$id;
	$result1 = mysqli_query($con, $sql1);
	while($row1 = mysqli_fetch_assoc($result1)) {
	$authors = array();
	$sql2 = "SELECT * from authors where Author_id in (select Author_id from book_authors where Book_id =".$id.")";
	$result2 = mysqli_query($con,$sql2);
		while($row2 = mysqli_fetch_assoc($result2)) {
			$authors[] = $row2['Author_Name'];
		}
		$books = array('title' => $row1['title'], 'price' => $row1['price'], 'category' => $row1['category'], 'authors' => $authors);
	}
		echo json_encode($books);	

}		
?>