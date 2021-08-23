<?php
include "config.php";

$input =file_get_contents('php://input');
$data =json_decode($input,true);
$message =array();
$year = $data['year'];
$studentOne = $data['studentOne'];

$q = mysqli_query($mysqli,"select * from student where year='$year'and studentOne='$studentOne' ");
$result=mysqli_fetch_array($q);
if($result)
{
echo "You are login Successfully ";
//header("location:my-account.php");   // create my-account.php page for redirection 
	
}
else
{
	echo "failed ";
}


if($q)
{
    http_response_code(201);
    $message['status'] = "success";
}else

{
    http_response_code(422);
    $message['status'] = "error";
}

echo json_encode($message);
echo mysqli_error($conn);

