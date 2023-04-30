<?php
// database connection code
// $con = mysqli_connect('localhost', 'database_user', 'database_password','database');
error_reporting(0);

$con = mysqli_connect('localhost', 'root', '','db_contact');

if (!$con) {
  die("Connection failed: " . mysqli_connect_error());
}

// get the post records

//$id = $_POST['uaeid'];
//$userAddressAccount = $_POST['userAddressAccount'];

$id = mysqli_real_escape_string($con,$_POST['uaeid']);
$userAddressAccount = mysqli_real_escape_string($con,$_POST['userAddressAccount']);
// database insert SQL code
$sql = "INSERT INTO tbl_contact (idUAE,userAddressAccount) VALUES ('$id','$userAddressAccount');";

// insert in database 


if(empty($id) or empty($userAddressAccount))
{
  if (empty($id)){
    echo "<script type='text/javascript'> window.location.href='index.html';
    alert('Failed Registration, Please Enter valid ID'); </script>";
    exit();
  }
  else if (empty($userAddressAccount)){
    echo "<script type='text/javascript'> window.location.href='index.html';
    alert('Failed Registration, Please Enter valid Address'); </script>";
    exit();
  }
  
}
else{

  if(mysqli_query($con, $sql)){ 
    echo "<script type='text/javascript'> window.location.href='index.html';
    alert('Successful Registration'); </script>";
    exit();
  }
  else
  {
    die ('Problem with query' . mysqli_connect_errno());
  }
  
}

/*
if($rs)
{
  header("Location: index.html");
  exit();
}
else{
  echo "<script type='text/javascript'>alert('TEst');</script>";
  header("Location: index.html");
  exit();
}
*/
?>
