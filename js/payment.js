function pay()
{
	$.ajax({
			url: "php/pay.php",
			type: "POST",
			data: {},
			dataType:"text",
			success: fnsuccess
		});
}

function fnsuccess(data)
{
	console.log(data);
	if(data=="ERROR")
		alert("Something went wrong");
	else
		alert("Item Successfully Purchased. Your Goods will be delivered in 3 business days");
}