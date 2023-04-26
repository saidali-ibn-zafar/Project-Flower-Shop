
document.getElementById("catalogBtn").addEventListener("click", function () {
  const gridContents = document.querySelector(".centeredContainer");
  const contents = document.querySelector(".contents");
  if (gridContents.classList.contains("hidden")) {
    contents.style.transform = "translateX(-100%)";
    gridContents.classList.remove("hidden");
    setTimeout(function () {
      gridContents.style.bottom = "-10%";
    }, 250);
  } else {
    gridContents.style.bottom = "-100%";

    setTimeout(function () {
      gridContents.classList.add("hidden");
      contents.style.transform = "translateX(0)";
    }, 250);
  }
});
