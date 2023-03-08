let productsContainer = document.querySelector(".search-cards");
const search = document.querySelector(".search");
const results = document.querySelector(".results");
const isLikedBtn = document.getElementById("liked-btn");

const search_card_products = [
  {
    id: 0,
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 3.5,
    isLiked: false,
  },
  {
    id: 1,
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    isLiked: false,
  },
  {
    id: 2,
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    isLiked: false,
  },
  {
    id: 3,
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    isLiked: false,
  },
  {
    id: 4,
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    isLiked: false,
  },
  {
    id: 5,
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    isLiked: false,
  },
  {
    id: 6,
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    isLiked: false,
  },
  {
    id: 7,
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    isLiked: false,
  },
  {
    id: 8,
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    isLiked: false,
  },
  {
    id: 9,
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    isLiked: false,
  },
  {
    id: 10,
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    isLiked: false,
  },
  {
    id: 11,
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    isLiked: false,
  },
  {
    id: 12,
    img: "images/result-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 2,
    isLiked: false,
  },
  {
    id: 13,
    img: "images/result-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 3,
    isLiked: false,
  },
  {
    id: 14,
    img: "images/result-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 4.5,
    isLiked: false,
  },
  {
    id: 15,
    img: "images/result-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 3.5,
    isLiked: false,
  },
];

function getSearchCard(id, img, price, pricetwo, desc, rating) {
  function getRating(rating) {
    let res = "";
    let star_count = 0;
    let full_star = parseInt(rating);
    let rest_star = rating - full_star;
    star_count = full_star;
    res = Array(full_star)
      .fill("<img width='25px' src='images/star-full.svg'>")
      .join("");
    if (0.25 <= rest_star && rest_star <= 0.5) {
      star_count++;
      res += "<img width='25px' src='images/star-half.svg'>";
    }
    if (0.5 < rest_star) {
      star_count++;
      res += "<img width='25px' src='images/star-full.svg'>";
    }
    free_star = 5 - star_count;
    res += Array(free_star)
      .fill("<img width='25px' src='images/star.svg'>")
      .join("");
    return res;
  }

  return `          
		<div class="search-card">
			<div class='search_card-img'>
			<img src="${img}" alt="" />
				<button id='liked-btn' onclick='addFavourite(${id})'> 
					<img class='like_img' src='./images/${
            favouriteProducts.find((product) => product.id === id)
              ? "full-like"
              : "like"
          }.png' width=''/> 
				</button>
			</div>
			<div class="search-content">
				<div class="search-prices">
					<div class="search-price d-flex align-items-center">
						<h5>${price}</h5>
						<h6>${pricetwo}</h6>
					</div>
					<div class="search-payment d-flex align-items-center">
						<p>С картой</p>
						<p>Обычная</p>
					</div>
				</div>
				<div class="search-description">
					<p>${desc}</p>
				</div>
				<div class="search-rating">
				${getRating(rating)}
				</div>
				<div class="search-button">
				<button onclick="addProductToCart(${id})" class="search-btn">В Корзину</button>
			</div>
		</div>
  </div>`;
}

function getProducts(products = search_card_products) {
  productsContainer.innerHTML = "";
  for (el of products) {
    productsContainer.innerHTML += getSearchCard(
      el.id,
      el.img,
      el.name,
      el.name_price,
      el.desc,
      el.rating,
      el.isLiked
    );
  }
  results.innerHTML = products.length
    ? `${products.length} ta mahsulot topildi !`
    : "Mahsulot topilmadi";
}

getProducts();

search.addEventListener("input", function () {
  let res = [];
  for (el of search_card_products) {
    let title = el.desc.toLowerCase();
    let search = this.value.toLowerCase().trim();
    if (title.includes(search)) {
      res.push(el);
    }
  }
  getProducts(res);
});

function addFavourite(id) {
  let findProduct = search_card_products.find((product) => product.id === id);
  let checkProduct = favouriteProducts.find((product) => product.id === id);
  if (checkProduct) {
    favouriteProducts = favouriteProducts.filter(
      (product) => product.id !== id
    );
  } else {
    favouriteProducts.push(findProduct);
  }
  localStorage.setItem("favourite", JSON.stringify(favouriteProducts));
  getProducts();
  getFavouriteCount();
}
