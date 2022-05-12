const btnActive = (btn) => {
  let btnClick = document.querySelector(btn);
  if(btnClick) {
    btnClick.addEventListener('click', () => {
      btnClick.classList.contains('active') ? btnClick.classList.remove('active') :  btnClick.classList.add('active');
    })
    document.addEventListener("mouseup" ,(e) => {
      if(!btnClick.contains(e.target)) {
        btnClick.classList.remove("active")
      }
    });
  }
}

export { btnActive };