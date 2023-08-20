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