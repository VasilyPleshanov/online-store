function smallSlider() {
  const items = document.querySelectorAll('.small-slider__item');
  const sliderLine = document.querySelector('.small-slider__line');
  let count = 0;
  let width;

  function init() {
    width = document.querySelector('.small-slider__body').offsetWidth;
    sliderLine.style.width = width * items.length / 3 + 'px';
    items.forEach(item => {
      item.style.width = width / 3 + 'px';
      item.style.height = 'auto';
    })
    rollSlider();
  }

  window.addEventListener('resize', init);
  init();

  document.querySelector('.small-slider__btn_prev').addEventListener('click', function() {
    count--;
    if (count < 0) {
      count = items.length - 3;
    }
    rollSlider();
  })

  document.querySelector('.small-slider__btn_next').addEventListener('click', function() {
    count++;
    if (count >= items.length - 2) {
      count = 0;
    }
    rollSlider();
  })

  function rollSlider() {
    sliderLine.style.transform = 'translate(-'+ count * width / 3 +'px)';
  }
}

smallSlider();


