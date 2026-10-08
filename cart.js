$(document).ready(function () {
	let orderDetails = JSON.parse(localStorage.getItem("orderDetails")) || [];

	updateCartCount(orderDetails.length);

	$(".btnBuy").click(function () {
		let item = $(this).closest(".product");
		let name = item.find(".product-name").text();
		let price = item.find(".product-price").text();
		let photo = item.find("img").attr("src");

		let order = {
			name: name,
			price: price,
			photo: photo
		};

		orderDetails.push(order);
		localStorage.setItem("orderDetails", JSON.stringify(orderDetails));

		updateCartCount(orderDetails.length);
		alert("Đã thêm vào giỏ: " + name);
	});

	function updateCartCount(count) {
		$(".header .banner-content a[href='cart.html']").text("Giỏ hàng (" + count + ")");
	}
});
