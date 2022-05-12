const notClose = (listElm) => {
  let list = document.querySelector(listElm);
  if(list) {
    list.addEventListener("click" ,(e) => {
      e.stopImmediatePropagation();
    });
  }
}

export { notClose };