
const slides = document.querySelectorAll('.slide');
const nextButtons = document.querySelectorAll('.next-btn');
const yesButton = document.getElementById('yesButton');
const video = document.getElementById('proposalVideo');
let currentSlide = 0;

nextButtons.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    slides[currentSlide].classList.remove('active');
    currentSlide++;
    slides[currentSlide].classList.add('active');
  });
});

yesButton.addEventListener('click', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  slides[currentSlide].classList.add('active');
  video.play();
});

video.addEventListener('ended', () => {
  slides[currentSlide].classList.remove('active');
  currentSlide++;
  slides[currentSlide].classList.add('active');
});
