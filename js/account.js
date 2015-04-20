


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
var tablebody=document.getElementById("account_details");
var newrow;
$.each(obj, function(index, element)
	{	
		var id=obj[index].product_id;
		newrow="<tr><td>";
		newrow+=obj[index].date;
		newrow+="</td><td>";
		newrow+=obj[index].purchase_id;
		newrow+=" </td><td>";
		newrow+="<img height='25px' width='25px' src='http://localhost:8080/SeaStoreGit/images/products/";
		newrow+=obj[index].producttitle;
		newrow+=".jpg' alt='";
		newrow+=obj[index].producttitle;
		newrow+="' />";
		newrow+=obj[index].producttitle;
		newrow+="</td><td>";
		newrow+=obj[index].quantity;
		newrow+="</td><td>";
		newrow+=obj[index].productprice;
		newrow+="</td>";
		newrow+="</tr>";
		$(tablebody).append(newrow);
		newrow=null;
	});
}

