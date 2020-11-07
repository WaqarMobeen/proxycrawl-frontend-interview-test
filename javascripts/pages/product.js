function changeProductMainImage(e) {
  const attr = "data-current";
  // if selected image is already current do not update the dom
  if (e.target.getAttribute(attr) === "false") {
    // reset current from image thumbnails
    const imgs = Array.from(document.querySelectorAll(`img[${attr}]`));
    if (imgs && imgs.length > 0) {
      imgs.forEach((img) => {
        img.setAttribute(attr, "false");
      });
    }

    const elem = document.getElementById("main-image");
    if (elem) {
      elem.src = e.target.src;
      e.target.setAttribute(attr, "true");
    }
  }
}
