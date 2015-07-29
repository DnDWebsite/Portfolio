<?php
session_start();

	$language='';

	if(isset($_SESSION['lang'])){
		
		$language=$_SESSION['lang'];
	}
	else $language='eng';
	
	
	include ("connection.php");
	
	$query="SELECT * FROM `languages` WHERE `lang` = '".$language."'";
	
	$result=mysqli_query($conn, $query) or die('language error: '.mysqli_error());
	while($array=mysqli_fetch_array($result))
	{
		print_r($array);
		echo "<br />";
	}
	
?>