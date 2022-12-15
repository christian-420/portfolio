/*********************************** Loader ************************************/
const hide = document.querySelector(".hide");
const show = document.querySelector(".show");
$(show).hide();
window.addEventListener("load", () => {
  document.querySelector(".loader").classList.add("hidden");
});

/**************************** TypeWriter *********************************/
const title = document.querySelector(".nav-icons");
const txt = "Christian's Portfolio";

function typeWriter(word, index) {
  if (index < word.length) {
    setTimeout(() => {
      title.innerHTML += `${word[index]}`;
      typeWriter(txt, index + 1)
    }, 300)
  }
}

setTimeout(() => {
  typeWriter(txt, 0)
}, 1000);
//********************************** Animation***********************************//
const ratio = .1
const options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const handleIntersection = function (entries, observer) {
  observer = newLocal;
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > ratio) {
      entry.target.classList.add("reveal-visible");
      observer.unobserve(entry.target);
    }
  });
}

const newLocal = new IntersectionObserver(handleIntersection, options);
const observer = newLocal;
document.querySelectorAll('[class*="reveal-"]').forEach(function (r) {
  observer.observe(r)
});

//********************Progress bar *******************************//
const bar = document.querySelector(".box");
const progressBars = document.querySelectorAll(".progress-bar");
const values = [
  "95%",
  "90%",
  "88%",
  "85%",
  "80%"
]
const valeur = 0.5;
const parametre = {
  root: null,
  rootMargin: "0px",
  threshold: valeur
}

const intersect = function (entries, vue) {
  vue = local;
  entries.forEach(function (entry) {
    if (entry.intersectionRatio > valeur) {
      progressBars.forEach((progress, index) => {
        progress.style.width = values[index];
      });
      vue.unobserve(entry.target);
    }
  });
}

const local = new IntersectionObserver(intersect, parametre);
const vue = local;
vue.observe(bar);

/************************ Menu *************/

const navLinks = [...document.querySelectorAll("nav a")];
const sections = [...document.querySelectorAll(".section")];

let sectionsPosition;

function positionCalculation() {
  sectionsPosition = sections.map(section => section.offsetTop);
};

positionCalculation();

navLinks.forEach(link => link.addEventListener("click", addScrollSmooth));

function addScrollSmooth(e) {
  const linkIndex = navLinks.indexOf(e.target);
  window.scrollTo({
    top: sectionsPosition[linkIndex],
    behavior: "smooth"
  });
};

window.addEventListener("resize", positionCalculation);

/***************** Responsive Menu **********************/

const toggler = document.querySelector(".hamburger");
const navLinksContainer = document.querySelector(".navlinks-container");

const toggleNav = () => {
  toggler.classList.toggle("open");
  navLinksContainer.classList.toggle("open");
}

toggler.addEventListener("click", toggleNav);

new ResizeObserver(entries => {
  if (entries[0].contentRect.width <= 800) {
    navLinksContainer.style.transition = "transform 0.3s ease-out";
  } else {
    navLinksContainer.style.transition = "none";
  }
}).observe(document.body);