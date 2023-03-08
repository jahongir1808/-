const favoriteCardHtml = document.querySelector('.favorite-products')

function getFavoriteCards(id, img, name, name_price, desc, rating) {
	function getFavoriteRating(rating) {
		let res = ''
		let star_count = 0
		let full_star = parseInt(rating)
		let rest_star = rating - full_star
		star_count = full_star
		res = Array(full_star)
			.fill("<img width='25px' src='images/star-full.svg'>")
			.join('')
		if (0.25 <= rest_star && rest_star <= 0.5) {
			star_count++
			res += "<img width='25px' src='images/star-half.svg'>"
		}
		if (0.5 < rest_star) {
			star_count++
			res += "<img width='25px' src='images/star-full.svg'>"
		}
		free_star = 5 - star_count
		res += Array(free_star)
			.fill("<img width='25px' src='images/star.svg'>")
			.join('')
		return res
	}
	return `          
		<div class="search-card">
			<div class='search_card-img'>
			<img src="${img}" alt="" />
				<button id='liked-btn' onclick='isLikeBtn(${id})'> 
					<img class='like_img' src='./images/like.png' width=''/> 
				</button>
			</div>
			<div class="search-content">
				<div class="search-prices">
					<div class="search-price d-flex align-items-center justify-content-between">
						<h5>${name}</h5>
						<h6>${name_price}</h6>
					</div>
					<div class="search-payment d-flex align-items-center justify-content-between">
						<p>С картой</p>
						<p>Обычная</p>
					</div>
				</div>
				<div class="search-description">
					<p>${desc}</p>
				</div>
				<div class="search-rating">
				${getFavoriteRating(rating)}
				</div>
				<div class="search-button">
				<button onclick="addProductToCart(${id})" class="search-btn">В Корзину</button>
			</div>
		</div>
  </div>`
}

function getFavoriteCartProducts(products) {
	favoriteCardHtml.innerHTML += ''
	for (el of products) {
		favoriteCardHtml.innerHTML += getFavoriteCards(
			el.id,
			el.img,
			el.name,
			el.name_price,
			el.desc,
			el.rating,
			el.isLiked
		)
	}
}

getFavoriteCartProducts(favorite_cart)


