const button = document.querySelector(".button-dark");
const btn_black = document.querySelector(".btn-black");

const body = document.querySelector("body");

button.addEventListener("click", function darkMode() {
  if (body.classList.contains("light")) {
    body.classList.remove("light");
    body.classList.add("dark");
    btn_black.style.color = "black";
    button.innerText = "Light";
  } else {
    body.classList.remove("dark");
    body.classList.add("light");
    button.innerText = "Dark";
  }
});

const h2 = document.querySelector("h2");
const strh2 = h2.textContent;
const splith2 = strh2.split("");
h2.textContent = "";
console.log("splith2");

for (let i = 0; i < splith2.length; i++) {
  h2.innerHTML += "<span>" + splith2[i] + "</span>";
}

let char = 0;
let timer = setInterval(onTick, 60);

function onTick() {
  const span = h2.querySelectorAll("span")[char];
  span.classList.add("fade-perso");
  char++;
  if (char === splith2.lenght) {
    complete();
    return;
  }
}

function complete() {
  clearInterval(timer);
  timer = null;
}

let slideIndex = 0;
let = showSlides();

function showSlides() {
  let i;
  let slides = document.querySelectorAll(".slide");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}
