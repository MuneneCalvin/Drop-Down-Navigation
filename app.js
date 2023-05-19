const hamburgerMenu = document.querySelector(".hamburger-icon");
const mobileNavigation = document.querySelector(".mobile-nav");
const clostBtn = document.querySelector(".close-btn");

hamburgerMenu.addEventListener("click", function(){
    mobileNavigation.style.display ="block";

}); 

clostBtn.addEventListener("click", function(){
    mobileNavigation.style.display = "none"
})
 

const menuItem = document.querySelectorAll(".menu-item");
const subMenu = document.querySelector(".sub-menu");

$(document).ready(function(){
    $(".menu-item").click(function(){
     $(this).next(".sub-menu").slideToggle();
    });
});

