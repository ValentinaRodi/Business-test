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
const popupBasketActiveBtnMob = document.querySelector(".popup-backet-btn-mob");

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

popupBasketActiveBtnMob.addEventListener("click", () => {
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