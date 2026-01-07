/* ================================
   Dynamic Year in Footer
================================ */
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

/* ================================
   Smooth Scroll Function
================================ */
function smoothScrollTo(targetSelector) {
  const targetElement = document.querySelector(targetSelector);
  if (!targetElement) return;

  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}

/* ================================
   Navbar Smooth Scroll + Active State
================================ */
document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", (event) => {
    const href = link.getAttribute("href");

    if (href && href.startsWith("#")) {
      event.preventDefault();
      smoothScrollTo(href);

      // Active link
      document.querySelectorAll(".nav-link").forEach((l) =>
        l.classList.remove("active")
      );
      link.classList.add("active");

      // Close mobile menu
      const navbar = document.querySelector(".navbar");
      const toggle = document.querySelector(".menu-toggle");
      if (navbar && toggle && navbar.classList.contains("open")) {
        navbar.classList.remove("open");
        toggle.classList.remove("open");
        toggle.setAttribute("aria-expanded", "false");
      }
    }
  });
});

/* ================================
   Hero Button Smooth Scroll
================================ */
document.querySelectorAll("[data-scroll]").forEach((btn) => {
  btn.addEventListener("click", (event) => {
    const target = btn.getAttribute("data-scroll");
    if (target) {
      event.preventDefault();
      smoothScrollTo(target);
    }
  });
});

/* ================================
   Mobile Menu Toggle
================================ */
const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navbar.classList.toggle("open");
    menuToggle.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", isOpen);
  });
}

/* ================================
   Active Menu on Scroll
================================ */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {
  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      currentSection = section.getAttribute("id");
    }
  });

  document.querySelectorAll(".nav-link").forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${currentSection}`) {
      link.classList.add("active");
    }
  });
});

/* ================================
   Contact Form → WhatsApp Lead
================================ */
/* ================================
   Contact Form → Formspree + WhatsApp
================================ */
/* ================================
   Contact Form → Formspree ONLY
================================ */
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", () => {
    formStatus.textContent = "Submitting your message…";
    formStatus.className = "form-status success";
  });
}


  /* ================================
   Hero Image Slider
================================ */
const sliderTrack = document.querySelector(".slider-track");
const dots = document.querySelectorAll(".slider-dots .dot");

let currentSlide = 0;
const totalSlides = dots.length;

function showSlide(index) {
  sliderTrack.style.transform = `translateX(-${index * 100}%)`;
  dots.forEach(dot => dot.classList.remove("active"));
  dots[index].classList.add("active");
  currentSlide = index;
}

// Auto slide
setInterval(() => {
  currentSlide = (currentSlide + 1) % totalSlides;
  showSlide(currentSlide);
}, 4000);

// Dot click
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showSlide(index);
  });
});
/* ================================
   Product → WhatsApp Details
================================ */
document.querySelectorAll(".product-whatsapp").forEach(button => {
  button.addEventListener("click", () => {
    const productName = button.getAttribute("data-product");

    const message =
  `Hello,%0A%0A` +
  `I’m interested in ${productName}.%0A` +
  `Please share specs, thickness, and pricing.%0A`;

    window.open(
      `https://wa.me/919746246998?text=${message}`,
      "_blank"
    );
  });
});


