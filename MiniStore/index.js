// const nxtBtn = [...document.querySelectorAll(".nxt-btn")];
// const preBtn = [...document.querySelectorAll(".pre-btn")];
// const productContainers = [...document.querySelectorAll(".image-container")];

// productContainers.forEach((item, i) => {
//   let containerDimensions = item.getBoundingClientRect();
//   let containerWidth = containerDimensions.width;

//   nxtBtn[i].addEventListener("click", () => {
//     item.scrollLeft += containerWidth;
//   });

//   preBtn[i].addEventListener("click", () => {
//     item.scrollLeft -= containerWidth;
//     console.log("pre");
//   });
// }); scrolling with button

const navBtn = document.getElementById("nav-btn");
const dropNav = document.getElementById("dropNav");
const closeBtn = document.getElementById("close-btn");
const phoneNav = document.getElementById("pn");
const mainContainer = document.getElementsByClassName("container")[0];
navBtn.addEventListener("click", () => {
  dropNav.classList.add("show");
  phoneNav.style.display = "none";
  mainContainer.style.display = "none";
});

closeBtn.addEventListener("click", () => {
  dropNav.classList.remove("show");
  phoneNav.style.display = "flex";
  mainContainer.style.display = "block";
});
