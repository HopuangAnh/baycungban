const listActive = (btnElm,listElm) => {
  let btnClick = document.querySelector(btnElm);
  let listShow = document.querySelector(listElm);
  if (btnClick && listShow) {
    btnClick.addEventListener('click', () => {
      listShow.classList.contains("active") ? listShow.classList.remove('active'): listShow.classList.add('active');
    })
    document.addEventListener("mouseup" ,(e) => {
      if(!listShow.contains(e.target)) {
        listShow.classList.remove("active")
      }
    });
  }
}

export { listActive };