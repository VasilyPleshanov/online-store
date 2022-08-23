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
    let slider = [];

    for (let i = 0; i < slides.length; i++) {
      slider[i] = slides[i];
      slides[i].remove();
      console.log(slider);
    }

    let step = 0;
    let offset = 0;

    function draw(){
      let div = slider[step];
      div.style.width = viewport + 'px';
      div.style.left = offset * viewport + 'px';
      document.querySelector('.slider__body').appendChild(div);

      if (step + 1 == slider.length) {
        step = 0;
      }
      else {
        step++;
      }

      offset = 1;
    }

    function left(){
      document.onclick = null;
      let slides2 = document.querySelectorAll('.slider__item');
      let offset2 = 0;
      for (let i = 0; i < slides2.length; i++) {
        slides2[i].style.left = offset2 * viewport - viewport + 'px';
        offset2++;
      }
      setTimeout(function() {
        slides2[0].remove();
        draw();
        document.onclick = left;
      }, 1000)
    }

    draw();draw();
    document.onclick = left;

  }
}






