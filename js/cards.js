let card_products = [
  { name: "Молоко, сыр, яйцо", image: "images/catalog-img1.png" },
  {
    name: "Хлеб",
    image: "images/catalog-img2.png",
    background_color: "catalog__row_red",
  },
  { name: "Фрукты и овощи", image: "images/catalog-img3.png" },
  { name: "Замороженные продукты", image: "images/catalog-img4.png" },
  {
    name: "Напитки",
    image: "images/catalog-img5.png",
  },
  {
    name: "Кондитерские изделия",
    image: "images/catalog-img6.png",
  },
  {
    name: "Чай, кофе",
    image: "images/catalog-img7.png",
  },
  { name: "Бакалея", image: "images/catalog-img8.png" },
  {
    name: "Здоровое питание",
    image: "images/catalog-img9.png",
  },
  {
    name: "Зоотовары",
    image: "images/catalog-img10.png",
  },
  {
    name: "Детское питание",
    image: "images/catalog-img11.png",
  },
  {
    name: "Мясо, птица, колбаса",
    image: "images/catalog-img12.png",
  },
  {
    name: "Непродовольственные товары",
    image: "images/catalog-img13.png",
  },
];

function getCard(img, content) {
  return `
  <div class="catalog-row">
    <div class="catalog-img">
      <img src="${img}" alt="" />
    </div>
    <div class="catalog-content">
      <h5>${content}</h5>
    </div>
  </div>`;
}

let productsContainer = document.querySelector(".catalog-products");

function getProducts(products) {
  productsContainer.innerHTML = "";
  for (el of products) {
    productsContainer.innerHTML += getCard(el.image, el.name);
  }
}

getProducts(card_products);
