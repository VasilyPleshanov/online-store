function platformSlider() {
  const items = document.querySelectorAll('.platform-slider__item');
  const sliderLine = document.querySelector('.platform-slider__line');
  const sliderBody = document.querySelector('.platform-slider__body');
  const btnNext = document.querySelector('.platform-slider__btn_next');
  const btnPrev = document.querySelector('.platform-slider__btn_prev');

  let count = 0;
  let width;

  function init() {
    width = sliderBody.offsetWidth;

    console.log(sliderBody);

    if (width < 850) {
      sliderLine.style.width = width * items.length / 2 + 'px';
    } else {
      sliderLine.style.width = width * items.length / 3 + 'px';
    }
    
    items.forEach(item => {

      if (width < 850) {
        item.style.width = width / 2 + 'px';
      } else {
        item.style.width = width / 3 + 'px';
      }
      
      item.style.height = 'auto';
    })

    rollSlider();
  }

  window.addEventListener('resize', init);
  init();

  btnPrev.addEventListener('click', slidePrev);

  btnNext.addEventListener('click', slideNext);

  function slideNext() {
    count++;
    if (count >= items.length - 2) {
      count = 0;
    }
    rollSlider();
  }

  function slidePrev() {
    count--;
    if (count < 0) {
      count = items.length - 3;
    }
    rollSlider();
  }

  function rollSlider() {
    if (width < 850) {
      sliderLine.style.transform = 'translate(-'+ count * width / 2 +'px)';
    } else {
      sliderLine.style.transform = 'translate(-'+ count * width / 3 +'px)';
    }
  }

  console.log(sliderBody);

  // Swipe
  sliderBody.addEventListener('touchstart', handleTouchStart, false);
  sliderBody.addEventListener('touchmove', handleTouchMove, false);

  let xDown = null;

  function getTouches(evt) {
    return evt.touches
  };

  function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
  };

  function handleTouchMove(evt) {
    if ( ! xDown ) {
      return;
    }

    let xUp = evt.touches[0].clientX;

    let xDiff = xDown - xUp;

    (xDiff > 0) ? slideNext() : slidePrev();

    xDown = null;
  }
}

platformSlider();



