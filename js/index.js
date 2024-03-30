// ! Home Side Bar Start

const btnOpenSidebar = document.getElementById('btn-menu');
const sidebar = document.getElementById('sidebar');
const btnCloseSidebar = document.getElementById('close-sidebar');


btnOpenSidebar.addEventListener("click", function () {
    sidebar.style.left = 0;
});

btnCloseSidebar.addEventListener("click", function () {
    sidebar.style.left = "-100%";
})

// * Click Outside Start
document.addEventListener("click", function (event) {
    if (!event.composedPath().includes(sidebar) && !event.composedPath().includes(btnOpenSidebar)) {
        sidebar.style.left = "-100%";
    }
});
// * Click Outside End

// ! Home Side Bar End
// ? ---------------------------------------------------------------
// ! Search Modal Start
const btnOpenSearch = document.querySelector('.search-button');
const modalSearch = document.querySelector(".modal-search");
const modalSearchWrapper = document.querySelector(".modal-wrapper");
const btnCloseSearch = document.getElementById("close-search");
btnOpenSearch.addEventListener("click", function () {
    modalSearch.style.visibility = 'visible'
    modalSearch.style.opacity = '1'
});

btnCloseSearch.addEventListener("click", function () {
    modalSearch.style.visibility = 'hidden';
    modalSearch.style.opacity = '0'
})

// * Click Outside Start
document.addEventListener("click", function (event) {
    if (
        !event.composedPath().includes(modalSearchWrapper) &&
        !event.composedPath().includes(btnOpenSearch)) {
        modalSearch.style.visibility = 'hidden';
        modalSearch.style.opacity = '0'
    }
});
// * Click Outside End

// ! Search Modal End
// ? ---------------------------------------------------------------
// ! Slider Start
let slideIndex = 1;
showSlides(slideIndex);

setInterval(() => {
    showSlides(slideIndex += 1);
}, 4000);

function plusSlide(n) {
    showSlides((slideIndex += n))
}

function currentSlide(n) {
    showSlides((slideIndex = n));
}

function showSlides(n) {
    const slides = document.getElementsByClassName("slider-item");
    const dots = document.getElementsByClassName("slider-dot");
    if (n > slides.length) {
        slideIndex = 1;
    }
    if (n < 1) {
        slideIndex = slides.length;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';

    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "")

    }


    slides[slideIndex - 1].style.display = "flex";
    dots[slideIndex - 1].className += " active";
}




// ! Slider End