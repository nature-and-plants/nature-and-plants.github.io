let content = document.querySelectorAll(".content");
let contentHead = document.querySelectorAll(".content h2");
let head2 = document.querySelectorAll("h2");
let contentHead2 = document.querySelectorAll(".content h3");
let head3 = document.querySelectorAll("h3");
let contentLi = document.querySelectorAll(".content ul li");
let gardens = document.querySelectorAll(".gardens");
let headings1 = document.querySelectorAll("h1");
let btn1 = document.createElement("button");
let btn2 = document.createElement("button");
let btn3 = document.createElement("button");
let head4 = document.querySelectorAll("h4");
let tableD = document.querySelectorAll("td");
let tableH = document.querySelectorAll("th");
function lightMood() {
  document.body.style.background = "aliceblue";
  for (let i = 0; i < gardens.length; i++) {
  gardens[i].style.color = "black";
}
for (let i = 0; i < headings1.length; i++) {
  headings1[i].style.color = "green";
}
for (let i = 0; i < content.length; i++) {
  content[i].style.background = "white";
  content[i].style.color = "black";
}
for (let i = 0; i < head2.length; i++) {
  head2[i].style.animation = "lightColorHead 2s infinite"
}
for (let i = 0; i < head3.length; i++) {
  head3[i].style.animation = "lightColor 2s infinite"
}
for (let i = 0; i < head4.length; i++) {
  head4[i].style.color = "black";
}
for (let i = 0; i < contentLi.length; i++) {
  contentLi[i].style.color = "black";
}
for (let i = 0; i < contentHead.length; i++) {
  contentHead[i].style.animation = "lightColorHead 2s infinite"
}
for (let i = 0; i < contentHead2.length; i++) {
  contentHead2[i].style.animation = "lightColor 2s infinite"
}
for (let i = 0; i < tableH.length; i++) {
  tableH[i].style.backgroundColor = "brown";
  tableH[i].style.color = "gold";
}
for (let i = 0; i < tableD.length; i++) {
  tableD[i].style.backgroundColor = "goldenrod";
  tableD[i].style.color = "white";
}
localStorage.setItem("mood", "light");
}
function darkMood() {
  document.body.style.background = "#333";
  for (let i = 0; i < gardens.length; i++) {
  gardens[i].style.color = "white";
}
for (let i = 0; i < headings1.length; i++) {
  headings1[i].style.color = "yellow";
}
for (let i = 0; i < content.length; i++) {
  content[i].style.background = "#330";
  content[i].style.color = "white";
}
for (let i = 0; i < contentHead.length; i++) {
  contentHead[i].style.animation = "darkColorHead 2s infinite"
}
for (let i = 0; i < head2.length; i++) {
  head2[i].style.animation = "darkColorHead 2s infinite"
}
for (let i = 0; i < contentHead2.length; i++) {
  contentHead2[i].style.animation = "darkColor 2s infinite"
}
for (let i = 0; i < head3.length; i++) {
  head3[i].style.animation = "darkColor 2s infinite"
}
for (let i = 0; i < head4.length; i++) {
  head4[i].style.color = "white";
}
for (let i = 0; i < contentLi.length; i++) {
  contentLi[i].style.color = "white";
}
for (let i = 0; i < tableH.length; i++) {
  tableH[i].style.backgroundColor = "blue";
  tableH[i].style.color = "aqua";
}
for (let i = 0; i < tableD.length; i++) {
  tableD[i].style.backgroundColor = "black";
  tableD[i].style.color = "white";
}
localStorage.setItem("mood", "dark");
}
function createButtons () {
	btn1.innerHTML = "dark";
	btn2.innerHTML = "light";
	btn3.innerHTML = "&uparrow;";
	btn1.id = "light";
	btn2.id = "light";
	btn3.id = "up";
	btn2.style.display = "none";
	btn1.onclick = function(){
		this.style.display =  "none";
		btn2.style.display = "block";
		darkMood()
};
btn2.onclick = function(){
		this.style.display =  "none";
		btn1.style.display = "block";
		lightMood()
};
	document.body.appendChild(btn1)
	document.body.appendChild(btn2)
	document.body.appendChild(btn3)
}
createButtons()
window.onload = function () {
  if (localStorage.getItem("mood") === "dark") {
    darkMood();
    btn1.style.display = "none";
    btn2.style.display = "block";
  }
  else if (localStorage.getItem("mood") === "light") {
    lightMood();
    btn1.style.display = "block";
    btn2.style.display = "none";
  }
}
window.onscroll = function () {
	if (scrollY >= 300) {
  	btn3.style.cssText = "transform:translateX(0)";
}
else {
	btn3.style.cssText = "transform:translateX(100px)";
}
}
btn3.onclick = function () {
	scrollTo({
		top:0,
		behavior: "smooth"
});
}
btn1.onmouseenter = function () {
  this.style.cursor = "pointer";
}
btn2.onmouseenter = function () {
  this.style.cursor = "pointer";
}