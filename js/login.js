var loginStatus=false;

$(document).ready(function(){
	
	checklogin();
if(!loginStatus)
{
	document.getElementById("login").addEventListener("click", validate);
	document.getElementById("register").addEventListener("click", register);
}
else
{
	window.location = 'http://localhost:8080/SeaStoreGit/index.html';
}




});




function checklogin()
{
	$.ajax({
			url: "php/loginstatus.php",
			type: "POST",
			data: {},
			dataType: "text",
			success: changeStatus
		});

}

function changeStatus(data)
{
	if(data == 1)
		loginStatus=true;

}

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
	if(data.length == 2){
		alert("Login Failed");
		return;
	}
	window.location = 'http://localhost:8080/SeaStoreGit/index.html';
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
	alert("Account Created Successfully");
	window.location ="http://localhost:8080/SeaStoreGit/login.html";
}



