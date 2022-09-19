cardsSlider();

function cardsSlider() {
  const items = document.querySelectorAll('.cards-slider__item');
  const sliderLine = document.querySelector('.cards-slider__list');
  let count = 0;
  let width;

  function init() {
    width = document.querySelector('.cards-slider__body').offsetWidth;
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

      if (width < 850) {
        item.style.width = width / 2 + 'px';
      } else if (width < 1384) {
        item.style.width = width / 3 + 'px';
      } else {
        item.style.width = width / 4 + 'px';
      }
      
      item.style.height = 'auto';
    })
    rollSlider();
  }

  window.addEventListener('resize', init);
  init();

  document.querySelector('.cards-slider__btn_prev').addEventListener('click', function() {
    count--;
    if (count < 0) {
      count = items.length - 4;
    }
    rollSlider();
  })

  document.querySelector('.cards-slider__btn_next').addEventListener('click', function() {
    count++;
    if (count >= items.length - 3) {
      count = 0;
    }
    rollSlider();
  })

  function rollSlider() {

    if (width < 850) {
      sliderLine.style.transform = 'translate(-'+ count * width / 2 +'px)';
    } else if (width < 1384) {
      sliderLine.style.transform = 'translate(-'+ count * width / 3 +'px)';
    } else {
      sliderLine.style.transform = 'translate(-'+ count * width / 4 +'px)';
    }
    
  }
}

