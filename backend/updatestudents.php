<?php
include "config.php";
  
$input = file_get_contents('php://input');
$data = json_decode($input,true);
$message = array();
$StudentName = $data['StudentName'];
$MarksObtained = $data['MarksObtained'];
$Result = $data['Result'];
$id = $_GET['id'];



$q = mysqli_query($conn, "UPDATE student SET StudentName='$StudentName',MarksObtained='$MarksObtained',Result='$Result' WHERE id = '$id' LIMIT 1");


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