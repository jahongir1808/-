const btn = document.getElementById("navbar_btn");

let a = 0;

function openMenu() {
  if (a == 1) {
    document.getElementById("navbarMenu").style.display = "inline";
    return (a = 0);
  } else {
    document.getElementById("navbarMenu").style.display = "none";
    return (a = 1);
  }
}

btn.addEventListener("click", openMenu);

const home = document.querySelector(".home-container");

const products = [
  {
    img: "images/discount-img1.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 4,
    raiting: 1,
  },
  {
    img: "images/discount-img2.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Молоко ПРОСТОКВАШИНО паст. питьевое цельное отборное...",
    rating: 1,
    raiting: 4,
  },
  {
    img: "images/discount-img3.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 2,
    raiting: 3,
  },
  {
    img: "images/discount-img4.png",
    name: "44.50 ₽",
    name_price: "50.50 ₽",
    payment: "С картой",
    payment_default: "Обычная",
    desc: "Сосиски вареные МЯСНАЯ ИСТОРИЯ Молочные и С сыро...",
    rating: 3,
    raiting: 2,
  },
];

function discount_cards(
  image,
  names,
  name_prices,
  payments,
  payment_defaults,
  descs,
  ratings,
  raitingss
) {
  // card body
  const novelties_cardBody = document.createElement("div");
  novelties_cardBody.className = "card__body";

  const novelties_card_img = document.createElement("img");
  novelties_card_img.src = image;
  novelties_card_img.setAttribute("width", "100%");

  novelties_cardBody.append(novelties_card_img);

  // card price
  const novelties_card_descriptions = document.createElement("div");
  novelties_card_descriptions.className = "card__descriptions";

  const card_prices = document.createElement("div");
  novelties_cardBody.append(novelties_card_descriptions);
  card_prices.className = "card__prices";
  novelties_card_descriptions.append(card_prices);

  const card_priceone = document.createElement("div");
  card_priceone.className = "card__priceone";
  card_prices.append(card_priceone);

  const novelties_card_price_h4 = document.createElement("h4");
  novelties_card_price_h4.textContent = names;

  const payment = document.createElement("p");
  payment.textContent = payments;
  card_priceone.append(novelties_card_price_h4, payment);

  const card_pricetwo = document.createElement("div");
  card_pricetwo.className = "card__pricetwo";

  const card_price_h5 = document.createElement("h5");
  card_price_h5.textContent = name_prices;

  const defaultpay = document.createElement("p");
  defaultpay.textContent = payment_defaults;
  card_pricetwo.append(card_price_h5, defaultpay);
  card_prices.append(card_pricetwo);

  // card description

  const card_description = document.createElement("div");
  card_description.className = "card__description";
  const card_description_p = document.createElement("p");
  card_description_p.textContent = descs;
  card_description.append(card_description_p);
  novelties_card_descriptions.append(card_description);

  // card rating

  const card_rating = document.createElement("div");
  card_rating.className = "card__rating";

  for (let i = 0; i < ratings; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < raitingss; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  novelties_card_descriptions.append(card_rating);

  const button = document.createElement("button");
  button.className = "card__button";
  button.textContent = "В корзину";
  novelties_card_descriptions.append(button);

  const card = document.createElement("div");
  card.setAttribute("class", "card");

  card.append(novelties_cardBody, novelties_card_descriptions);

  return card;
}

// name, name_price, payment, description, rating

for (el of products) {
  let card = discount_cards(
    el.img,
    el.name,
    el.name_price,
    el.payment,
    el.payment_default,
    el.desc,
    el.rating,
    el.raiting
  );
  home.append(card);
}

const novelties = document.querySelector(".novelties");

const novelties_product = [
  {
    img: "images/novelties-img1.png",
    name: "599,99 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
  {
    img: "images/novelties-img2.png",
    name: "44,50 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
  },
  {
    img: "images/novelties-img3.png",
    name: "159,99 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
  {
    img: "images/novelties-img4.png",
    name: "49,39 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
];

function novelties_cards(image, names, descs, ratings, raitingss) {
  // card body
  const novelties_cardBody = document.createElement("div");
  novelties_cardBody.className = "novelties__card-body";

  const novelties_card_img = document.createElement("img");
  novelties_card_img.src = image;
  novelties_card_img.setAttribute("width", "100%");

  novelties_cardBody.append(novelties_card_img);

  // card price
  const novelties_card_descriptions = document.createElement("div");
  novelties_card_descriptions.className = "novelties__card-descriptions";

  const novelties_card_price_h4 = document.createElement("h4");
  novelties_card_price_h4.textContent = names;
  novelties_card_descriptions.append(novelties_card_price_h4);

  // card description

  const card_description = document.createElement("div");
  card_description.className = "novelties__card-description";
  const card_description_p = document.createElement("p");
  card_description_p.textContent = descs;
  card_description.append(card_description_p);
  novelties_card_descriptions.append(card_description);

  // card rating

  const card_rating = document.createElement("div");
  card_rating.className = "card__rating";

  for (let i = 0; i < ratings; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < raitingss; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  novelties_card_descriptions.append(card_rating);

  const button = document.createElement("button");
  button.className = "novelties__card-button";
  button.textContent = "В корзину";
  novelties_card_descriptions.append(button);

  const novelties__card = document.createElement("div");
  novelties__card.setAttribute("class", "novelties__card");

  novelties__card.append(novelties_cardBody, novelties_card_descriptions);

  return novelties__card;
}

for (el of novelties_product) {
  let novelties__card = novelties_cards(
    el.img,
    el.name,
    el.desc,
    el.rating,
    el.raiting
  );
  novelties.append(novelties__card);
}

const buy = document.querySelector(".buy");

const buy_product = [
  {
    img: "images/buy.png",
    name: "77,99 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
  {
    img: "images/novelties-img3.png",
    name: "159,99 ₽",
    desc: "Колбаса сырокопченая МЯСНАЯ ИСТОРИЯ Сальчичон и Тоскан...",
    rating: 5,
    raiting: 0,
  },
  {
    img: "images/novelties-img1.png",
    name: "599,99 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
  {
    img: "images/novelties-img4.png",
    name: "49,39 ₽",
    desc: "Комбайн КЗС-1218 «ДЕСНА-ПОЛЕСЬЕ GS12»",
    rating: 2,
    raiting: 3,
  },
];

function buy_cards(image, names, descs, ratings, raitingss) {
  // card body
  const buy_cardBody = document.createElement("div");
  buy_cardBody.className = "buy__card-body";

  const buy_card_img = document.createElement("img");
  buy_card_img.src = image;
  buy_card_img.setAttribute("width", "100%");

  buy_cardBody.append(buy_card_img);

  // card price
  const buy_card_descriptions = document.createElement("div");
  buy_card_descriptions.className = "buy__card-descriptions";

  const buy_card_price_h4 = document.createElement("h4");
  buy_card_price_h4.textContent = names;
  buy_card_descriptions.append(buy_card_price_h4);

  // card description

  const card_description = document.createElement("div");
  card_description.className = "buy__card-description";
  const card_description_p = document.createElement("p");
  card_description_p.textContent = descs;
  card_description.append(card_description_p);
  buy_card_descriptions.append(card_description);

  // card rating

  const card_rating = document.createElement("div");
  card_rating.className = "card__rating";

  for (let i = 0; i < ratings; i++) {
    const star = document.createElement("img");
    star.src = "images/star-full.svg";
    card_rating.append(star);
  }
  for (let i = 0; i < raitingss; i++) {
    const star_full = document.createElement("img");
    star_full.src = "images/star.svg";
    card_rating.append(star_full);
  }

  buy_card_descriptions.append(card_rating);

  const button = document.createElement("button");
  button.className = "buy__card-button";
  button.textContent = "В корзину";
  buy_card_descriptions.append(button);

  const buy__card = document.createElement("div");
  buy__card.setAttribute("class", "buy__card");

  buy__card.append(buy_cardBody, buy_card_descriptions);

  return buy__card;
}

for (el of buy_product) {
  let buy__card = buy_cards(el.img, el.name, el.desc, el.rating, el.raiting);
  buy.append(buy__card);
}
