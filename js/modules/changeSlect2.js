function changeSelect2 () {
  let itemArr = document.querySelectorAll('.header-bottom .coupon .route .route-right  .select-city-list .item-2');
  let nameArr = document.querySelectorAll('.header-bottom .coupon .route .route-right  .select-city-list .item .name-city-2');
  let adressArr = document.querySelectorAll('.header-bottom .coupon .route .route-right  .select-city-list .item .name-city-sub-2');
  let nameChange = document.querySelector('.header-bottom .coupon .route-right .content .name-city-2');
  let namesubChange = document.querySelector('.header-bottom .coupon .route-right .content .name-city-sub-2');
  let city;
  let nationality;
  if (itemArr && nameArr) {
    itemArr.forEach((btn, index) => btn.addEventListener("click", () => {
      for (let i = 0; i < nameArr.length; i++) {
        for (let j = 0; j < adressArr.length; j++)
          if (i == j && i == index) {
            city = nameArr[i].innerHTML;
            nationality = adressArr[j].innerHTML;
            nameChange.innerHTML = city;
            namesubChange.innerHTML = nationality;
          }
      }
  }))
  }
}

export { changeSelect2 };