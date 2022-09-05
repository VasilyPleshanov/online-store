spoiler();

function spoiler() {
  const titles = document.querySelectorAll('.section-filter__title');
  
  for (let i = 0; i < titles.length; i++) {
    titles[i].addEventListener('click', () => {
      titles[i].classList.toggle('_active');
    })
  }
}