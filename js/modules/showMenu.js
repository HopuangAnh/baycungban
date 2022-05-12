const showMenuprd = (btnActive, cateShow) => {
  let btn = document.querySelector(btnActive)
  let cate = document.querySelector(cateShow)
  if(btn && cate) {
    btn.addEventListener("click",() => {
      btn.classList.contains("active") ? cate.classList.remove("active"): cate.classList.add("active");
      btn.classList.contains("active") ? btn.classList.remove("active"): btn.classList.add("active");
    });
    document.addEventListener("mouseup" ,(e) => {
      if(!cate.contains(e.target)) {
        cate.classList.remove("active")
      }
    });
  }
}
export { showMenuprd };