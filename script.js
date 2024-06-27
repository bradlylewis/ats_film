// Changes the nav links color when over a brighter background
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const header = document.querySelector('header');
  const viewportHeight = window.innerHeight;

  if (scrollPosition >= 2 * viewportHeight && scrollPosition <= 3 * viewportHeight) {
      header.classList.add('scrolled');
  } else {
      header.classList.remove('scrolled');
  }
});

// Glids.js Carousel
const config = {
  type: 'carousel',
  autoplay: 5000,
  hoverpause: true,
  peek: 200,
  
}
document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', config).mount()
});
