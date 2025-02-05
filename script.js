const navLink = document.querySelectorAll('.nav-menu .nav-link');
const menuOpenButton = document.querySelector('#menu-open-button');
const menuCloseButton = document.querySelector('#menu-close-button');

menuOpenButton.addEventListener('click', () => {
 document.body.classList.toggle('show-mobile-menu');
  
});

//close menu button on click
menuCloseButton.addEventListener('click', () => menuOpenButton.click
());

//close menu button when the nav link is clicked
navLink.forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.remove('show-mobile-menu');
    const targetId = link.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({ behavior:'smooth' });
  });
 });


//Initialize Swiper
const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
   
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
     
    },
    768: {
      slidesPerView: 2
     
    },
    1024: {
      slidesPerView: 3
     
    }
  }

 
});