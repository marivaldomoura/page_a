
// config scrollreveal ------------------>>>>>>>>

ScrollReveal({ reset: true });
ScrollReveal().reveal('.about', {rotate: { x:0, y:90,z:0, }, duration:3000});

ScrollReveal().reveal('.scal', {scale: 1/3, duration:3000});

ScrollReveal().reveal('.scal2', {distance:'200px', duration:3000});


// config menu slide ------------------>>>>>>>>

const mobileNav = document.querySelector('.mnav');
const closeBtn = document.querySelector('.mnav__close-btn');
const closeBtnIcn = document.querySelector('.mnav__close-btn-icon');

const navOpenedClass = 'left-0';
const navClosedClass = '-left-[300px]';
const arrowLeftClass = 'ri-arrow-left-s-line';
const arrowRightClass = 'ri-arrow-right-s-line';

closeBtn.addEventListener('click',() =>{
    if(mobileNav.classList.contains(navClosedClass)){
        mobileNav.classList.toggle(navOpenedClass);
        
        closeBtnIcn.classList.toggle(arrowLeftClass);
        closeBtnIcn.classList.toggle(arrowRightClass);
    }
});

// config swiper ------------------>>>>>>>>

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween:1,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    centeredSlides: false,
    autoplay: {
      delay: 2500,
      disableOnInteraction:false,
    }
  });
  





