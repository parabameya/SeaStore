var validateField = function(fieldElem, infoMessage, validateFn) {
	// TODO: Implement validateField.
			if ($(fieldElem).val().length ==0){
				fieldElem.find(".change").remove();
				var spanElement = '<div class = "change"><span class ="info">'+infoMessage+'</span></div>';
				fieldElem.append(spanElement);
			}
			$(fieldElem).focusout(function(){
				fieldElem.find(".change").remove();
				var input=fieldElem.find("input");
				if (validateFn(input)){
					var span = '<div class = "change"><span class ="ok">OK</span></div>';
				}
				else {
					var span = '<div class = "change"><span class ="error">Error</span></div>';
				}
				fieldElem.append(span);
				
			});
};


var validateRegField = function(fieldElem, infoMessage, validateFn) {
	// TODO: Implement validateField.
			if ($(fieldElem).val().length ==0){
				fieldElem.find(".change").remove();
				var spanElement = '<div class = "change"><span class ="info">'+infoMessage+'</span></div>';
				fieldElem.append(spanElement);
			}
			$(fieldElem).focusout(function(){
				fieldElem.find(".change").remove();
				var input=fieldElem.find("input");
				if (validateFn(input)){
					var span = '<div class = "change"><span class ="ok">OK</span></div>';
				}
				else {
					var span = '<div class = "change"><span class ="error">Error</span></div>';
				}
				fieldElem.append(span);
				
			});
};

var validateAddress = function(fieldElem, infoMessage, validateFn) {
	// TODO: Implement validateField.
			if ($(fieldElem).val().length ==0){
				fieldElem.find(".change").remove();
				var spanElement = '<div class = "change"><span class ="info">'+infoMessage+'</span></div>';
				fieldElem.append(spanElement);
			}
			$(fieldElem).focusout(function(){
				fieldElem.find(".change").remove();
				var input=fieldElem.find("textarea");
				if (validateFn(input)){
					var span = '<div class = "change"><span class ="ok">OK</span></div>';
				}
				else {
					var span = '<div class = "change"><span class ="error">Error</span></div>';
				}
				fieldElem.append(span);
				
			});
};

var validateText = function(text){
	return /^[a-zA-Z0-9]+$/.test(text.val());
	};


	var validateAddrText = function(text){
	return /^[a-zA-Z0-9#\ \,\n.]+$/.test(text.val());
	};


var validatePassword = function(text){
if ($(text).val().length < 5){
		return false;
	}
	else
		return true;
}; 



var validateEmail = function(text){
	var email=$(text).val();
	var atpos = email.indexOf("@");
    if(atpos < 0)
    	return false;
    else
	    return true;
};

var validatePhone = function(text){
	return /^[0-9]+-+[0-9]+-+[0-9]+$/.test(text.val());
	};
	
var validateName = function(text){
	return /^[a-zA-Z]+$/.test(text.val());
	};

$(document).ready(function(){
    $("input").focus(function(){
		if($(this).attr("id")=="username"){
			var info ="Please enter the Username having alphanumeric characters only";
			var element = $("fieldset").find("div.controls1:eq(0)");
			validateField(element,info,validateText);
		}

		 if($(this).attr("id")=="password"){
			var info ="Please enter the Password with minimum 5 characters";
			var element = $("fieldset").find("div.controls1:eq(1)");
			validateField(element,info,validatePassword);
		 }
		 if($(this).attr("id")=="reg_username"){
			var info ="Please enter the Username having alphanumeric characters only";
			var element = $("fieldset").find("div.controls:eq(0)");
			validateRegField(element,info,validateText);
		}

		 if($(this).attr("id")=="reg_password"){
			var info ="Please enter the Password with minimum 5 characters";
			var element = $("fieldset").find("div.controls:eq(1)");
			validateRegField(element,info,validatePassword);
		 }
		 
		
		 if($(this).attr("id")=="name"){
			var info ="Please enter the Name having alphabets only";
			var element = $("fieldset").find("div.controls:eq(2)");
			validateRegField(element,info,validateName);
		}

 if($(this).attr("id")=="email"){
			var info ="Please enter the Email (someone@example.com)";
			var element = $("fieldset").find("div.controls:eq(3)");
			validateRegField(element,info,validateEmail);
		}
		 if($(this).attr("id")=="phoneno"){
			var info ="Please enter the Phonenumber(123-456-7890)";
			var element = $("fieldset").find("div.controls:eq(4)");
			validateRegField(element,info,validatePhone);
		 }
		
		
	});
$("textarea").focus(function(){
		 if($(this).attr("id")=="address"){
			var info ="Please enter the Address";
			var element = $("fieldset").find("div.controls:eq(5)");
			validateAddress(element,info,validateAddrText);
		}
	 });
});