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

var validateText = function(text){
	return /^[a-zA-Z0-9]+$/.test(text.val());
	};

var validatePassword = function(text){
if ($(text).val().length < 5){
		return false;
	}
	else
		return true;
}; 

$(document).ready(function(){
    $("input").focus(function(){
		if($(this).attr("id")=="username"){
			var info ="Please enter the Username having alphanumeric characters only";
			var element = $("fieldset").find("div.controls:eq(0)");
			validateField(element,info,validateText);
		}

		 if($(this).attr("id")=="password"){
			var info ="Please enter the Password with minimum 5 characters";
			var element = $("fieldset").find("div.controls:eq(1)");
			validateField(element,info,validatePassword);
		 }
		
		
	});
});