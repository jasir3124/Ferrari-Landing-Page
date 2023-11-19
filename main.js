let sideBarBtnOpen = document.querySelector(".sideBarBtnOpen");
let sideBarBtnClose = document.querySelector(".sideBarBtnClose");
let body = document.querySelector("body");
let sideBar = document.querySelector(".sideBarLinksCont");

sideBarBtnOpen.addEventListener("click", function () {
  sideBar.style.display = "block";
  body.style.overflow = "hidden";
  closeSideBar(true)
});
sideBarBtnClose.addEventListener("click", function () {
  sideBar.style.display = "none";
  body.style.overflow = "visible";
});




let ferrariImage = document.querySelectorAll('.ferrariImageSection')

ferrariImage.forEach(image => {
  image.addEventListener('mouseover', function () {
    zoomIn(image);
  })
  image.addEventListener('mouseout', function () {
    zoomOut(image);
  })
});
function zoomIn(image){
  anime({
    targets: image,
    scale : 1.1,
    easing: 'easeInOutQuad',
  })
}
function zoomOut(image) {
  anime({
    targets: image,
    scale : 1,
    easing: 'easeInOutQuad',
  })
}