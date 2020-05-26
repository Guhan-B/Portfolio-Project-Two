$('.burger').click(function() {
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
});

// GSAP Javascript

window.onload = function() {
    TweenMax.to('#dev-img', 2, { width: '38vw', opacity: 1, ease: Circ.easeOut });
    TweenMax.to('.home', 2, { opacity: 1, ease: Power1.easeOut });
    TweenMax.to(".footer-a", 0.75, { opacity: 1, margin: "0 2rem", delay: 2, ease: Circ.easeOut });
    TweenMax.to(".line", 0.75, { scaleY: 1, delay: 2, ease: Circ.easeOut });
}