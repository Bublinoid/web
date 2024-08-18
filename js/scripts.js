let currentIndex = 0;

function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.style.display = menu.style.display === 'flex' ? 'none' : 'flex';
    menu.style.flexDirection = 'column'; // Убедимся, что элементы выстраиваются в колонку
}

function showNextSlide() {
    const slides = document.querySelector('.slides');
    currentIndex = (currentIndex + 1) % 3;
    slides.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

setInterval(showNextSlide, 10000); // Смена слайдов каждые 10 секунд
