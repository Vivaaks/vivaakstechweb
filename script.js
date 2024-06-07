// Get all dropdown elements
const dropdowns = document.querySelectorAll('.dropdown');

// Add event listener to each dropdown
dropdowns.forEach(dropdown => {
  dropdown.addEventListener('mouseover', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'block';
  });

  dropdown.addEventListener('mouseout', () => {
    const dropdownMenu = dropdown.querySelector('.dropdown-menu');
    dropdownMenu.style.display = 'none';
  });
});



const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  slides[currentSlide].style.display = 'none';
  currentSlide = (n + slides.length) % slides.length;
  slides[currentSlide].style.display = 'block';
}

function nextSlide() {
  showSlide(currentSlide + 1);
}

function prevSlide() {
  showSlide(currentSlide - 1);
}

const nextBtn = document.querySelectorAll('.next-btn');
const prevBtn = document.querySelector('.prev-btn');

nextBtn.forEach(btn => {
  btn.addEventListener('click', nextSlide);
});
prevBtn.addEventListener('click', prevSlide);

showSlide(currentSlide);