slider();

function slider() {
  if (document.querySelector('.slider').offsetWidth > 991.98) {
    sliderDesctop();
  } else {
    sliderMobile();
  }
  
  function sliderDesctop() {
    const next = document.querySelector('.nav-slider__next');
    const prev = document.querySelector('.nav-slider__prev');
  
    let counter = document.querySelector('.nav-slider__counter');
  
    let slideIndex = 1;
  
    next.addEventListener('click', nextSlide);
    prev.addEventListener('click', prevSlide);
  
    function autoNextSlide() {
      return setInterval(nextSlide, 10000);
    }
    autoNextSlide();
  
    function updateCounter() {
      counter.innerText = `${slideIndex}/2`;
    }
  
    function nextSlide() {
      slideIndex += 1;
      showSlides(slideIndex);
    }
  
    function prevSlide() {
      slideIndex -= 1;
      showSlides(slideIndex);
    }
  
    showSlides(slideIndex);
  
    function showSlides(n) {
      let slides = document.querySelectorAll('.slider__item');
      let dots = document.querySelectorAll('.dots-slider__dot');
  
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
  
      for (let slide of slides) {
        slide.classList.add('hide');
      }
      
      slides[slideIndex - 1].classList.remove('hide');
  
      for (let dot of dots) {
        dot.classList.remove('active');
      }
  
      dots[slideIndex - 1].classList.add('active');
  
      updateCounter();
    }
  }

  function sliderMobile() {
    let slides = document.querySelectorAll('.slider__item');
    let slider = [];

    for (let i = 0; i < slides.length; i++) {
      
    }
  }
}






