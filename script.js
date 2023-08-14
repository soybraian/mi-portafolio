
let menuBtn = document.querySelector('#menu-btn');
let menuBar = document.querySelector('.menu-bar');

menuBtn.onclick = () => {
    menuBtn.classList.toggle('bx-x');
    menuBar.classList.toggle('active');
}

// REMOVE

window.onscroll = () => {
    menuBtn.classList.remove('bx-x')
    menuBar.classList.remove('active')
}

// SCROLLREVEAL

ScrollReveal({
    reset: true,
    distance: '100px',
    duration: 2000,
    delay: 100 
});

ScrollReveal().reveal('.home-bio h1, .about-resume', { origin: 'left'});
ScrollReveal().reveal('.home-bio p', { origin: 'right'});
ScrollReveal().reveal('.home-bio, heading', { origin: 'top'});
ScrollReveal().reveal('.profile-pic, .about-items, .skills-items, .projects-items, .form', { origin: 'bottom'});

// TYPING ANIMATION

const animText = new Typed ('.animated-text', {
    strings: ['Front-End Developer', 'Web Designer'],
    backSpeed: 70,
    typeSpeed: 70,
    backDelay: 300,
    loop: true
});