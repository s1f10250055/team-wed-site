// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    let autoSlideInterval;

    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1;
        } else if (index >= totalItems) {
            currentIndex = 0;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * (100 / totalItems);
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5秒ごとに切り替え
    }

    startAutoSlide();
});