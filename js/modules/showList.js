const showList = (btnElm) => {
  let btnArr = document.querySelectorAll(btnElm);
  btnArr.forEach(elm => {
    elm.addEventListener('click', () => {
      elm.classList.contains('active') ? elm.classList.remove('active') : elm.classList.add('active');
      document.addEventListener("mouseup" ,(e) => {
        if(!elm.contains(e.target)) {
          elm.classList.remove("active")
        }
      });
    })
    // for (let i = 0; i < btnArr.length; i++) {

    // }
  });
}

export { showList };