if (window.screen.height >= 1440) {
  document.addEventListener('scroll', function() {
  const header = document.querySelector('header');
  const scrollPosition = window.scrollY;

  if (scrollPosition > 2522 && scrollPosition < 3792) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})} else if (window.screen.height >= 768 && window.screen.height < 1440) {
  document.addEventListener('scroll', function() {
    console.log('ELSE', window.screen.height)
    console.log('ELSE', window.scrollY)
    const header = document.querySelector('header');
    const scrollPosition = window.scrollY;
  
    if (scrollPosition > 1798 && scrollPosition < 2709) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
}

let currentIndex = 0;
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
const carousel = document.querySelector('.carousel');

const images = document.querySelectorAll('.carousel-image');
const dots = document.querySelectorAll('.dot');

function setPositionByIndex() {
    currentTranslate = -currentIndex * carousel.clientWidth;
    prevTranslate = currentTranslate;
    setSliderPosition();
    updateDots();
}

function updateDots() {
    dots.forEach((dot, idx) => {
        if (idx === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function touchStart(index) {
    return function(event) {
        currentIndex = index;
        startPos = getPositionX(event);
        isDragging = true;
        animationID = requestAnimationFrame(animation);
        carousel.classList.add('grabbing');
    }
}

function touchEnd() {
    isDragging = false;
    cancelAnimationFrame(animationID);
    const movedBy = currentTranslate - prevTranslate;

    if (movedBy < -50 && currentIndex < images.length - 1) {
        currentIndex += 1;
    }
    if (movedBy > 50 && currentIndex > 0) {
        currentIndex -= 1;
    }

    setPositionByIndex();
    carousel.classList.remove('grabbing');
}

function touchMove(event) {
    if (isDragging) {
        const currentPosition = getPositionX(event);
        currentTranslate = prevTranslate + currentPosition - startPos;
    }
}

function getPositionX(event) {
    return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
}

function animation() {
    setSliderPosition();
    if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
    carousel.style.transform = `translateX(${currentTranslate}px)`;
}

// Event listeners
images.forEach((image, index) => {
    const imageElement = image;
    imageElement.addEventListener('dragstart', (e) => e.preventDefault());

    // Touch events
    imageElement.addEventListener('touchstart', touchStart(index));
    imageElement.addEventListener('touchend', touchEnd);
    imageElement.addEventListener('touchmove', touchMove);

    // Mouse events
    imageElement.addEventListener('mousedown', touchStart(index));
    imageElement.addEventListener('mouseup', touchEnd);
    imageElement.addEventListener('mouseleave', touchEnd);
    imageElement.addEventListener('mousemove', touchMove);
});

// Optional: Auto-rotate images every 3 seconds
// setInterval(() => {
//     if (!isDragging) {
//         currentIndex = (currentIndex + 1) % images.length;
//         setPositionByIndex();
//     }
// }, 6000);

document.querySelectorAll('.dot').forEach((dot, idx) => {
    dot.addEventListener('click', () => {
        currentIndex = idx;
        setPositionByIndex();
    });
});

setPositionByIndex();
