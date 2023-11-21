// shows sidebar
let sideBarBtnOpen = document.querySelector(".sideBarBtnOpen");
let sideBarBtnClose = document.querySelector(".sideBarBtnClose");
let body = document.querySelector("body");
let sideBar = document.querySelector(".sideBarLinksCont");

sideBarBtnOpen.addEventListener("click", function () {
  sideBar.style.display = "block";
  body.style.overflow = "hidden";
  closeSideBar(true);
});
sideBarBtnClose.addEventListener("click", function () {
  sideBar.style.display = "none";
  body.style.overflow = "visible";
});




// images if in viewport come from the side of the screen
let imagesCont = document.querySelectorAll(".imageCont");
var isAnimating = false;

document.addEventListener("scroll", function () {
  if (isAnimating) {
    return
  }
  imagesCont.forEach((container) => {
    let image = container.firstElementChild
    if (isInViewport(container)) {
      isAnimating = true;
      anime({
        targets: container,
        delay: 200,
        width: "100%",
        easing: "easeInOutQuad",
        complete: function() {
          anime({
            targets: image,
            delay: 300,
            opacity: 1,
            easing: "easeInOutQuad",
            complete: function() {
              isAnimating = false;
            }
          });
        },
      });
    }
  });
});

function isInViewport(container) {
  const rect = container.getBoundingClientRect();

  return (
    rect.top <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.left >= 0 &&
    rect.bottom >= 0 &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


// when hover on image it zooms in/out
let ferrariImage = document.querySelectorAll(".ferrariImageSection");

ferrariImage.forEach((image) => {
  image.addEventListener("mouseover", function () {
    zoomIn(image);
  });
  image.addEventListener("mouseout", function () {
    zoomOut(image);
  });
});
function zoomIn(image) {
  anime({
    targets: image,
    scale: 1.1,
    easing: "easeInOutQuad",
  });
}
function zoomOut(image) {
  anime({
    targets: image,
    scale: 1,
    easing: "easeInOutQuad",
  });
}