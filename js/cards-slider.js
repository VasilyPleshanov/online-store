cardsSlider();

function cardsSlider() {
  const items = document.querySelectorAll('.cards-slider__item');
  const sliderLine = document.querySelector('.cards-slider__list');
  const sliderBody = document.querySelector('.cards-slider__body');
  const btnNext = document.querySelector('.cards-slider__btn_next');
  const btnPrev = document.querySelector('.cards-slider__btn_prev');
  const dots = document.querySelector('.dots-cards-slider');

  let count = 0;
  let width;

  function init() {
    width = sliderBody.offsetWidth;

    if (width < 440) {
      sliderLine.style.width = width * items.length / 1 + 'px';
    } else if (width < 850) {
      sliderLine.style.width = width * items.length / 2 + 'px';
    } else if (width < 1384) {
      sliderLine.style.width = width * items.length / 3 + 'px';
    } else {
      sliderLine.style.width = width * items.length / 4 + 'px';
    }
    
    items.forEach(item => {

      if (width < 440) {
        item.style.width = width / 1 + 'px';
      } else if (width < 850) {
        item.style.width = width / 2 + 'px';
      } else if (width < 1384) {
        item.style.width = width / 3 + 'px';
      } else {
        item.style.width = width / 4 + 'px';
      }
      
      item.style.height = 'auto';
    })

    initDots();
    activeDot(count);
    rollSlider();
  }

  function initDots() {
    let dotsAll = document.querySelectorAll('.dots-cards-slider__dot');
    for( let i = 0; i < dotsAll.length; i++ ){
      dotsAll[i].outerHTML = "";
    }

    const dotNode = '<span class="dots-cards-slider__dot"></span>';

    if (width < 440) {
      for (let i = 0; i <= 7; i++) {
        dots.innerHTML += dotNode;
      }
    } else if (width < 850) {
      for (let i = 0; i <= 6; i++) {
        dots.innerHTML += dotNode;
      }
    } else {
      for (let i = 0; i <= 5; i++) {
        dots.innerHTML += dotNode;
      }
    }
  }

  window.addEventListener('resize', init);
  init();

  btnPrev.addEventListener('click', slidePrev);

  btnNext.addEventListener('click', slideNext);

  function slidePrev() {
    count--;

    if (width < 440) {
      if (count < 0) {
        count = items.length - 1;
      } else {
        rollSlider();
      }
    } else if (width < 850) {
      if (count < 0) {
        count = items.length - 2;
      }
    } else if (width < 1384) {
      if (count < 0) {
        count = items.length - 3;
      }
    } else {
      if (count < 0) {
        count = items.length - 4;
      }
    }

    activeDot(count);
    rollSlider();
  }

  function slideNext() {
    count++;

    if (width < 440) {
      if (count >= items.length) {
        count = 0;
      }
    } else if (width < 850) {
      if (count >= items.length - 1) {
        count = 0;
      }
    } else if (width < 1384) {
      if (count >= items.length - 2) {
        count = 0;
      }
    } else {
      if (count >= items.length - 3) {
        count = 0;
      }
    }

    activeDot(count);
    rollSlider();
  }

  function rollSlider() {

    if (width < 440) {
      sliderLine.style.transform = 'translate(-'+ count * width / 1 +'px)';
    } else if (width < 850) {
      sliderLine.style.transform = 'translate(-'+ count * width / 2 +'px)';
    } else if (width < 1384) {
      sliderLine.style.transform = 'translate(-'+ count * width / 3 +'px)';
    } else {
      sliderLine.style.transform = 'translate(-'+ count * width / 4 +'px)';
    }
    
  }

  function activeDot (n) {
    let dotsArray = document.querySelectorAll('.dots-cards-slider__dot');
    for (dot of dotsArray) {
      dot.classList.remove('_active');
    }
    dotsArray[n].classList.add('_active');
  }

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

