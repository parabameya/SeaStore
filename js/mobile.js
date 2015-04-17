$(document).ready(pageLoad);

function pageLoad()
{
	var category="mobile";
$.ajax({
			url: "php/product.php",
			type: "POST",
			data: { Category: "'" + category + "'" },
			dataType:"text",
			success: fetchData
		});
}

function fetchData(data) 
{
obj = JSON.parse(data);
var div=document.getElementById("main_php_products");
var newdiv;
$.each(obj, function(index, element)
	{	
		var id=obj[index].product_id;
		newdiv="<div class='grid_1_of_3 images_1_of_3'><img height='162px' width='162px' src='";
		newdiv+="http://localhost:8080/SeaStoreGit/images/products/";
		newdiv+=obj[index].producttitle;
		newdiv+=".jpg";
		newdiv+="' alt='";
		newdiv+=obj[index].producttitle;
		newdiv+="' /><h3>";
		newdiv+=obj[index].producttitle;
		newdiv+="</h3><p>";
		newdiv+=obj[index].productdescription;
		newdiv+="</p>";
		newdiv+="<div class='price-details'><div class='price-number'><p><span class='rupees'> $";
		newdiv+=obj[index].productprice;
		newdiv+="</span></p></div><div id='add-to-cart' class='add-cart'><h4><a id="+id+">Add to Cart</a></h4></div></div>";
		newdiv+="</div>";

		$(div).append(newdiv);
		newdiv=null;
	});
}

function addToCart(pId)
{
	alert(pId);
}

