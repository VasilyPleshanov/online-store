let viewport = document.querySelector('.small-slider__body').offsetWidth / 3;
// let viewport = 500;
let btnNext = document.querySelector('.small-slider__btn-next');
let slides = document.querySelectorAll('.small-slider__item');
// console.log(slides);
let sliders = [];
for (let i = 0; i < slides.length; i++) {
  sliders[i] = slides[i].querySelector('img');
  slides[i].remove();
}
// console.log(sliders);

let step = 0;
let offset = 0;

function draw() {
  let slide = document.createElement('div');
  slide.classList.add('small-slider__item');
  slide.appendChild(sliders[step]);
  slide.style.left = offset * viewport + 'px';
  document.querySelector('.small-slider__body').appendChild(slide);
  
  if (step + 1 == sliders.length) {
    step = 0;
  }
  else {
    step++;
  }

  offset = 1;

}

function left() {
  btnNext.removeEventListener('click', left);
  let slides2 = document.querySelectorAll('.small-slider__item');
  let offset2 = 0;
  for (let i = 0; i < slides2.length; i++) {
    slides2[i].style.left = offset2 * viewport - viewport + 'px';
    offset2++;
  }
  setTimeout(function() {
    slides2[0].remove();
    draw();
    btnNext.addEventListener('click', left);
  }, 500)
  // slides2[0].remove();
  //   draw();
  //   btnNext.addEventListener('click', left);
}

draw();draw();

btnNext.addEventListener('click', left);
