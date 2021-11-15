// js start here

//menubar icon start here

let menuIcon = document.getElementById("menu-icon");
let menu = document.getElementById("menu");

menuIcon.addEventListener("click", () => {
  if (menu.className === "hidden") {
    menu.classList.remove("hidden");
  } else {
    menu.classList.add("hidden");
  }
});
//menubar icon  ends here

// slide part start here

// start point
let i = 0;
let images = [];

// images list//

images[0] = "slide-img/rasel-1.jpg";
images[1] = "slide-img/rasel-2.jpg";
images[2] = "slide-img/rasel-3.jpg";
images[3] = "slide-img/rasel-4.jpg";

// change images//

function changeImg() {
  let slide = document.querySelector(".slide_img");
  slide.src = images[i];

  if (i < images.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("changeImg()", 3000);
}

window.onload = changeImg;

// slide part ends here

// js start here
