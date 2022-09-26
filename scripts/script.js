// JavaScript Document
console.log("hi");

var menuKnop = document.querySelector("header nav button");

menuKnop.addEventListener("click", toggleMenu);

function toggleMenu() {
	var deNav = document.querySelector("header nav button");
	deNav.classList.toggle("open");
}

