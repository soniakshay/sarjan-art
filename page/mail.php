<?php

// CHANGE THE VARIABLES BELOW

$EmailFrom = "info@sarjanartsevent@com";
$EmailTo = "info@sarjanartsevent@com";
$Subject = "Contact Form Enquiry";

$Name = Trim(stripslashes($_POST['name'])); 
$Tel = Trim(stripslashes($_POST['mno'])); 
$Email = Trim(stripslashes($_POST['email'])); 
$Message = Trim(stripslashes($_POST['msg']));

// prepare email body text
$Body = "";
$Body .= "Name: ";
$Body .= $Name;
$Body .= "\n";
$Body .= "Tel: ";
$Body .= $Tel;
$Body .= "\n";
$Body .= "Email: ";
$Body .= $Email;
$Body .= "\n";
$Body .= "Message: ";
$Body .= $Message;
$Body .= "\n";

// send email 
$success = mail($EmailTo, $Subject, $Body, "From: <$EmailFrom>");

// redirect to success page
// CHANGE THE URL BELOW TO YOUR "THANK YOU" PAGE
if ($success){
	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=contactus.php?msg=suc">';
}
else{
	echo '<META HTTP-EQUIV="Refresh" Content="0; URL=contactus.php?msg=fail">';

}
?>