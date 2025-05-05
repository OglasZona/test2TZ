// Scroll reveal efekt za sve elemente sa klasom .reveal
const revealElements = document.querySelectorAll('.reveal');

function revealOnScroll() {
  for (let i = 0; i < revealElements.length; i++) {
    const windowHeight = window.innerHeight;
    const revealTop = revealElements[i].getBoundingClientRect().top;
    const revealPoint = 100;

    if (revealTop < windowHeight - revealPoint) {
      revealElements[i].classList.add('active');
    } else {
      revealElements[i].classList.remove('active');
    }
  }
}

window.addEventListener('scroll', revealOnScroll);

// Odmah aktiviraj revealOnScroll da učita početne animacije
revealOnScroll();

// Hamburger meni toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Smooth scroll za linkove
const internalLinks = document.querySelectorAll('a[href^="#"]');

for (let link of internalLinks) {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetID = link.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 70,
        behavior: 'smooth'
      });
    }
    navLinks.classList.remove('active');
  });
}

// Lazy loading slika
const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.getAttribute('data-src');
      img.removeAttribute('data-src');
      observer.unobserve(img);
    }
  });
});

lazyImages.forEach(img => {
  imageObserver.observe(img);
});
