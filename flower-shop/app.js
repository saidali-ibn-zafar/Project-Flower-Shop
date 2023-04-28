const catalogHidden = document.querySelector(".hiddenCatalog");
const contents = document.querySelector(".contents");
const info = document.querySelector(".info");
const catalogUnhidden = document.querySelector(".centeredContainer2");
const discountCard = document.querySelector(".discount-card");
const buttons = document.querySelectorAll(".catalogBtn");
const galleryButtons = document.querySelectorAll(".galleryBtn");
const galleryContainer = document.querySelector(".galleryContainer");
const galleryContainerUnhidden = document.querySelector(".galleryContainerUnhidden");
const nav = document.querySelector("nav");

function hideTheContents() {
  contents.style.transform = "translateX(-100%)";
  info.style.display = "none";
  catalogUnhidden.style.display = "none";
  galleryContainerUnhidden.style.display = "none";
  discountCard.style.display = "none";
  nav.style.transform = "translateY(-120px)";
}

function showTheContents() {
  contents.style.transform = "translateX(0)";
  info.style.display = "flex";
  galleryContainerUnhidden.style.display = "flex";
  catalogUnhidden.style.display = "flex";
  discountCard.style.display = "flex";
  nav.style.transform = "translateY(0)";
}

buttons.forEach((button) => {
  button.addEventListener("click", function () {
    if (catalogHidden.classList.contains("hidden")) {
      catalogHidden.classList.remove("hidden");
      hideTheContents();
      setTimeout(function () {
        catalogHidden.style.bottom = "10%";
      }, 250);
    } else {
      catalogHidden.style.bottom = "-100%";
      setTimeout(function () {
        catalogHidden.classList.add("hidden");
        showTheContents();
      }, 250);
    }
  });
});

galleryButtons.forEach((galleryBtn) => {
  galleryBtn.addEventListener("click", function () {
    if (galleryContainer.classList.contains("hidden")) {
      galleryContainer.classList.remove("hidden");
      hideTheContents();
      setTimeout(function () {
        galleryContainer.style.bottom = "0";
      }, 250);
    } else {
      galleryContainer.style.bottom = "-100%";
      setTimeout(function () {
        galleryContainer.classList.add("hidden");
        showTheContents();
      }, 250);
    }
  });
});

const goDowns = document.querySelectorAll(".goDown");

goDowns.forEach((goDown) => {
  goDown.addEventListener("click", function () {
    if (!galleryContainer.classList.contains("hidden")) {
      galleryContainer.style.bottom = "-100%";
      setTimeout(function () {
        galleryContainer.classList.add("hidden");
        showTheContents();
      }, 250);
    } else {
      catalogHidden.style.bottom = "-100%";
      setTimeout(function () {
        catalogHidden.classList.add("hidden");
        showTheContents();
      }, 250);
    }
  });
});

// go top button
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 220) {
    topLink.classList.add("show-link");
  } else {
    topLink.classList.remove("show-link");
  }
});

// going to top
topLink.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
  });
});
