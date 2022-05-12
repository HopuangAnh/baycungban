function testChange () {
  let listAct = document.querySelectorAll('.flight-mid-left .flight-tickets .flight-list .item-tab-panel .box');
  let line = document.querySelector('.flight-mid-left .flight-tickets .flight-list .item-tab-panel .box-line');

  if (listAct && line ) {
    listAct.forEach(element => {
      document.addEventListener('click', () => {
        element.classList.contains('active') ? line.classList.remove('active') : line.classList.add('active') ;
      })
    });
  }
}

export { testChange };