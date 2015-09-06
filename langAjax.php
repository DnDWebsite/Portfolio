<?php
@session_start();
	if(isset($_POST['lang'])){
		
		$lang=$_POST['lang'];
		
		include ("connection.php");
	
	$query="SELECT * FROM `languages` WHERE `lang` = '".$lang."'";
	
	$result=mysqli_query($conn, $query) or die('language error: '.mysql_error());
	$array=mysqli_fetch_array($result);
		
	$_SESSION['lang2']=$array["lang"];
		
		echo json_encode($array);
		
	}

?>