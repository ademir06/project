const swiper = new Swiper(".mySwiper", {
    navigation: {
        nextEl: ".next",
        prevEl: ".prev",
    },

});
window.addEventListener("DOMContentLoaded", function (){
    window.addEventListener("scroll", function (){
        const header = document.querySelector("header");
        header.classList.toggle("sticky", window.scrollY > 0);
    });
    const scrollToopBtn = document.querySelector('.scrollToop-btn')
    window.addEventListener('scroll', () => {
        scrollToopBtn.classList.toggle('active', window.scrollY > 500)
    })

    scrollToopBtn.addEventListener('click', () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    })
});