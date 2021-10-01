
// For the menu bar display for responsive

let navbar = document.querySelector('.navbar');
let menuBar = document.getElementById("menu-bar");

menuBar.addEventListener('click', () =>{
    menuBar.classList.toggle('fa-times');
    navbar.classList.toggle('active');
});
