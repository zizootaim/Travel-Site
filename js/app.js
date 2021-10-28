// Global Variables
const sections = document.querySelectorAll("section[id]");
const menuLinks = document.querySelectorAll(".nav-link");

// Toggle Menu
const menuBtn = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show-menu");
});

menuLinks.forEach(link => {
    link.addEventListener("click", () => {
        menuLinks.forEach(link => {
            link.classList.remove("active");
        });
        link.classList.add("active");
    });
});

// Scroll To Section
menuLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const idIndex = link.href.indexOf('#')+1;
        const id = link.href.slice(idIndex);
        if(id == "home"){
            window.scrollTo({top:0,behavior: "smooth"})
        }
        else{
            for (const i of sections) {
                if(id == i.id){
                    let y = i.offsetTop - 50;
                    window.scrollTo({top: y,behavior: "smooth"})
                }
            }
        }
    });
});




// Scroll Header
const header = document.getElementById("home");

window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    if(scrolled > 60){
        header.classList.add("scrollheader");
    }else{
        header.classList.remove("scrollheader");
    }
});

// Change Theme
const themeBtn = document.querySelector(".change-theme");
const icon = themeBtn.querySelector("i");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }else{
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

// Activate Nav Links with Scroll
const home = document.querySelector(".nav-link");
home.classList.add("active");

window.addEventListener("scroll", () => {
    const scrolled = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 80,
        sectionHeight = section.clientHeight,
        sectionID = section.getAttribute("id");

        if(scrolled < 180)
            home.classList.add("active");
        else
            home.classList.remove("active");

        if(scrolled > sectionTop && scrolled <= sectionTop + sectionHeight){
            document.querySelector(`.nav-item a[href*=${sectionID}]`).classList.add("active");
        }else{
            document.querySelector(`.nav-item a[href*=${sectionID}]`).classList.remove("active");
        }
    });
});

// Discover Swiper
var swiper = new Swiper(".cards-container", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    loop: true,
    spaceBetween: 32,
    coverflowEffect: {
      rotate: 0,
    },
});

// Video
const videoBtn = document.querySelector(".video-btn");
const video = document.querySelector(".video video");
let pausing = true;

videoBtn.addEventListener("click",() => {
    videoBtn.classList.toggle("playing");
    if(pausing){
        video.play();
        pausing = false;
    }else{
        video.pause();
        pausing = true;
    }
});

