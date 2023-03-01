const cart_rows = document.querySelector('.cart-rows')

function getCartProduct(id, img, desc, name, quantity) {
	return `
  <div class="cart-row">
      <img class="cart_rows-img" src=${img} alt="" />
		<div class="cart-content">
			<h4>${desc}</h4>
			<p>${name}<span>за шт.</span></p>
		</div>
    <div class="cart-quantity">
      <button onclick="changeQuantity('-', ${id})">-</button>
      <span>${quantity}</span>
      <button onclick="changeQuantity('+', ${id})">+</button>
    </div>
    <p class="cart_row-totalPrice">89,00 ₽</p>
	</div>
  `
}

function getCartProducts(products) {
	for (el of products) {
		cart_rows.innerHTML += getCartProduct(
			el.id,
			el.img,
			el.desc,
			el.name,
			el.quantity
		)
	}
}

getCartProducts(cart)

function changeQuantity(status, id) {
	let product = cart.find(el => el.id == id)
	if (status == '-') {
		if (product.quantity == 1) {
			cart = cart.filter(el => el.id != id)
		}
	}
	cart = cart.map(el => {
		if (el.id == id) {
			status == '+' ? el.quantity++ : el.quantity--
		}
		return el
	})
	setCart()
	window.location.reload()
}
