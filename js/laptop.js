$(document).ready(pageLoad);

function pageLoad()
{
	var category="laptop";
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
		newdiv="<div class='grid_1_of_3 images_1_of_3'><img width='294px' height='294px' src='";
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
		newdiv+="</span></p></div><div class='add-cart'><h4><a href='#'>Add to Cart</a></h4></div></div>";
		newdiv+="</div>";

		$(div).append(newdiv);
		newdiv=null;
	});
}



function updateCart(data) 
{
$.ajax({
			url: "php/update-cart.php",
			type: "POST",
			data: { productTitle: "'" + data + "'" },
			dataType:"text",
			success : printCart
		});
}

function printCart(data)
{
	console.log(data);
}