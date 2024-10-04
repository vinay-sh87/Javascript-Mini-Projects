
const slider = document.getElementById('slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

let slideCounter = 0;
const totalSlides = slides.length;

updateSlide = () => {
    const slideWidth = slides[0].clientWidth;
    slider.style.transform = `translateX(-${slideCounter * slideWidth
        }px)`;
};

autoSlide = () => {
    slideCounter = (slideCounter + 1) % totalSlides;
    updateSlide();
};
let interval = setInterval(autoSlide, 3000);

prevBtn.addEventListener('click', () => {
    clearInterval(interval);
    slideCounter = (slideCounter - 1 + totalSlides) % totalSlides;
    updateSlide();
    interval = setInterval(autoSlide, 3000);
});

nextBtn.addEventListener('click', () => {
    clearInterval(interval);
    slideCounter = (slideCounter + 1) % totalSlides;
    updateSlide();
    interval = setInterval(autoSlide, 3000);
});