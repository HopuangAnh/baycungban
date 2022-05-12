const dataPkr = (elm) => {
  let data = document.querySelector(elm)
  if (data) {
    flatpickr(data, {
      altInput: true,
      altFormat: "F j, Y",
      dateFormat: "Y-m-d",
      minDate: '2022-05-20',
      maxDate: '2022-05-25'
    });
  }
}

export { dataPkr }