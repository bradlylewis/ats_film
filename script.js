// Changes the nav links color when over a brighter background
document.addEventListener('scroll', function() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  const header = document.querySelector('header');
  const viewportHeight = window.innerHeight;

  if (scrollPosition >= 2 * viewportHeight - 20 && scrollPosition <= 3 * viewportHeight - 20) {
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
  // peek: 100,
  
}
document.addEventListener('DOMContentLoaded', function() {
    new Glide('.glide', config).mount()
});


// Get the modal
var modal = document.getElementById("imageModal");

// Get the modal image
var modalImg = document.getElementById("modalImage");

// Get all images in the carousel
var images = document.querySelectorAll(".glide__slide img");

// Loop through the images and add the click event
images.forEach(function(image) {
  image.addEventListener("click", function() {
    modal.classList.add("show");
    modalImg.src = this.src;
  });
});

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.classList.remove("show");
}

// Close the modal when clicking outside of the image
window.onclick = function(event) {
  if (event.target == modal) {
    modal.classList.remove("show");
  }
}