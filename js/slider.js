function slider() {
  const next = document.querySelector('.nav-slider__next');
  const prev = document.querySelector('.nav-slider__prev');
  const slides = document.querySelectorAll('.slider__item');
  const dots = document.querySelectorAll('.dots-slider__dot');
  const counter = document.querySelector('.nav-slider__counter');
  const sliderBody = document.querySelector('.slider__body');
  
  let index = 0;
  let timer;

  let count;

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
    interval();
    if (index == slides.length - 1) {
      index = 0;
      prepareCurrentSlide(index);
    } else {
      index++;
      prepareCurrentSlide(index);
    }
  }

  const prevSlide = () => {
    interval();
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

  // Swipe
  sliderBody.addEventListener('touchstart', handleTouchStart, false);
  sliderBody.addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;

  function getTouches(evt) {
    return evt.touches
  };

  function handleTouchStart(evt) {
    interval();
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
  };

  function handleTouchMove(evt) {
    interval();
    if ( ! xDown ) {
      return;
    }

    let xUp = evt.touches[0].clientX;

    let xDiff = xDown - xUp;

    (xDiff > 0) ? prevSlide() : nextSlide();

    xDown = null;
  }

// Auto next
  const interval = () => {
    
    if (count == 1) {
      timer = clearInterval(timer);
      count = 0;
      interval();
    } else {
      timer = setInterval(nextSlide, 7000);
      count = 1;
    }
  }

  interval();
}

slider();