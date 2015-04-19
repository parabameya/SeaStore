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


// $("#username").focus(function(){
// 		if($(this).attr("id")=="username"){
// 			var myid = this.id;
// 			var infomessage ="Please enter the Username";
// 			var errormessage ="Enter a valid username";
			
// 			if ($(this).val().length == 0){
// 				console.log("Here");
// 			$().this.append(infomessage);		
// 			}
// 			$(this).focusout(function(){
// 				$(this).remove();
// 				if ($(this).val().length == 0){
			
// 				$(this).append(errormessage);
// 				} else {
// 				var spanOk = "Ok";
// 				$(this).append(spanOk);
// 				}
// 			});
// 		}
// 		});
// $("input").focus(function(){
// 		if($(this).attr("id")=="username" || $(this).attr("id")=="reg_username"){
// 			var infomessage ="Please enter the Username";
// 			var tableRw = $("#username");
// 			validateField(tableRw,infomessage,validateText);
// 		}

// 		if($(this).attr("id")=="password" || $(this).attr("id")=="reg_password"){
// 			var infomessage ="Please enter the Password";
// 			var tableRw = $("table").find("tr:first").next();
		
// 			validateField(tableRw,infomessage,validatePassword);
// 		}
		
// 		if($(this).attr("id")=="email"){
// 			var infomessage ="Please enter the Email";
// 			var tableRw = $("table").find("tr:first").next().next();
		
// 			validateField(tableRw,infomessage,validateEmail);
// 		}
// 		if($(this).attr("id")=="PhoneNo"){
// 			var infomessage ="Please enter the Phone No";
// 			var tableRw = $("table").find("tr:first").next().next();
		
// 			validateField(tableRw,infomessage,validateEmail);
// 		}
// 		if($(this).attr("id")=="address"){
// 			var infomessage ="Please enter the Address";
// 			var tableRw = $("table").find("tr:first").next().next();
		
// 			validateField(tableRw,infomessage,validateText);
// 		}
// 	});


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





// var validateField = function(fieldElem, infoMessage, validateFn) {
// 	// TODO: Implement validateField.
// 	console.log(fieldElem.text);
// 			if ($(fieldElem).val().length == 0){
				
// 				var spanElement = '<span class ="info">'+infoMessage+'</span>';
// 				fieldElem.append(spanElement);
// 			}
// 			$(fieldElem).focusout(function(){
				
// 			//	var input=fieldElem.find("input");
// 				if (validateFn(fieldElem)){
// 					var span = '<span class ="ok">OK</span>';
// 				}
// 				else {
// 					var span = '<span class ="error">Error</span>';
// 				}
// 				fieldElem.append(span);
// 				if (fieldElem.val().length == 0){
// 					fieldElem.find("span").remove();
// 				}
// 			});
// };
// //function to validate the input Text to check for aplha numeric characters
// var validateText = function(text){
// 	var inputText=text.val();
//  for(var i=0; i<inputText.length; i++)
//       {
//         var char1 = inputText.charAt(i);
//         var cc = char1.charCodeAt(0);
//         if((cc>47 && cc<58) || (cc>64 && cc<91) || (cc>96 && cc<123))
//         {}
//          else {
//          	return false;
//         }
//       }
//      return true;
// };

// //function to validate the email for @
// var validateEmail = function(text){
// 	var email=$(text).val();
// 	var atpos = email.indexOf("@");
//     if(atpos < 0)
//     	return false;
//     else
// 	    return true;
// };

// var validatePassword = function(text){
// if ($(text).val().length < 8){
// 		return false;
// 	}
// 	else
// 		return true;
// };