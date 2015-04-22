$(document).ready(function() {
   

    $.ajax({
			url: "php/isAdmin.php",
			type: "POST",
			dataType:"text",
			success: isValid
		});
} );

function isValid(data)
{
	pageLoad();
}







function pageLoad()
{
	var category="mobile";
$.ajax({
			url: "php/dashpageview.php",
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
		newrow+=obj[index].product_id;
		newrow+="</td><td>";
		newrow+=obj[index].productdescription;
		newrow+="</td><td>";
		newrow+=obj[index].producttype;
		newrow+="</td><td>";
		newrow+=obj[index].producttitle;
		newrow+="</td><td>";
		newrow+=obj[index].productprice;
		newrow+="</td>";
		newrow+="<td><a href=";
		newrow+="php/edit.php?id=";
		newrow+=obj[index].product_id;
		newrow+=">Edit</a></td>";
		newrow+="<td><a href=";
		newrow+="php/delete.php?id=";
		newrow+=obj[index].product_id;
		newrow+=">Delete</a></td>";
		newrow+="</tr>";
		$(tablebody).append(newrow);
		newrow=null;
	});
$('#table-example').dataTable();
}

