range();

function range() {
  const sliderOne = document.getElementById("range-1");
  const sliderTwo = document.getElementById("range-2");

  const displayValOne = document.getElementById("input-1");
  const displayValTwo = document.getElementById("input-2");

  const minGap = 1700;

  const sliderTrack = document.querySelector(".range__progress");
  const sliderMaxValue = document.getElementById("range-1").max;

  window.onload = function() {
    slideOne();
    slideTwo();
  }

  function slideOne() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderOne.value = parseInt(sliderTwo.value) - minGap;
    }
    displayValOne.value = sliderOne.value;
    fillColor();
  }

  function slideTwo() {
    if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
      sliderTwo.value = parseInt(sliderOne.value) + minGap;
    }
    displayValTwo.value = sliderTwo.value;
    fillColor();
  }

  sliderOne.addEventListener('input', () => {
    slideOne();
  });

  sliderTwo.addEventListener('input', () => {
    slideTwo();
  });

  displayValOne.addEventListener('input', () => {
    parseInt(displayValOne.value) > parseInt(displayValTwo.value) ? displayValOne.value = parseInt(displayValTwo.value) - minGap : sliderOne.value = displayValOne.value;
    displayValOne.value == '' ? sliderOne.value = 3000 : sliderOne.value = displayValOne.value;
    fillColor();
  });

  displayValTwo.addEventListener('input', () => {
    displayValTwo.value == '' ? sliderTwo.value = 20000 : sliderTwo.value = displayValTwo.value;
    fillColor();
  });

  function fillColor() {
    let percent1 = ((sliderOne.value - 1500) / sliderMaxValue) * 100;
    let percent2 = ((sliderTwo.value - 1500) / sliderMaxValue) * 100;
    sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}%, #ac937d ${percent1}%,#ac937d ${percent2}%, #dadae5 ${percent2}%)`;
  }
}