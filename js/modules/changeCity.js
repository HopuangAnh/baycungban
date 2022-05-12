function changeSelect () {
  let itemArr = document.querySelectorAll('.header-bottom .coupon .route .route-left .select-city-list .item');
  let nameArr = document.querySelectorAll('.header-bottom .coupon .route .route-left .select-city-list .item .name-city');
  let adressArr = document.querySelectorAll('.header-bottom .coupon .route .route-left .select-city-list .item .name-city-sub');
  let nameChange = document.querySelector('.header-bottom .coupon .route-left .content .name-city');
  let namesubChange = document.querySelector('.header-bottom .coupon .route-left .content .name-city-sub');
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
    // itemArr.forEach(itemm, index => {
    //   itemm.addEventListener('click', () => {
    //     for (let i = 0; i < nameArr.length; i++) {
    //       city = nameArr[i].innerHTML;
    //       console.log(city)
    //     }
    //   })
    // })
  }
}

export { changeSelect };