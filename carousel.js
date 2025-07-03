// carousel.js

document.addEventListener('DOMContentLoaded', () => {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const totalItems = carouselItems.length;
    let autoSlideInterval;

    // 指定したインデックスのスライドへ移動
    function goToSlide(index) {
        if (index < 0) {
            currentIndex = totalItems - 1; // 最後の画像へループ
        } else if (index >= totalItems) {
            currentIndex = 0; // 最初の画像へループ
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * (100 / totalItems);
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    // 次のスライドへ
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // 自動スライドを開始
    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // 5秒ごとに切り替え（必要に応じて調整）
    }

    // ページロード時に自動スライドを開始
    startAutoSlide();
});