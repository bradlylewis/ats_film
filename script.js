// document.addEventListener('DOMContentLoaded', function () {
//   var lastScrollTop = 0; // Variable to store the last scroll position
//   var header = document.querySelector('.fixed-header'); // Select the header

//   window.addEventListener('scroll', function () {
//     var scrollTop = window.scrollY || document.documentElement.scrollTop;
    
//     if (scrollTop > lastScrollTop) {
//       // If the current scroll position is greater than the last one, the user is scrolling down
//       header.style.top = '-60px'; // Adjust this value based on your header's height
//     } else {
//       // If scrolling up
//       header.style.top = '0';
//     }
//     lastScrollTop = scrollTop; // Update the last scroll position to the current position
//   });
// });