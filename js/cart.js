
function removeProd(index,prodID,prodPrice)
{
$.ajax({
			url: "php/cart-remove.php",
			type: "POST",
			data: { Index: "'" + index + "'", ProdID: "'" + prodID + "'", ProdPrice: "'" + prodPrice + "'"},
			dataType:"text",
			success: reloadPage
		});

}

function reloadPage(data)
{
	console.log(data);
	location.reload();

}


function fnsuccess(data)
{
	
	 obj = JSON.parse(data);
var div=document.getElementById("add_rows");
var tablehead="<thead><tr><th>Product</th><th>Quantity</th><th class='text-center'>Price</th><th class='text-center'>Total</th><th> </th></tr></thead><tbody>";
$(div).append(tablehead);
var total=0;
var newdiv;
$.each(obj, function(index, element)
	{
		total+=parseInt(obj[index].productprice);
		newdiv="<tr>";
		newdiv+="<td class='col-sm-8 col-md-6'><div class='media'><img class='media-object' src='";
		newdiv+="http://localhost:8080/SeaStoreGit/images/products/";
		newdiv+=obj[index].producttitle;
		newdiv+=".jpg";
		newdiv+="' alt='";
		newdiv+=obj[index].producttitle;
		newdiv+="' style='width: 72px; height: 72px;'>";
		newdiv+="<div class='media-body'><h4 class='media-heading'>";
		newdiv+=obj[index].producttitle;
		newdiv+="</h4>";
		newdiv+="<span>Status: </span><span class='text-success'><strong>In Stock</strong></span>";
		newdiv+="</div></div></td><td class='col-sm-1 col-md-1' style='text-align: center'>";
		newdiv+= "<input type='text' class='form-control' id='exampleInputEmail1' value='1' disabled></td>";
		newdiv+="<td class='col-sm-1 col-md-1 text-center'><strong>$";
		newdiv+=obj[index].productprice;
		newdiv+="</strong></td>";
		newdiv+="<td class='col-sm-1 col-md-1 text-center'><strong>$";
		newdiv+=obj[index].productprice;
		newdiv+="</strong></td>";
		newdiv+="<td><button type='button' onClick='removeProd("+index+","+obj[index].product_id+","+obj[index].productprice+")'";
		newdiv+=" class='btn btn-danger'><span class='glyphicon glyphicon-remove'></span> Remove</button></td></tr>";
	$(div).append(newdiv);
		newdiv=null;
	});

	var divfooter="<tr><td></td><td></td><td></td><td><h5>Estimated shipping</h5></td><td class='text-right'><h5><strong>$0</strong></h5></td></tr>";
    divfooter+="<tr><td>   </td><td>   </td><td>   </td><td><h3>Total</h3></td><td class='text-right'><h3><strong>$";
    divfooter+= total;
    divfooter+="</strong></h3></td></tr><tr><td>   </td><td>   </td><td>   </td><td>";
    divfooter+="<a href='index.html'><button type='button' class='btn btn-default'><span class='glyphicon glyphicon-shopping-cart'></span> Continue Shopping";
    divfooter+="</button></a></td><td><a href='shipping.html'><button type='button' class='btn btn-success'>Checkout <span class='glyphicon glyphicon-play'></span>";
    divfooter+="</button></a></td></tr></tbody>";

$(div).append(divfooter);
}



function populate()
{
	$.ajax({
			url: "php/cart-populate.php",
			type: "POST",
			dataType:"text",
			success: fnsuccess
		});
}

function checkCart()
{
		$.ajax({
			url: "php/check-cart.php",
			type: "POST",
			dataType:"text",
			success: displayStatus
		});
}


function displayStatus(data)
{
	if(data)
		populate();
	else
	{
		alert("No Items in Cart");
		window.location="index.html";
	}
}

$(document).ready(function(){

	checkCart();
	});