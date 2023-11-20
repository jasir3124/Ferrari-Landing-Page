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

let imagesCont = document.querySelectorAll(".imageCont");

document.addEventListener("scroll", function () {
  imagesCont.forEach((container) => {
    if (isInViewport(container)) {
      console.log("is in viewport");
      anime({
        targets: container,
        delay: 200,
        width: "100%",
      });
    } else {
      console.log("is not in viewport");
    }
  });
});

function isInViewport(container) {
  const rect = container.getBoundingClientRect();
  
  
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}
