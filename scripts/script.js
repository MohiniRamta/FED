console.log("hi");


var talenKnop = document.querySelector("body header section button")
var testKnop = document.querySelector("header > nav button");
var witteBalk = document.getElementById("mops")



talenKnop.addEventListener("click", toggleTalen);

function toggleTalen() {
	var deTalen = document.querySelector("section ul");
	deTalen.classList.toggle("open");
}


function toggleMenu()  {
	var deNav = document.querySelector("header nav ul");
	deNav.classList.toggle("open");
	
} testKnop.addEventListener("click", toggleMenu);


function balkSchuif() {
	witteBalk.classList.toggle("schuif");
} testKnop.addEventListener("click", balkSchuif);