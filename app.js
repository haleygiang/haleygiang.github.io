// sticky nav bar
window.onscroll = function () { stickyNavBar() };
const navbar = document.querySelector('#navbar')
const sticky = navbar.offsetTop
const navbar_height = navbar.offsetHeight

function stickyNavBar() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky")
    }
}

// navigate to a specific part of the page
function navigate(destination) {
    let item = document.querySelector(`#${destination}`)
    let elDistanceToTop = window.pageYOffset + item.getBoundingClientRect().top - navbar_height
    window.scrollTo(0, elDistanceToTop)
}

// add nav button to active class when clicked
let nav_btns = document.querySelectorAll('.nav-btn')
for (let i = 0; i < nav_btns.length; i++) {
    nav_btns[i].addEventListener("click", function () {
        let current = document.querySelectorAll(".active");
        if (current.length > 0) {
            current[0].classList.remove("active")
        }
        this.classList.add("active")
    });
}
// add nav buttons to active class when scrolling by respective section-container
let sections = document.querySelectorAll('.section-container')
window.addEventListener("scroll", function () {
    let fromTop = window.scrollY

    sections.forEach(section => {
        let section_top = section.offsetTop
        let section_height = section.offsetHeight
        let current = section.id.replace("-container", "")
        let nav_btn = document.querySelector(`#nav-${current}`)

        if (fromTop >= section_top - navbar_height - 3 && fromTop <= section_top + section_height - navbar_height - 3) {
            nav_btn.classList.add("active")
        } else {
            nav_btn.classList.remove("active")
        }
    })
})

// open a new tab
function NewTabArt() {
    window.open("https://oberlincollege.pixieset.com/artstuff/", '_blank')
}
function NewTabYelpCamp() {
    window.open("https://campingisfun.herokuapp.com/", '_blank')
}
function NewTabWeCare() {
    window.open("", '_blank')
}
function NewTabSpelling() {
    window.open("https://github.com/haleygiang/bedanhvan", '_blank')
}
function NewTabObieFood() {
    window.open("https://github.com/haleygiang/Obie-Food-Android-App", '_blank')
}
function NewTabResume() {
    window.open("https://drive.google.com/file/d/1fG1brNRajYMOhhOhh5f7D6vE1pgcLL4K/view?usp=sharing", '_blank')
}
function NewTabLinkedIn() {
    window.open("https://www.linkedin.com/in/huyen-haley-giang-49580b192/", '_blank')
}
function NewTabGitHub() {
    window.open("https://github.com/haleygiang", '_blank')
}
function NewTabMail() {
    window.open("mailto:hgiang@oberlin.edu", '_blank')
}

// main wrapper moves up when scrolling down NOT WORKING
$(function () {
    $(window).on("scroll", function () {
        // alert('window is scrolling')
        // $('.main-wrapper').scrollTop()
        // $(".main-wrapper").stop().animate({ "marginTop": (-$(window).scrollTop()) + "px"});
        $('.main-wrapper').css('top', $(this).scrollTop());
    })
})

// manual art slide show
// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// }

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("slide");
//   let dots = document.getElementsByClassName("dot");
//   if (n > slides.length) {slideIndex = 1}    
//   if (n < 1) {slideIndex = slides.length}
//   for (i = 0; i < slides.length; i++) {
//       slides[i].style.display = "none";  
//   }
//   for (i = 0; i < dots.length; i++) {
//       dots[i].className = dots[i].className.replace(" active", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dots[slideIndex-1].className += " active";
// }

// auto slide show
let slideIndex = 0;
carousel();

function carousel() {
    let i;
    let x = document.getElementsByClassName("slide");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1 }
    x[slideIndex - 1].style.display = "block";
    setTimeout(carousel, 1500); // Change image every 2 seconds

    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active-dot", "");
    }
    dots[slideIndex - 1].className += " active-dot";
}
