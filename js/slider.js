slider();

function slider(){
  if (document.querySelector('.slider').offsetWidth > 991.98) {
    sliderDesctop();
  } else {
    sliderMobile();
  }
  
  function sliderDesctop(){
    const next = document.querySelector('.nav-slider__next');
    const prev = document.querySelector('.nav-slider__prev');
  
    let counter = document.querySelector('.nav-slider__counter');
  
    let slideIndex = 1;
  
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
  
    function autoNextSlide(){
      return setInterval(nextSlide, 10000);
    }
    autoNextSlide();
  
    function updateCounter(){
      counter.innerText = `${slideIndex}/2`;
    }
  
    function nextSlide(){
      slideIndex += 1;
      showSlides(slideIndex);
    }
  
    function prevSlide(){
      slideIndex -= 1;
      showSlides(slideIndex);
    }
  
    showSlides(slideIndex);
  
    function showSlides(n){
      let slides = document.querySelectorAll('.slider__item');
      let dots = document.querySelectorAll('.dots-slider__dot');
  
      if (n > slides.length){
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      for (let slide of slides){
        slide.classList.add('hide');
      }
      
      slides[slideIndex - 1].classList.remove('hide');
  
      for (let dot of dots){
        dot.classList.remove('active');
      }
  
      dots[slideIndex - 1].classList.add('active');
  
      updateCounter();
    }
  }

  function sliderMobile(){
    let viewport = document.querySelector('.slider__body').offsetWidth;
    let slides = document.querySelectorAll('.slider__item');
    const sliderBody = document.querySelector('.slider__body');
    let slider = [];

    for (let i = 0; i < slides.length; i++) {
      slider[i] = slides[i];
      slides[i].remove();
      console.log(slider);
    }

    let step = 0;
    let offset = 0;

    function drawLeft(){
      let div = slider[step];
      div.style.width = viewport + 'px';
      div.style.left = offset * viewport + 'px';
      sliderBody.appendChild(div);

      if (step + 1 == slider.length) {
        step = 0;
      }
      else {
        step++;
      }

      offset = 1;
    }

    function left(){
      // document.onclick = null;
      let slides2 = document.querySelectorAll('.slider__item');
      let offset2 = 0;
      for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * viewport - viewport + 'px';
        offset2++;
      }
      setTimeout(function() {
        slides2[0].remove();
        drawLeft();
        // document.onclick = left;
      }, 1000)
    }

    // function drawRight(){
    //   let div = slider[step];
    //   div.style.width = viewport + 'px';
    //   div.style.right = offset * viewport + 'px';
    //   sliderBody.appendChild(div);

    //   if (step + 1 == slider.length) {
    //     step = 0;
    //   }
    //   else {
    //     step++;
    //   }

    //   offset = 1;
    // }

    // function right(){
    //   // document.onclick = null;
    //   let slides2 = document.querySelectorAll('.slider__item');
    //   let offset2 = 0;
    //   for (let i = 0; i < slides2.length; i++) {
    //     slides2[i].style.right = offset2 * viewport - viewport + 'px';
    //     offset2++;
    //   }
    //   setTimeout(function() {
    //     slides2[0].remove();
    //     drawRight();
    //     // document.onclick = left;
    //   }, 1000)
    // }

    drawLeft();drawLeft();

    // Swipe
    sliderBody.addEventListener('touchstart', handleTouchStart, false);
    sliderBody.addEventListener('touchmove', handleTouchMove, false);

    let y1 = null;

    function handleTouchStart(event) {
      const firstTouch = event.touches[0];
      y1 = firstTouch.clientY;
      console.log(y1)
    }

    function handleTouchMove(event) {
      if (!y1) {
        return false;
      }
      let y2 = event.touches[0].clientY;

      let yDiff = y2 - y1;

      if (yDiff > 0) {
        left();
      } else {
        false;
      }
      // else right();

      y1 = null;
      // y2 = null;

      console.log(y2);
    }
  }
}






