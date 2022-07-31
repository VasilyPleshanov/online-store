// Обраатываем событие клик на стрелочке влево
document.querySelector('.nav-slider__prev').addEventListener('click', previousSlide);
// Обраатываем событие клик на стрелочке вправо
document.querySelector('.nav-slider__next').addEventListener('click', nextSlide);

// Сохраняем в переменную элемент, где будем отображать номер слайда
let counter = document.querySelector('.nav-slider__counter')

// Через каждые 10 секунд пролистываем слайдер вперед
setInterval(previousSlide, 10000)

// Меняет номер слайда
function updateCounter() {
    counter.innerText = `${slideIndex}/2`
}

/* Устанавливаем стартовый индекс слайда по умолчанию: */
let slideIndex = 1;
/* Вызываем функцию, которая реализована ниже: */
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд: */
function nextSlide() {
    showSlides(slideIndex += 1);
    updateCounter()
}

/* Уменьшаем индекс на 1 — показываем предыдущий слайд: */
function previousSlide() {
    showSlides(slideIndex -= 1);
    updateCounter()
}

/* Устанавливаем текущий слайд: */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания: */
function showSlides(n) {
    /* Обращаемся к элементам с названием класса "item", то есть к картинкам: */
    let slides = document.getElementsByClassName("slider__item");

    /* Проверяем количество слайдов: */
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for: */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    /* Делаем элемент блочным: */
    slides[slideIndex - 1].style.display = "block";
}