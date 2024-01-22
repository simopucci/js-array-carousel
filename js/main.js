const slides = ['01.webp', '02.webp', '03.webp', '04.webp', '05.webp'];
const slidesContainer = document.getElementById('slides-container');
const arrowNext = document.querySelector('.arrow-next');
const arrowPrev = document.querySelector('.arrow-prev');

let slideIndex = 0;

let slideshtml = '';
for (let i = 0; i < slides.length; i++) {
    const slide = slides[i];
    let activeClass = i == slideIndex ? 'active' : '';

    slideshtml += `<img src="./img/${slide}" class="slide ${activeClass}" alt="slide ${i}">`;
}

slidesContainer.innerHTML = slideshtml;

arrowNext.addEventListener('click', function () {
    const allSlides = document.getElementsByClassName('slide');

    const oldSlide = allSlides[slideIndex];
    oldSlide.classList.remove('active');

    if (slideIndex >= allSlides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    const newSlide = allSlides[slideIndex];
    newSlide.classList.add('active');
});

arrowPrev.addEventListener('click', function () {
    const allSlides = document.getElementsByClassName('slide');

    const oldSlide = allSlides[slideIndex];
    oldSlide.classList.remove('active');

    if (slideIndex <= 0) {
        slideIndex = allSlides.length - 1;
    } else {
        slideIndex--;
    }

    const newSlide = allSlides[slideIndex];
    newSlide.classList.add('active');
});

function changingSlide() {
    const allSlides = document.getElementsByClassName('slide');

    const oldSlide = allSlides[slideIndex];
    oldSlide.classList.remove('active');

    if (slideIndex >= allSlides.length - 1) {
        slideIndex = 0;
    } else {
        slideIndex++;
    }

    const newSlide = allSlides[slideIndex];
    newSlide.classList.add('active');
}

const slideChange = setInterval (function() {
    changingSlide();
}, 3000);

slidesContainer.onmouseover = function() {
    clearInterval(slideChange);
};

slidesContainer.onmouseout = function() {
    setInterval (function() {
        changingSlide();
    }, 3000);
}