// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');
  const mobileSocial = document.querySelector('.mobile-social');
  const navLinks = document.querySelectorAll('.mobile-nav a');

  if (hamburger) {
    hamburger.addEventListener('click', function() {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      mobileSocial.classList.toggle('active');
    });
  }

  // Close mobile menu when a link is clicked
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      hamburger.classList.remove('active');
      mobileNav.classList.remove('active');
      mobileSocial.classList.remove('active');
    });
  });

  // Header scroll behavior
  const header = document.querySelector('header');
  const isHomePage = document.body.id === 'home-page';

  function updateHeader() {
    if (isHomePage) {
      if (window.scrollY > 80) {
        header.classList.remove('hero-transparent');
        header.classList.add('scrolled');
      } else {
        header.classList.add('hero-transparent');
        header.classList.remove('scrolled');
      }
    } else {
      if (window.scrollY > 10) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  // Run on load
  updateHeader();
  // Run on scroll
  window.addEventListener('scroll', updateHeader);

  // Active nav link highlighting based on current page
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navItems = document.querySelectorAll('.nav-links a, .mobile-nav a');

  navItems.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  // Fade-in-on-scroll using IntersectionObserver
  const fadeElements = document.querySelectorAll('.fade-in');

  if (fadeElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Calculate delay based on position in container
          const delay = Array.from(entry.target.parentNode.children).indexOf(entry.target) * 0.1;
          entry.target.style.animationDelay = delay + 's';
          entry.target.style.opacity = '1';
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.1
    });

    fadeElements.forEach(el => {
      observer.observe(el);
    });
  }

  // Scroll down arrow animation
  const scrollArrow = document.querySelector('.scroll-arrow');
  if (scrollArrow) {
    scrollArrow.addEventListener('click', function() {
      const nextSection = document.querySelector('.mass-times');
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }
});

// Utility function for smooth scroll to element
function smoothScroll(target) {
  const element = document.querySelector(target);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Form submission handler (no backend, just visual feedback)
function handleFormSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const button = form.querySelector('button[type="submit"]');
  const originalText = button.textContent;

  button.textContent = 'Thank you! Message sent.';
  button.style.background = 'var(--gold)';

  form.reset();

  setTimeout(() => {
    button.textContent = originalText;
    button.style.background = '';
  }, 3000);
}

// Filter function for gallery
function filterGallery(category) {
  const tabs = document.querySelectorAll('.filter-tab');
  const images = document.querySelectorAll('.gallery-item');

  tabs.forEach(tab => tab.classList.remove('active'));
  event.target.classList.add('active');

  images.forEach(img => {
    if (category === 'all' || img.dataset.cat === category) {
      img.style.display = 'block';
      img.style.animation = 'fadeIn 0.6s ease-out';
    } else {
      img.style.display = 'none';
    }
  });
}

// Gallery lightbox
function openLightbox(imageSrc, imageAlt) {
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  lightbox.innerHTML = `
    <div class="lightbox-content">
      <button class="lightbox-close">&times;</button>
      <img src="${imageSrc}" alt="${imageAlt}">
    </div>
  `;

  document.body.appendChild(lightbox);

  lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox || e.target.classList.contains('lightbox-close')) {
      lightbox.remove();
    }
  });

  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      lightbox.remove();
    }
  });
}
