


$(document).ready(pageLoad);

function pageLoad()
{
	var category="mobile";
$.ajax({
			url: "php/account.php",
			type: "POST",
			data: { Category: "'" + category + "'" },
			dataType:"text",
			success: fetchData
		});
}

function fetchData(data) 
{
obj = JSON.parse(data);
var div=document.getElementById("account_details");
var newdiv;
$.each(obj, function(index, element)
	{	
		var id=obj[index].product_id;
		newdiv="<div><p>Product Id: ";
		newdiv+=obj[index].product_id;
		newdiv+=" Quantity: ";
		newdiv+=obj[index].quantity;
		newdiv+="Purchase id: ";
		newdiv+=obj[index].purchase_id;
		newdiv+="Date:";
		newdiv+=obj[index].date;
		newdiv+="</p>";
		newdiv+="</div>";
		$(div).append(newdiv);
		newdiv=null;
	});
}


