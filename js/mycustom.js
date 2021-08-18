// console.log("myCustom Js");
// const allH2 = document.getElementsByTagName("h2");
// for (let h2 of allH2) {
//   h2.style.color = "lightblue";
// }
const inputBtn = document.getElementById("inputGroup-sizing-lg");
// panda-btn-pink
document.getElementById("contact").addEventListener("keyup", function (event) {
  if (event.target.value == "email") {
    inputBtn.classList.add("panda-btn-pink");
  }
  // console.log();
});

const shoeCardImage = document.getElementById("red-shoe");
shoeCardImage.addEventListener("mouseenter", function (event) {
  event.target.src = "images/shoes/shoe-4.jpg";
});

shoeCardImage.addEventListener("mouseout", function (event) {
  event.target.src = "images/shoes/shoe-3.png";
});
// dblclick
