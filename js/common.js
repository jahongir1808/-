const cartCount = document.querySelector('.cart')
let cartProducts = JSON.parse(localStorage.getItem('cart')) || []

const search_card_products = [
	{
		id: 0,
		img: 'images/result-img1.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 3.5,
		isLiked: false,
	},
	{
		id: 1,
		img: 'images/result-img2.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
		rating: 3,
		isLiked: false,
	},
	{
		id: 2,
		img: 'images/result-img3.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
		rating: 5,
		isLiked: false,
	},
	{
		id: 3,
		img: 'images/result-img4.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 4,
		isLiked: false,
	},
	{
		id: 4,
		img: 'images/result-img1.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 2,
		isLiked: false,
	},
	{
		id: 5,
		img: 'images/result-img2.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
		rating: 3,
		isLiked: false,
	},
	{
		id: 6,
		img: 'images/result-img3.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
		rating: 5,
		isLiked: false,
	},
	{
		id: 7,
		img: 'images/result-img4.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 4,
		isLiked: false,
	},
	{
		id: 8,
		img: 'images/result-img1.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 2,
		isLiked: false,
	},
	{
		id: 9,
		img: 'images/result-img2.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
		rating: 3,
		isLiked: false,
	},
	{
		id: 10,
		img: 'images/result-img3.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
		rating: 5,
		isLiked: false,
	},
	{
		id: 11,
		img: 'images/result-img4.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 4,
		isLiked: false,
	},
	{
		id: 12,
		img: 'images/result-img1.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 2,
		isLiked: false,
	},
	{
		id: 13,
		img: 'images/result-img2.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...',
		rating: 3,
		isLiked: false,
	},
	{
		id: 14,
		img: 'images/result-img3.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...',
		rating: 4.5,
		isLiked: false,
	},
	{
		id: 15,
		img: 'images/result-img4.png',
		name: '44.50 ₽',
		name_price: '50.50 ₽',
		desc: 'Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...',
		rating: 3.5,
		isLiked: false,
	},
]

function getCartCount() {
	cartCount.innerHTML = cartProducts?.length ?? 0
}

getCartCount()

function setCartLocalStorage() {
	localStorage.setItem('cart', JSON.stringify(cartProducts))
}

function addProductToCart(id) {
	let product = search_card_products.find(product => product.id === id)
	if (cartProducts.find(el => el.id == id)) {
		cartProducts = cartProducts.map(el => {
			if (el.id == id) {
				el.quantity++
			}
			return el
		})
	} else {
		product.quantity = 1
		cartProducts.push(product)
	}
	setCartLocalStorage()
	getCartCount()
}

const favoriteCount = document.querySelector('.favourite')

let favouriteProducts = JSON.parse(localStorage.getItem('favourite')) || []

const getFavouriteCount = () => {
	favoriteCount.innerHTML = favouriteProducts.length
}

getFavouriteCount()
