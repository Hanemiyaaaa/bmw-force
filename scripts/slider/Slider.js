let currentSlide = 0;
let isAnimating = false;

function moveSlide(direction) {
  if (isAnimating) return;

  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  // Обновляем индекс слайда с учетом зацикливания
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;

  // Включаем флаг анимации
  isAnimating = true;

  // Убираем класс active у всех слайдов
  slides.forEach(slide => slide.classList.remove('active'));

  // Добавляем класс active для текущего слайда
  slides[currentSlide].classList.add('active');
}

// Сбрасываем флаг анимации после завершения анимации
document.querySelector('.slider').addEventListener('transitionend', () => {
  isAnimating = false;
});

// Устанавливаем первый слайд активным при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const slides = document.querySelectorAll('.slide');
  slides[currentSlide].classList.add('active');
});

// Обработчики событий для кнопок
document.querySelector('.prev').addEventListener('click', () => {
  moveSlide(-1);  // Перемещение на предыдущий слайд
});

document.querySelector('.next').addEventListener('click', () => {
  moveSlide(1);  // Перемещение на следующий слайд
});
