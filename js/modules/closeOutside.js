const closeOut = (panelElm) => {
  let panel = document.querySelectorAll(panelElm)
  
  if(panel) {
    panel.forEach(element => {
      document.addEventListener("mouseup" ,(e) => {
        if(!element.contains(e.target)) {
          element.classList.remove("active")
        }
      });
    });
  }
}

export { closeOut };