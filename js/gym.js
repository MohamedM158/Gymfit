let nav = document.querySelector(".navbar");
let close = document.querySelector(".close");
let fullImgBox = document.getElementById("fullImgBox");
let fullImg = document.getElementById("fullImg");
let allImgs = Array.from(
  document.querySelectorAll(".gallery .container .image")
);

if (window.innerWidth < 992) {
  nav.style.backgroundColor = "#181a23";
} else {
  window.onscroll = function () {
    if (scrollY > 100) {
      nav.style.backgroundColor = "#181a23";
    } else {
      nav.style.backgroundColor = "transparent";
    }
  };
}

close.onclick = function () {
  fullImgBox.style.display = "none";
};

function openFullImage(event) {
  let pic = event.target.src;
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

allImgs.forEach((img) => {
  img.addEventListener("click", openFullImage);
});
