let dark = document.getElementsByClassName("dark")[0];
let light = document.getElementsByClassName("light")[0];
let gardens = document.querySelectorAll(".gardens");
let headings1 = document.querySelectorAll("h1");
let content = document.querySelectorAll(".content");
let contenthead = document.querySelectorAll(".content h4");
let contenthead2 = document.querySelectorAll(".content h2");
let mainLinks = document.querySelectorAll(".main-links");
let openMenu = document.querySelector(".open-menu");
let openMenuPars = document.querySelectorAll(".open-menu p");
let closeMenu = document.querySelector(".close-menu");
let header = document.querySelector("header");
let appendToHeader = document.getElementById("appendToHeader")
let circlesPars = document.querySelectorAll("#circles p");
let container = document.getElementById("container");
let plantsBox = document.getElementById("plantsBox");
let natureBox = document.getElementById("natureBox");
let boxs = document.querySelectorAll(".box");
let boxsPars = document.querySelectorAll(".box a");
let boxOne = document.getElementById("boxOne");
let boxTwo = document.getElementById("boxTwo");
let boxThree = document.getElementById("boxThree");
let boxFour = document.getElementById("boxFour");
let plantsLinks = document.querySelectorAll(".plants a");

function showOpenMenu() {
  openMenu.style.display = "none";
  closeMenu.style.display = "block";
  header.style.cssText = `
  height: 450px;
  transition: 0.5s
  `;
  setTimeout( function () {
  	appendToHeader.style.display = "block";
      header.appendChild(appendToHeader)
}, 300)
}
function showCloseMenu() {
  closeMenu.style.display = "none";
  openMenu.style.display = "block";
  header.style.height = "40px";
  appendToHeader.style.display = "none";
}
onscroll = function () {
  if (scrollY >= 500) {
    up.style.transform = "translateX(-3px)";
  }
  else {
    up.style.transform = "translateX(100px)";
  }
}
function upButton() {
  scroll ({
    top: 0,
    behavior: "smooth"
  })
}
function darkMood() {
  dark.style.display = "none";
  light.style.display = "block";
  document.body.style.backgroundColor = "#333"
  for (let i = 0; i < gardens.length; i++) {
  gardens[i].style.color = "white";
}
for (let i = 0; i < headings1.length; i++) {
  headings1[i].style.color = "greenyellow";
}
for (let i = 0; i < content.length; i++) {
  content[i].style.background = "#444";
  content[i].style.color = "white";
}
for (let i = 0; i < contenthead.length; i++) {
  contenthead[i].style.color = "greenyellow";
}
for (let i = 0; i < contenthead2.length; i++) {
  contenthead2[i].style.color = "gold";
}
for (let i = 0; i < plantsLinks.length; i++) {
  plantsLinks[i].style.color = "white";
}
for (let i = 0; i < mainLinks.length; i++) {
  mainLinks[i].style.color = "lightblue";
};
for (let i = 0; i < boxs.length; i++) {
  boxs[i].style.backgroundColor = "#444";
}
for (let i = 0; i < boxsPars.length; i++) {
  boxsPars[i].style.color = "gold";
}
localStorage.setItem("mood", "dark");
}
  function lightMood() {
  dark.style.display = "block";
  light.style.display = "none";
  document.body.style.backgroundColor = "aliceblue"
  for (let i = 0; i < gardens.length; i++) {
  gardens[i].style.color = "black";
}
for (let i = 0; i < headings1.length; i++) {
  headings1[i].style.color = "darkred";
}
for (let i = 0; i < content.length; i++) {
  content[i].style.background = "white";
  content[i].style.color = "black";
}
for (let i = 0; i < contenthead.length; i++) {
  contenthead[i].style.color = "blue";
}
for (let i = 0; i < contenthead2.length; i++) {
  contenthead2[i].style.color = "darkgreen";
}
for (let i = 0; i < plantsLinks.length; i++) {
  plantsLinks[i].style.color = "black";
}
for (let i = 0; i < mainLinks.length; i++) {
  mainLinks[i].style.color = "royalblue";
};
for (let i = 0; i < boxs.length; i++) {
  boxs[i].style.backgroundColor = "white";
}
for (let i = 0; i < boxsPars.length; i++) {
  boxsPars[i].style.color = "darkblue";
}
localStorage.setItem("mood", "light");
}
function change (mainElement, bgColor, textColor, hD1, contentBG, contentCO, cH, cH2) {
  for (let i = 0; i < circlesPars.length; i++) {
  circlesPars[i].style.cssText = `transform: scale(1); opacity: 0.6`;
}
  document.getElementById(mainElement).style.cssText = "transform: scale(1.2); opacity: 1";
  document.body.style.backgroundColor = bgColor;
  for (let i = 0; i < mainLinks.length; i++) {
  mainLinks[i].style.color = textColor
};
for (let i = 0; i < gardens.length; i++) {
  gardens[i].style.color = textColor
};
for (let i = 0; i < headings1.length; i++) {
  headings1[i].style.color = hD1
};
for (let i = 0; i < content.length; i++) {
  content[i].style.background = contentBG
  content[i].style.color = contentCO
};
for (let i = 0; i < contenthead.length; i++) {
  contenthead[i].style.color = cH
};
for (let i = 0; i < contenthead2.length; i++) {
  contenthead2[i].style.color = cH2
};
for (let i = 0; i < plantsLinks.length; i++) {
  plantsLinks[i].style.color = textColor
};
for (let i = 0; i < boxs.length; i++) {
  boxs[i].style.backgroundColor = contentBG;
}
for (let i = 0; i < boxsPars.length; i++) {
  boxsPars[i].style.color = cH2;
}
localStorage.setItem("mood",  "changed")
localStorage.setItem("mainElement", mainElement)
localStorage.setItem("bgColor", bgColor)
localStorage.setItem("textColor", textColor)
localStorage.setItem("hD1", hD1)
localStorage.setItem("contentBG", contentBG)
localStorage.setItem("contentCO", contentCO)
localStorage.setItem("cH", cH)
localStorage.setItem("cH2", cH2)
}
window.onload = function () {
  if (localStorage.getItem("mood") === "dark") {
    darkMood();
  } 
else if (localStorage.getItem("mood") === "light") {
    lightMood();
  } 
else if (localStorage.getItem("mood") === "changed") {
	change(localStorage.getItem("mainElement"),localStorage.getItem("bgColor"),localStorage.getItem("textColor"),localStorage.getItem("hD1"),localStorage.getItem("contentBG"),localStorage.getItem("contentCO"),localStorage.getItem("cH"),localStorage.getItem("cH2"));
  }
};
function searchOne (value) {
  for (let i = 0; i < boxs.length; i++) {
    boxs[i].innerText.includes(value) ? boxs[i].style.display = "block" : boxs[i].style.display = "none";
  }
}
function createLinks (link) {
  window.location.href = link + '.html';
}
function createLinks2 (link) {
  window.open(link, "_blank");
}
