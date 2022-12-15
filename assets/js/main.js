// const ratio = .5
// const options = {
//   root: null,
//   rootMargin: '0px',
//   threshold: ratio
// }


// const handleIntersection = function (entries, observer) {
//   observer = newLocal;
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio) {
//       entry.target.classList.remove("reveal");
//       observer.unobserve(entry.target);
//     }
//   });
// }

// const newLocal = new IntersectionObserver(handleIntersection, options);
// const observer = newLocal;

// document.querySelectorAll('.reveal').forEach(function (r) {
//   observer.observe(r)
// });


// //********************Progress bar *******************************/

// const bar = document.querySelector(".box");
// const progressBars = document.querySelectorAll(".progress-bar");
// const values = [
//   "95%",
//   "90%",
//   "88%",
//   "85%",
//   "80%"

// ]
// const ratio2 = 0.9;
// const options2 = {
//   root: null,
//   rootMargin: "0px",
//   threshold: ratio2
// }

// const intersect = function (entries, observer2) {
//   observer2 = newLocal2;
//   entries.forEach(function (entry) {
//     if (entry.intersectionRatio > ratio2) {
//       progressBars.forEach((progress, index) => {
//         progress.style.width = values[index];
//       });
//       observer2.unobserve(entry.target);
//     }
//   });
// }

// const newLocal2 = new IntersectionObserver(intersect, options2);
// const observer2 = newLocal2;
// observer2.observe(bar);

/********************** Nav Menu  ****************************************/
// const navLinks = [...document.querySelectorAll("nav a")]
// const sections = [...document.querySelectorAll("div .section")]

// let sectionsPosition;

// function positionCalculation() {
//   sectionsPosition = sections.map(section => section.offsetTop)
// }

// positionCalculation()

// navLinks.forEach(link => link.addEventListener("click", addScrollSmooth))

// function addScrollSmooth(e) {
//   const linkIndex = navLinks.indexOf(e.target);
//   window.scrollTo({
//     top: sectionsPosition[linkIndex],
//     behavior: "smooth"
//   })
// }

// window.addEventListener("resize", positionCalculation);