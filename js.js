// script.js

const carousel = document.querySelector('.carrousel-contenu');
const slides = document.querySelectorAll('.slide');
const backward = document.querySelector('.backward');
const forward = document.querySelector('.forward');

let index = 0;

function showSlide() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Bouton suivant
forward.addEventListener('click', () => {
  index = (index + 1) % slides.length;
  showSlide();
});

// Bouton précédent
backward.addEventListener('click', () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
});

// Défilement automatique
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 5000);


