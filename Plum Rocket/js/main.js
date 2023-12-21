var swiper = new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints:{
        1200:{
            spaceBetween: 30,
            slidesPerView: 2,
        },
        1025:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
        0:{
            spaceBetween: 30,
            slidesPerView: 1,
        },
    },
});


  const faqElements = document.querySelectorAll('.faq');

faqElements.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('active');
    });
});