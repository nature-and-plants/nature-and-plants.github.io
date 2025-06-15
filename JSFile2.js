let up = document.createElement("button");
up.id = "up";
up.innerHTML = "&uparrow;";
document.body.appendChild(up)
window.onscroll = function () {
  scrollY >= 500 ? up.style.cssText = "transform:translateX(0)" : up.style.cssText = "transform:translateX(100)";
}
up.onclick = function () {
  scrollTo({
    top: 0,
    behavior: "smooth",
  })
}