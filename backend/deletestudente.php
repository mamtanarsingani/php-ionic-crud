<?php 

include "config.php";


   
   $input = file_get_contents('php://input');
$message = array();

   $id = $_GET['id'];
   $q = mysqli_query($conn, "DELETE FROM student WHERE id = '$id' LIMIT 1");

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