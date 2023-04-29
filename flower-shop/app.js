const catalogHidden = document.querySelector(".hiddenCatalog");
const contents = document.querySelector(".contents");
const info = document.querySelector(".info");
const catalogUnhidden = document.querySelector(".centeredContainer2");
const discountCard = document.querySelector(".discount-card");
const buttons = document.querySelectorAll(".catalogBtn");
const galleryButtons = document.querySelectorAll(".galleryBtn");
const galleryContainer = document.querySelector(".galleryContainer");
const mainContainer = document.querySelector(".mainContainer");
const nav = document.querySelector("nav");
const goDowns = document.querySelectorAll(".goDown");
const topLink = document.querySelector(".top-link");
const bouquetContainer = document.querySelector('.bouquet');

// hide contents function
function hideTheContents() {
  contents.style.transform = "translateX(-100%)";
  info.style.display = "none";
  catalogUnhidden.style.display = "none";
  discountCard.style.display = "none";
  bouquetContainer.style.display = 'none';
  nav.style.transform = "translateY(-120px)";
}

// show contents function
function showTheContents() {
  contents.style.transform = "translateX(0)";
  info.style.display = "flex";
  catalogUnhidden.style.display = "flex";
  discountCard.style.display = "flex";
  bouquetContainer.style.display = 'flex';
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





















const circles = document.querySelectorAll(".circles");
const services = document.querySelector(".services");
let counter = 0;
document.querySelector("#prev").addEventListener("click", function () {
  counter--;
  if (counter < 0) {
    counter = 2;
  }
  services.children[counter].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
  updateActive();
});

document.querySelector("#next").addEventListener("click", function () {
  counter++;
  if (counter > 2) {
    counter = 0;
  }
  services.children[counter].scrollIntoView({
    behavior: "smooth",
    block: "nearest",
  });
  updateActive();
});

function updateActive() {
  circles.forEach((circle, idx) => {
    if (idx === counter) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
}

// filter prices

const rangeSlider = document.querySelector(".range-slider");
const rangeValues = document.querySelectorAll(".range-value");

const range1 = document.querySelector("#range1");
const range3 = document.querySelector("#range3");

rangeSlider.addEventListener("input", () => {
  rangeValues.forEach((rangeValue, index) => {
    if (range1.value >= range3.value) {
      rangeValue.innerHTML = range3.value + "$";
    } else {
      rangeValue.innerHTML = rangeSlider.children[index].value + "$";
    }
  });
});

// dropdown menu
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const dropdownButton = dropdown.querySelector(".dropdown-button");
  const dropdownContent = dropdown.querySelector(".dropdown-content");
  const radioButtons = dropdown.querySelectorAll('input[type="radio"]');

  dropdownButton.addEventListener("click", (e) => {
    dropdownContent.classList.toggle("show");
    dropdownButton.children[1].classList.toggle("rotate");
  });

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("click", () => {
      dropdownButton.children[0].innerHTML =
        radioButton.value.charAt(0).toUpperCase() + radioButton.value.slice(1);
      // dropdownContent.classList.remove('show');`
    });
  });
});

const menu = [
  {
    id: 1,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-1.jpg",
    description: "Designer bouquet",
    cost: "30",
    size: "S",
  },
  {
    id: 2,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-2.jpg",
    description: "Designer bouquet",
    cost: "65",
    size: "L",
  },
  {
    id: 3,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-3.jpg",
    description: "Designer bouquet",
    cost: "100",
    size: "XL",
  },
  {
    id: 4,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-4.jpg",
    description: "Mono bouquets",
    cost: "29",
    size: "S",
  },
  {
    id: 5,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-5.jpg",
    description: "Mono bouquets",
    cost: "66",
    size: "M",
  },
  {
    id: 6,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-6.jpg",
    description: "Mono bouquets",
    cost: "68",
    size: "L",
  },
  {
    id: 7,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-7.jpg",
    description: "Bouquets of dried flowers",
    cost: "90",
    size: "XL",
  },
  {
    id: 8,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-8.jpg",
    description: "Bouquets of dried flowers",
    cost: "63",
    size: "M",
  },
  {
    id: 9,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-9.jpg",
    description: "Bouquets of dried flowers",
    cost: "45",
    size: "S",
  },
  {
    id: 10,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-10.jpg",
    description: "Wedding bouquets",
    cost: "73",
    size: "L",
  },
  {
    id: 11,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "../images/bouquet/bouquet-11.jpg",
    description: "Wedding bouquets",
    cost: "88",
    size: "XL",
  },
  {
    id: 12,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-12.jpg",
    description: "Wedding bouquets",
    cost: "39",
    size: "S",
  },
  {
    id: 13,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-13.jpg",
    description: "Bouquets in boxes",
    cost: "55",
    size: "M",
  },
  {
    id: 14,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-14.jpg",
    description: "Bouquets in boxes",
    cost: "75",
    size: "L",
  },
  {
    id: 15,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-15.jpg",
    description: "Bouquets in boxes",
    cost: "95",
    size: "XL",
  },
  {
    id: 16,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-16.jpg",
    description: "Sweet bouquets",
    cost: "41",
    size: "S",
  },
  {
    id: 17,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-17.jpg",
    description: "Sweet bouquets",
    cost: "60",
    size: "M",
  },
  {
    id: 18,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-18.jpg",
    description: "Sweet bouquets",
    cost: "65",
    size: "L",
  },
  {
    id: 19,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-19.jpg",
    description: "Sweet bouquets",
    cost: "85",
    size: "XL",
  },
  {
    id: 20,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-20.jpg",
    description: "Bouquets of soap flowers",
    cost: "32",
    size: "S",
  },
  {
    id: 21,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-21.jpg",
    description: "Bouquets of soap flowers",
    cost: "55",
    size: "M",
  },
  {
    id: 22,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-22.jpg",
    description: "Bouquets of soap flowers",
    cost: "80",
    size: "L",
  },
  {
    id: 23,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-23.jpg",
    description: "Boxes of soap flowers",
    cost: "100",
    size: "XL",
  },
  {
    id: 24,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-24.jpg",
    description: "Boxes of soap flowers",
    cost: "35",
    size: "S",
  },
  {
    id: 25,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-25.jpg",
    description: "Boxes of soap flowers",
    cost: "56",
    size: "M",
  },
  {
    id: 26,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-10.jpg",
    description: "Boxes of soap flowers",
    cost: "70",
    size: "L",
  },
  {
    id: 27,
    name: "Bouquet 'Sun' ",
    category: "peonies",
    image: "./images/bouquet/bouquet-21.jpg",
    description: "Wedding bouquets",
    cost: "90",
    size: "XL",
  },
];

window.addEventListener("DOMContentLoaded", function () {
  const bouquetCards = document.querySelector(".bouquet-cards");

  let displayMenu = menu.map(function (item) {
    return `
            <div class="bouquet-card">
                <div class="bouquet-img">
                    <img src="${item.image}" alt="">
                </div>
                <div class="card-name">
                    <h3>${item.name}</h3>
                </div>
                <div class="line"></div>
                <div class="card-price">
                    <h3>${item.cost} <span class="currency">USD</span></h3>
                    <div class="cart-icon">
                        <i class="fa-solid fa-heart  "></i>
                        <p class="like-counter">0</p>
                        <i class="fa-solid fa-cart-shopping shopping"></i>
                    </div>
                </div>
            </div>`;
  });

  displayMenu = displayMenu.join("");
  bouquetCards.innerHTML += displayMenu;

  const hearts = document.querySelectorAll(".fa-heart");
  hearts.forEach(function (heart) {
    const cartIcon = heart.parentElement;
    const likeCounter = cartIcon.querySelector(".like-counter");
    let counterLike = 0;
    likeCounter.style.display = "none";
    heart.addEventListener("click", function () {
      heart.classList.toggle("color");
      if (heart.classList.contains("color")) {
        counterLike++;
      } else {
        counterLike--;
      }
      likeCounter.textContent = counterLike;
      if (counterLike <= 0) {
        likeCounter.style.display = "none";
      } else {
        likeCounter.style.display = "inline";
      }
    });
  });
});

const categories = document.querySelector(".list");
///////const prevBqt = document.querySelector('.prev-bouquet');
//////const nextBqt = document.querySelector('.next-bouquet');

// categories.addEventListener("click", function (e) {

//     let displayMenu = menu.map(function (item) {
//         if(item.description === e.currentTarget.textContent){
//             return `
//                 <div class="bouquet-card">
//                     <div class="bouquet-img">
//                         <img src="${item.image}" alt="">
//                     </div>
//                     <div class="card-name">
//                         <h3>${item.name}</h3>
//                     </div>
//                     <div class="line"></div>
//                     <div class="card-price">
//                         <h3>${item.cost} <span class="currency">USD</span></h3>
//                         <div class="cart-icon">
//                             <i class="fa-solid fa-heart"></i>
//                             <i class="fa-solid fa-cart-shopping"></i>
//                         </div>
//                     </div>
//                 </div>`;
//         };
//     });
//     displayMenu = displayMenu.join("");
//     bouquetCards.innerHTML = displayMenu;
// })
categories.addEventListener("click", function (e) {
  let catArr = menu.map((item) => {
    return {
      description: item.description,
    };
  });
  for (let i = 0; i < catArr.length; i++) {
    if (catArr[i].description === e.currentTarget.textContent) {
      let displayMenu = catArr.map(function (item) {
        return `
                    <div class="bouquet-card">
                        <div class="bouquet-img">
                            <img src="${item.image}" alt="">
                        </div>
                        <div class="card-name">
                            <h3>${item.name}</h3>
                        </div>
                        <div class="line"></div>
                        <div class="card-price">
                            <h3>${item.cost} <span class="currency">USD</span></h3>
                            <div class="cart-icon">
                                <button>
                                <i class="fa-regular fa-heart"></i></button>
                                <p id="like-counter">0</p>
                                <button>
                                <i class="fa-solid fa-cart-shopping"></i></button>
                            </div>
                        </div>
                    </div>`;
      });

      displayMenu = displayMenu.join("");
      bouquetCards.innerHTML = displayMenu;
    }
  }
});

// prevBqt.addEventListener("click", function () {

// });

// nextBqt.addEventListener("click", function () {

// });

