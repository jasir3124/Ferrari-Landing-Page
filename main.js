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