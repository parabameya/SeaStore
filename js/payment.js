function pay()
{
	 var r = confirm("Confirm Order");
	 if (r == true) 
	 {
		$.ajax({
			url: "php/pay.php",
			type: "POST"
		});
	
		alert("Item Successfully Purchased. Your Goods will be delivered in 3 business days");
		window.location="http://localhost:8080/SeaStoreGit/index.html";
	}
	else
	{
		alert("Please review your order");
	}
}