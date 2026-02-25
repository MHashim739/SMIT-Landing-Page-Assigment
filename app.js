document.addEventListener("DOMContentLoaded", function(){

    const toggle = document.getElementById("menu-toggle");
    const nav = document.getElementById("nav-links");

    toggle.addEventListener("click", function(){
        nav.classList.toggle("active");
    });

});


document.documentElement.style.setProperty('--animate-duration', '2s');

// All animations will take half the time to accomplish
document.documentElement.style.setProperty('--animate-duration', '.5s');