var typed = new Typed(".multiple-text", {
  strings: [
    "FrontEnd Development ",
    "Backend Development",
    "Machine Learning",
    "Data Science",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Projects-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".AboutMe").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  window.addEventListener("scroll", function () {
    document.querySelectorAll(".Skills-section").forEach(function (section) {
      if (isElementInViewport(section)) {
        section.classList.remove("animated");
      } else {
        section.classList.add("animated");
      }
    });
  });
});

function isElementInViewport(el) {
  var rect = el.getBoundingClientRect();

  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <=
      (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

function Traffic Flow-prediction() {
  open("https://github.com/2203A51464/Traffic-prediction");
}
function research-oN-image() {
  open("https://github.com/2203A51464/research-oN-image");
}
function movieLive() {
  open("https://movie-recommendation-system-1950-2016.onrender.com/?");
}
function Diabetic-Retinopathy-Detection() {
  open("https://github.com/2203A51464/Diabetic-Retinopathy-Detection");
}
function irisLive() {
  open("https://shivakrishna.pythonanywhere.com/?");
}
function hand() {
  open("https://github.com/ShivaKrisl/HandWrittenDigits_Classification");
}

function tastyPlate() {
  open("https://github.com/ShivaKrisl/Jcomponent-Project");
}

function resume() {
  open(
    "https://drive.google.com/file/d/1O_2yd22HT-BmP_cs2wV2pyUkrCt1N9UB/view?usp=sharing"
  );
}