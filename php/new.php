<?php
function renderForm($first, $last, $error)
 {
 ?>
 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
 <html>
 <head>
 <title>New Record</title>
 </head>
 <body>
 <?php 
 // if there are any errors, display them
 if ($error != '')
 {
 echo '<div style="padding:4px; border:1px solid red; color:red;">'.$error.'</div>';
 }
 ?> 
 
 <form action="" method="post">
 <div>
 <strong>ID: *</strong> <input type="text" name="id" value="<?php echo $id; ?>" /><br/>	
 <strong>Description: *</strong> <input type="text" name="desc" value="<?php echo $desc; ?>" /><br/>
 <strong>Type: *</strong> <input type="text" name="type" value="<?php echo $type; ?>" /><br/>
 <strong>Title: *</strong> <input type="text" name="title" value="<?php echo $title; ?>" /><br/>
 <strong>Price: *</strong> <input type="text" name="price" value="<?php echo $price; ?>" /><br/>
 <p>* required</p>
 <input type="submit" name="submit" value="Submit">
 </div>
 </form> 
 </body>
 </html>
 <?php 
 }
 
 
 

 // connect to the database
include "connect.php";
 
 // check if the form has been submitted. If it has, start to process the form and save it to the database
 if (isset($_POST['submit']))
 { 
 // get form data, making sure it is valid
 $id = mysql_real_escape_string(htmlspecialchars($_POST['id']));
 $desc = mysql_real_escape_string(htmlspecialchars($_POST['desc']));
 $type = mysql_real_escape_string(htmlspecialchars($_POST['type']));
 $title = mysql_real_escape_string(htmlspecialchars($_POST['title']));
 $price = mysql_real_escape_string(htmlspecialchars($_POST['price']));
 
 // check to make sure both fields are entered
 if ($id == '' ||$desc == '' || $type == '' || $title == '' || $price == '')
 {
 // generate error message
 $error = 'ERROR: Please fill in all required fields!';
 
 // if either field is blank, display the form again
 renderForm($desc, $type, $title, $price, $error);
 }
 else
 {
 // save the data to the database
 mysql_query("INSERT products SET product_id='$id', productdescription='$desc', producttype='$type', producttitle='$title', productprice='$price'")
 or die(mysql_error()); 
 
 // once saved, redirect back to the view page
 header("Location: http://localhost:8080/SeaStoreGit/dashboard.html"); 
 }
 }
 else
 // if the form hasn't been submitted, display the form
 {
 renderForm('','','');
 }
?>