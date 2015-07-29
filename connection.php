<?php
	$server_name = "localhost";
	$username = "root";
	$password = "root";
	
	$database_name="portfolio";
	
	$conn = mysqli_connect($server_name,$username,$password, $database_name);
	//$database_selection = mysqli_select_db($conn, $database_name);