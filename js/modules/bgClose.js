const bgClose = () => {
  let bg = document.querySelector('.header-main-top .header-menu .header-menu-bg');
  let listMenu = document.querySelector('.header-main-top .header-menu');
  let btnCl = document.querySelector('.header-main-top .header-menu-showbtn');

  if (bg && listMenu && btnCl) {
    bg.addEventListener('click', () => {
      listMenu.classList.contains('active') ? listMenu.classList.remove('active') : listMenu.classList.add('active');
      btnCl.classList.contains('active') ? btnCl.classList.remove('active') : btnCl.classList.add('active');
    })

  }
}

export { bgClose };