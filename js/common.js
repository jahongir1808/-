const cart_link = document.querySelector('.cart')

const cart_local = localStorage.getItem('cart')
//

let cart = JSON.parse(cart_local) || []

function addProductToCart(id) {
	let product = search_card_products.find(product => product.id === id)
	if (cart.find(el => el.id == id)) {
		cart = cart.map(el => {
			if (el.id == id) {
				el.quantity++
			}
			return el
		})
	} else {
		product.quantity = 1
		cart.push(product)
	}
	setCart()
	getCart()
	window.location.reload()
}

function getCart() {
	let cart_local = localStorage.getItem('cart')
	let cart_parse = JSON.parse(cart_local)
	cart_link.innerHTML += cart_parse?.length ?? 0
}

getCart()

function setCart() {
	localStorage.setItem('cart', JSON.stringify(cart))
}
