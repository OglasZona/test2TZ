// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      document.querySelector(link.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
    });
  });
  
  // Sticky header effects
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    header.style.boxShadow = window.scrollY > 20 ? "0 2px 10px rgba(0,0,0,0.3)" : "none";
  });
  
  // Dynamic year
  document.getElementById("year").textContent = new Date().getFullYear();
  
  // Google Map
  window.initMap = function() {
    const center = { lat: 44.7866, lng: 20.4489 }; // Beograd
    new google.maps.Map(document.getElementById("map"), {
      zoom: 12,
      center,
      styles: [ { stylers: [{ saturation: -50 }, { lightness: 20 }] } ]
    });
  };
  