const increaseInput = (minus, plus, number, changeNum) => {
  let minusBtn = document.querySelector(minus)
  let plusBtn = document.querySelector(plus)
  let numberChange = document.querySelector(number);
  let change = document.querySelector(changeNum);
  let a;
  if (plusBtn && change) {
    plusBtn.addEventListener("click", () => {
      var value = parseInt(numberChange.value, 10);
      value = isNaN(value) ? 0 : value;
      value++;
      numberChange.value = value;
      a = value.toString();
      change.innerHTML = a;
    })
  }
  if (minusBtn) {
    minusBtn.addEventListener("click", () => {
      var value = parseInt(numberChange.value, 10);
      value = isNaN(value) ? 0 : value;
      value < 1 ? value = 1 : '';
      value--;
      numberChange.value = value;
      a = value.toString();
      change.innerHTML = a;
    })
  }
}
// btnOpen(".item-wrapper .amount-minus-2", ".item-wrapper .amount-plus-2", ".item-wrapper .amount .input-2")

export { increaseInput };