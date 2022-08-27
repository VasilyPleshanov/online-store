slider();

function slider() {
  const next = document.querySelector('.nav-slider__next');
  const prev = document.querySelector('.nav-slider__prev');
  const slides = document.querySelectorAll('.slider__item');
  const dots = document.querySelectorAll('.dots-slider__dot');
  const counter = document.querySelector('.nav-slider__counter');
  const sliderBody = document.querySelector('.slider__body');
  
  let index = 0;

  const activeSlide = n => {
    for (slide of slides) {
      slide.classList.remove('active');
    }
    slides[n].classList.add('active');
  }

  const activeDot = n => {
    for (dot of dots) {
      dot.classList.remove('active');
    }
    dots[n].classList.add('active');
  }

  const updateCounter = n => {
    let count = 1 + n;
    counter.innerText = `${count}/2`;
  }

  const prepareCurrentSlide = ind => {
    activeSlide(ind);
    activeDot(ind);
    updateCounter(ind);
  }

  prepareCurrentSlide(index);

  const nextSlide = () => {
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  const prevSlide = () => {
    if (index == 0) {
      index = slides.length - 1;
      prepareCurrentSlide(index);
    } else {
      index--;
      prepareCurrentSlide(index);
    }
  }

  dots.forEach((item, indexDot) => {
    item.addEventListener('click', () => {
      index = indexDot;
      prepareCurrentSlide(index);
    });
  });
  
  next.addEventListener('click', nextSlide);
  prev.addEventListener('click', prevSlide);

  setInterval(nextSlide, 5000);

  // Swipe
  sliderBody.addEventListener('touchstart', handleTouchStart, false);
  sliderBody.addEventListener('touchmove', handleTouchMove, false);

  let x1 = null;

  function handleTouchStart(event) {
    const firstTouch = event.touches[0];
    x1 = firstTouch.clientX;
  }

  function handleTouchMove(event) {
    if (!x1) {
      return false;
    }
    let x2 = event.touches[0].clientX;

    let xDiff = x2 - x1;

    if (xDiff > 0) {
      prevSlide();
    } else {
      nextSlide();
    }

    x1 = null;
  }
}