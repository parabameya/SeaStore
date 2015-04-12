var attempt = 3; // Variable to count number of attempts.
// Below function Executes on click of login button.
function validate(){
	var username = document.getElementById("username").value;
	var password = document.getElementById("password").value;
//for logout
$.ajax({
			url: "php/login.php",
			type: "POST",
			data: { Username: "'" + username + "'", Pwd: "'" + password + "'"},
			dataType:"text",
			success: fetchData
		});
	
}
function fetchData(data){
	obj = JSON.parse(data);
	console.log(obj);
	if(data == "SUCCESS")
	{
		window.location.assign("http://localhost:8080/SeaStoreGit/index.html");
		console.log("Success");
	}	
	if(data == "FAIL" || data == "" || data == null) 
	{
		fail(data);
		alert("Login Failed");
		return;
	}
}

function fail(data)
{
	attempt --;// Decrementing by one.
	alert("You have left "+attempt+" attempt;");
	if( attempt == 0)
	{
		document.getElementById("username").disabled = true;
		document.getElementById("password").disabled = true;
		document.getElementById("submit").disabled = true;
		return false;
	}
}



function register()
{
	var username = document.getElementById("reg_username").value;
	var password = document.getElementById("reg_password").value;
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var address = document.getElementById("address").value;
	var phoneno = document.getElementById("phoneno").value;
	$.ajax({
			url: "php/register.php",
			type: "POST",
			data: { User: "'" + username + "'", Paswd: "'" + password + "'", Email: "'" + email + "'", Address: "'" + address + "'", PhoneNo: "'" + phoneno + "'", Name: "'" + name + "'"},
			dataType:"text",
			success: fnsuccess
		});
}
function fnsuccess(data){
	alert("Successfull");
	window.location.assign("http://localhost:8080/SeaStoreGit/login.html");
}




