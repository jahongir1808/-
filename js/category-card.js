const products = [
	{
		name: 'Apple',
		category: 'Fruit',
		description:
			'A round fruit with a red, green, or yellow skin and a white, crunchy interior.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food0',
	},
	{
		name: 'Banana',
		category: 'Fruit',
		description:
			'A long, curved fruit with a yellow skin and sweet, creamy white flesh.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food1',
	},
	{
		name: 'Bread',
		category: 'Bakery',
		description:
			'A staple food made from flour, water, and yeast, baked into a loaf.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food2',
	},
	{
		name: 'Broccoli',
		category: 'Vegetable',
		description:
			'A green vegetable with a tree-like appearance, known for its high nutrient content.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food3',
	},
	{
		name: 'Carrot',
		category: 'Vegetable',
		description:
			'A root vegetable with a crunchy texture and a sweet, earthy flavor.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food4',
	},
	{
		name: 'Cheese',
		category: 'Dairy',
		description:
			'A dairy product made from milk, with a variety of textures and flavors.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food5',
	},
	{
		name: 'Chicken',
		category: 'Meat',
		description:
			'A type of poultry, often used as a source of protein in meals.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food6',
	},
	{
		name: 'Chocolate',
		category: 'Dessert',
		description:
			'A sweet food made from cacao beans, used in a variety of desserts and confections.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food7',
	},
	{
		name: 'Coffee',
		category: 'Dessert',
		description:
			'A dark, bitter beverage made from roasted coffee beans, typically used as a pick-me-up.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food8',
	},
	{
		name: 'Egg',
		category: 'Dairy',
		description:
			'A oval-shaped reproductive body produced by birds, often used as a source of protein in meals.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food9',
	},
	{
		name: 'Fish',
		category: 'Meat',
		description:
			'A type of seafood, known for its omega-3 fatty acids and high protein content.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food10',
	},
	{
		name: 'Grapes',
		category: 'Fruit',
		description:
			'A small, sweet fruit that grows in clusters, often used in wine-making.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food11',
	},
	{
		name: 'Hamburger',
		category: 'Fast food',
		description:
			'A sandwich made with a patty of ground beef, served on a bun with various toppings.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food12',
	},
	{
		name: 'Hot dog',
		category: 'Fast food',
		description:
			'A type of sausage served in a long roll, often used as a quick and convenient food.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food13',
	},
	{
		name: 'Ice cream',
		category: 'Dessert',
		description:
			'A frozen dessert made from cream, sugar, and flavorings, available in a variety of flavors.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food14',
	},
	{
		name: 'Lemon',
		category: 'Fruit',
		description:
			'A yellow citrus fruit with a tart, acidic flavor, often used in cooking and baking.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food15',
	},
	{
		name: 'Eggs',
		category: 'Dairy',
		description:
			'Eggs are oval-shaped reproductive structures produced by female birds and some reptiles.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food16',
	},
	{
		name: 'Honey',
		category: 'Dairy',
		description:
			'Honey is a sweet, sticky liquid made by bees from the nectar of flowers.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food17',
	},
	{
		name: 'Ice Cream',
		category: 'Dessert',
		description:
			'Ice cream is a frozen dessert made from cream, sugar, and flavorings.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food18',
	},
	{
		name: 'Jelly',
		category: 'Fruit',
		description:
			'Jelly is a sweet spread made from fruit juice and sugar, often used as a topping for toast or pastries.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food19',
	},
	{
		name: 'Ketchup',
		category: 'Dairy',
		description:
			'Ketchup is a tangy sauce made from tomatoes, vinegar, sugar, and spices.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food20',
	},
	{
		name: 'Mango',
		category: 'Fruit',
		description:
			'Mangoes are juicy, sweet tropical fruits with a fleshy interior and a large, oblong seed in the center.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food21',
	},
	{
		name: 'Noodles',
		category: 'Meat',
		description:
			'Noodles are a type of pasta made from wheat flour and water, often used in Asian cuisine.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food22',
	},
	{
		name: 'Oatmeal',
		category: 'Breakfast',
		description:
			'Oatmeal is a type of porridge made from oats that is often served for breakfast.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food23',
	},
	{
		name: 'Bacon',
		category: 'Breakfast',
		description:
			'Bacon is a popular breakfast food made from cured pork belly.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food24',
	},
	{
		name: 'Pancakes',
		category: 'Breakfast',
		description:
			'Pancakes are a popular breakfast food made from flour, eggs, and milk.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food25',
	},
	{
		name: 'Waffles',
		category: 'Breakfast',
		description:
			'Waffles are a type of breakfast food made from batter cooked in a waffle iron.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food26',
	},
	{
		name: 'Fried Rice',
		category: 'Lunch',
		description:
			'Fried Rice is a type of rice dish that is stir-fried in a pan with oil and other ingredients.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 20,
		image: 'https://picsum.photos/200/300/?food27',
	},
	{
		name: 'Spaghetti',
		category: 'Lunch',
		description:
			'Spaghetti is a type of pasta made from wheat flour and water, usually served with sauce.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food28',
	},
	{
		name: 'Pizza',
		category: 'Lunch',
		description:
			'Pizza is a popular dish made from dough, sauce, cheese, and toppings.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food29',
	},
	{
		name: 'Grilled Cheese',
		category: 'Lunch',
		description:
			'A grilled cheese sandwich is a hot sandwich made from cheese and bread.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 50,
		image: 'https://picsum.photos/200/300/?food30',
	},
	{
		name: 'Steak',
		category: 'Dinner',
		description:
			'Steak is a popular dinner dish made from a cut of beef that is usually grilled or pan-fried.',
		price: '77,99 ₽',

		disc_price: '140.5₽',
		rating: 4.5,
		discount: 20,
		image: 'images/dinner-img1.png',
	},
	{
		name: 'Salmon',
		category: 'Dinner',
		description:
			'Salmon is a type of fish that is often grilled or baked and served as a main course.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4.5,
		discount: 20,
		image: 'images/dinner-img2.png',
	},
	{
		name: 'Chicken Alfredo',
		category: 'Dinner',
		description:
			'Chicken Alfredo is a pasta dish made with chicken, fettuccine pasta, and a creamy Alfredo sauce.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 4,
		discount: 20,
		image: 'images/dinner-img3.png',
	},
	{
		name: 'Lasagna',
		category: 'Dinner',
		description:
			'Lasagna is a type of pasta dish made with layers of pasta, sauce, cheese, and meat or vegetables.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 5,
		discount: 0,
		image: 'images/dinner-img4.png',
	},
	{
		name: 'Chocolate Chip Cookies',
		category: 'Dessert',
		description:
			'Chocolate Chip Cookies are a type of cookie made from flour, sugar, butter, and chocolate chips.',
		price: '77,99 ₽',
		disc_price: '140.5₽',
		rating: 3.5,
		discount: 0,
		image: 'https://picsum.photos/200/300/?food35',
	},
]

const milkCard = document.querySelector('.milk-products')

function getCategoryCards({ image, price, disc_price, description, rating }) {
	function getRating(rating) {
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
    <div class="milk-product">
    <img  class="w-100"  src=${image} alt="" />
    <div class="milk-content">
      <div class="milk-prices">
        <div class="milk-price d-flex align-items-center">
          <h5>${price}</h5>
          <h6>${disc_price}</h6>
        </div>
        <div class="milk-payment d-flex align-items-center">
          <p>С картой</p>
          <p>Обычная</p>
        </div>
      </div>
      <div class="milk-description">
        <p>${description}</p>
      </div>
      <div class="milk-rating"><p>${getRating(rating)}</p></div>
      <div class="milk-button">
        <button class="milk-btn">В Корзину</button>
      </div>
    </div>
  </div>
    `
}

let category_card = localStorage.getItem('categoryCard')
let parse_card = JSON.parse(category_card)

products
	.filter(product => parse_card.category === product.category)
	.forEach(product => (milkCard.innerHTML += getCategoryCards(product)))
