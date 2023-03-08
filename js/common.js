const cartCount = document.querySelector(".cart");
let cartProducts = JSON.parse(localStorage.getItem("cart")) || [];

function getCartCount() {
  cartCount.innerHTML = cartProducts?.length ?? 0;
}

getCartCount();

function setCartLocalStorage() {
  localStorage.setItem("cart", JSON.stringify(cartProducts));
}

function addProductToCart(id) {
  let product = search_card_products.find((product) => product.id === id);
  if (cartProducts.find((el) => el.id == id)) {
    cartProducts = cartProducts.map((el) => {
      if (el.id == id) {
        el.quantity++;
      }
      return el;
    });
  } else {
    product.quantity = 1;
    cartProducts.push(product);
  }
  setCartLocalStorage();
  getCartCount();
}

const favoriteCount = document.querySelector(".favourite");

let favouriteProducts = JSON.parse(localStorage.getItem("favourite")) || [];

const getFavouriteCount = () => {
  favoriteCount.innerHTML = favouriteProducts.length;
};

getFavouriteCount();