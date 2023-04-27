const catalogHidden = document.querySelector(".hiddenCatalog");
const contents = document.querySelector(".contents");
const info = document.querySelector(".info");
const catalogUnhidden = document.querySelector(".centeredContainer2");
const discountCard = document.querySelector(".discount-card");

document.getElementById("catalogBtn").addEventListener("click", function () {
  if (catalogHidden.classList.contains("hidden")) {
    contents.style.transform = "translateX(-100%)";
    catalogHidden.classList.remove("hidden");
    info.style.display = "none";
    catalogUnhidden.style.display = "none";
    discountCard.style.display = "none";

    setTimeout(function () {
      catalogHidden.style.bottom = "-10%";
    }, 250);
  } else {
    catalogHidden.style.bottom = "-100%";

    setTimeout(function () {
      catalogHidden.classList.add("hidden");
      contents.style.transform = "translateX(0)";
      info.style.display = "block";
      catalogUnhidden.style.display = "flex";
      discountCard.style.display = "flex";
    }, 250);
  }
});

// go top button
const topLink = document.querySelector(".top-link");
window.addEventListener("scroll", function () {
  // console.log(window.pageYOffset);
  const scrollHeight = window.pageYOffset;

  if (scrollHeight > 150) {
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
