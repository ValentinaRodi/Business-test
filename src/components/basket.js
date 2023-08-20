//Add in basket item
const basket = document.querySelector(".basket");
const card = document.querySelectorAll(".card");

let basketCards = [];

card.forEach((item) => {
  basketCards.push(item);
});

function addToCart(e) {
  basketCards.forEach((item) => {
    if (e.target.id === item.id) {
      basketCards.push(item);
    }
  });
}

let buttonsAdd = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < buttonsAdd.length; i++) {
  buttonsAdd[i].addEventListener("click", addToCart);
}

//Remove in basket item

function removeToCart(e) {
  for (let i = 0; i < basketCards.length; i++) {
    if (e.target.id === item.id) {
      basketCards.splice(i, 1);
    }
  }
}

let buttonsDel = document.querySelectorAll(".add-to-cart");
for (let i = 0; i < buttonsDel.length; i++) {
  buttonsDel[i].addEventListener("click", removeToCart);
}
