function pay()
{
	$.ajax({
			url: "php/pay.php",
			type: "POST",
			data: {},
			dataType:"boolean",
			success: fnsuccess
		});
}

function success(data)
{
	if(data)
		alert("Item Successfully Purchased. Your Goods will be delivered in 3 business days");
	else
		alert("Something went wrong");
}