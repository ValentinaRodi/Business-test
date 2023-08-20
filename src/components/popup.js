function openModal(selector) {
  const modal = document.querySelector(selector);
  modal.style.display = "block";
}

function closeModal(selector) {
  const modal = document.querySelector(selector);
  modal.style.display = "none";
}

// Popup basket open close
const popupBasketActiveBtn = document.querySelector(".popup-backet-btn");

let displayBasket = true;

popupBasketActiveBtn.addEventListener("click", () => {
  if (displayBasket === true) {
    displayBasket = false;
    openModal(".basket");
    popupBasketActiveBtn.classList.add("btn-icon-color");
  } else {
    closeModal(".basket");
    popupBasketActiveBtn.classList.remove("btn-icon-color");
    displayBasket = true;
  }
});

// Popup form open close
const popupFormActiveBtn = document.querySelector(".popup-form-btn");
const btnPopupFormClose = document.querySelector(".btn-close");
const popupFormActiveBtnMob = document.querySelector(".popup-form-btn-mob");

let displayForm = true;

popupFormActiveBtn.addEventListener("click", () => {
  if (displayForm === true) {
    displayForm = false;
    openModal(".form");
  } else {
    displayForm = true;
    closeModal(".form");
  }
});

popupFormActiveBtnMob.addEventListener("click", () => {
  closeModal(".popup-menu-mob");

  if (displayForm === true) {
    displayForm = false;
    openModal(".form");
  } else {
    closeModal(".form");
    displayForm = true;
  }
});

btnPopupFormClose.addEventListener("click", () => {
  closeModal(".form");
  displayForm = true;
});

// Popup menu open close
const popupMenuMobBtn = document.querySelector(".popup-menu-mob-btn");

let displayPopupMenuMob = true;

popupMenuMobBtn.addEventListener("click", () => {
  if (displayPopupMenuMob === true) {
    displayPopupMenuMob = false;
    openModal(".popup-menu-mob");
  } else {
    closeModal(".popup-menu-mob");
    displayPopupMenuMob = true;
  }
});

btnPopupFormClose.addEventListener("click", () => {
  closeModal(".popup-menu-mob");
  displayPopupMenuMob = true;
});

//Form validate
const btnForm = document.querySelector(".btn-form");

function inputFormValidate(selector) {
  const inputValid = document.getElementById(selector);

  if (inputValid.value == "") {
    inputValid.classList.add("input-border");
    return false;
  } else {
    inputValid.classList.remove("input-border");
    return true;
  }
}

function checkValidate() {
  const checkBox = document.getElementById("check");
  const checkBorder = document.querySelector(".check-border");

  if (!checkBox.checked) {
    checkBorder.classList.add("check-border-red");
    return false;
  } else {
    checkBorder.classList.remove("check-border-red");
    return true;
  }
}

function validateForm() {
  if(inputFormValidate("name") === true 
  && inputFormValidate("tel") === true 
  && checkValidate() === true) {
    return true
  } else {
    return false
  }
}

btnForm.addEventListener("click", (event) => {
  event.preventDefault();
  if (validateForm() === true) {
    closeModal(".form");
    displayForm = true;
  }
});

// Counter
const basketItems = document.querySelectorAll(".basket-count");
const basketSum = document.querySelector(".sum-all");
const quantitySumItem = document.querySelectorAll(".card-sum");
const basketCounterIcon = document.querySelector(".basket-counter-icon");
const quantityAll = document.querySelectorAll(".quantity");

let sum = [];
let numberQuantity = [];

basketItems.forEach((basketItem) => {
  const decrementButton = basketItem.querySelector(".decrement");
  const incrementButton = basketItem.querySelector(".increment");
  const quantityInput = basketItem.querySelector(".quantity");
  const quantitySum = basketItem.querySelector(".card-sum");

  let sumItem = quantitySum.innerHTML;

  decrementButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput.value);
    sum = [];
    numberQuantity = [];
    if (currentQuantity > 0) {
      currentQuantity--;
    }

    quantityInput.value = currentQuantity;
    quantitySum.innerHTML = parseInt(sumItem) * parseInt(currentQuantity);

    quantitySumItem.forEach((item) => {
      sum.push(parseInt(item.innerHTML));
    });

    basketSum.innerHTML = sum.reduce((partialSum, a) => partialSum + a, 0);

    quantityAll.forEach((item) => {
      numberQuantity.push(parseInt(item.value));
    });

    basketCounterIcon.innerHTML = numberQuantity.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
  });

  incrementButton.addEventListener("click", () => {
    let currentQuantity = parseInt(quantityInput.value);
    sum = [];
    numberQuantity = [];
    currentQuantity++;

    quantityInput.value = currentQuantity;
    quantitySum.innerHTML = parseInt(sumItem) * parseInt(currentQuantity);

    quantitySumItem.forEach((item) => {
      sum.push(parseInt(item.innerHTML));
    });

    basketSum.innerHTML = sum.reduce((partialSum, a) => partialSum + a, 0);

    quantityAll.forEach((item) => {
      numberQuantity.push(parseInt(item.value));
    });

    basketCounterIcon.innerHTML = numberQuantity.reduce(
      (partialSum, a) => partialSum + a,
      0
    );
  });
});

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
