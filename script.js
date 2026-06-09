const slides = document.querySelector('.slides');
const dots = document.querySelectorAll('.dot');
let current = 0;

function showSlide(index) {
  current = index;
  slides.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(d => d.classList.remove('active'));
  dots[index].classList.add('active');
}

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => showSlide(index));
});

showSlide(0); // активируем первый слайд и точку