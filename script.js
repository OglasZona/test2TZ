document.addEventListener('DOMContentLoaded', function() {
    console.log('Stranica je učitana!');

    // "Fade-in" animacija za hero tekst
    const heroText = document.querySelector('.hero-text');
    if (heroText) {
        heroText.classList.add('fade-in');
    }

    // Funkcija za ažuriranje godine u footeru
    function updateYear() {
        const yearSpan = document.getElementById('year');
        if (yearSpan) {
            yearSpan.textContent = new Date().getFullYear();
        }
    }

    updateYear();

    // Interakcija sa navigacionim menijem (hamburger meni)
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            const expanded = menuToggle.getAttribute('aria-expanded') === 'true' || false;
            menuToggle.setAttribute('aria-expanded', !expanded);
            navLinks.classList.toggle('active');
        });
    }

    // Funkcija za animiranje elemenata prilikom skrolovanja
    function revealOnScroll() {
        const elements = document.querySelectorAll('.fade-in');

        for (let i = 0; i < elements.length; i++) {
            let windowHeight = window.innerHeight;
            let elementTop = elements[i].getBoundingClientRect().top;
            let elementVisible = 150;

            if (elementTop < windowHeight - elementVisible) {
                elements[i].classList.add('active');
            } else {
                elements[i].classList.remove('active');
            }
        }
    }

    window.addEventListener('scroll', revealOnScroll);
});
