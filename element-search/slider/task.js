let slideIndex = 1;
const rightBut = document.querySelector('.slider__arrow_next'),
      leftBut = document.querySelector('.slider__arrow_prev');

rightBut.addEventListener('click', () => {
  plusSlides(1);
});

leftBut.addEventListener('click', () => {
  plusSlides(-1);
});

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  const slides = document.querySelectorAll(".slider__item");
  if (n > slides.length) slideIndex = 1; 
  if (n < 1) slideIndex = slides.length;
  for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove('slider__item_active'); 
  }
  slides[slideIndex-1].classList.add('slider__item_active'); 
}

