// Custom Cursor
const cursor = document.querySelector('.cursor');
const cursorFollower = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
  
  setTimeout(() => {
    cursorFollower.style.left = e.clientX + 'px';
    cursorFollower.style.top = e.clientY + 'px';
  }, 100);
});

// Cursor hover effects
const hoverElements = document.querySelectorAll('a, button, .project-card, .service-card');
hoverElements.forEach(element => {
  element.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(1.5)';
    cursorFollower.style.transform = 'scale(1.5)';
  });
  
  element.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    cursorFollower.style.transform = 'scale(1)';
  });
});

// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 3000);
});

// Scroll Progress Indicator
window.addEventListener('scroll', () => {
  const scrollProgress = document.querySelector('.scroll-progress');
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
});

// Mobile Navigation Toggle
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
  navMenu.classList.toggle('active');
  navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
    navToggle.classList.remove('active');
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
  const scrolled = window.pageYOffset;
  const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
  
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrolled * speed}px)`;
  });
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.skill-category, .project-card, .service-card, .stat').forEach(el => {
  observer.observe(el);
});

// 3D Tilt Effect for Project Cards
const projectCards = document.querySelectorAll('[data-tilt]');

projectCards.forEach(card => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    const rotateX = (y - centerY) / 10;
    const rotateY = (centerX - x) / 10;
    
    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(20px)`;
  });
  
  card.addEventListener('mouseleave', () => {
    card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
  });
});

// Typing Animation for Hero Text
const typingText = document.querySelector('.typing-text');
if (typingText) {
  const text = 'Web Experiences';
  const words = ['Web Experiences', 'Digital Solutions', 'User Interfaces', 'Modern Websites'];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeWriter() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
      typingText.textContent = currentWord.substring(0, charIndex - 1);
      charIndex--;
    } else {
      typingText.textContent = currentWord.substring(0, charIndex + 1);
      charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
      typeSpeed = 2000;
      isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      typeSpeed = 500;
    }

    setTimeout(typeWriter, typeSpeed);
  }

  // Start typing animation after page load
  setTimeout(typeWriter, 4000);
}

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
      alert('Please fill in all fields');
      return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    setTimeout(() => {
      alert('Thank you for your message! I\'ll get back to you soon.');
      contactForm.reset();
      submitBtn.textContent = originalText;
      submitBtn.disabled = false;
    }, 2000);
  });
}

// Add glow effect to form inputs on focus
document.querySelectorAll('input, textarea').forEach(input => {
  input.addEventListener('focus', () => {
    input.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
  });
  
  input.addEventListener('blur', () => {
    input.style.boxShadow = 'none';
  });
});

// Navbar background on scroll
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
  }
});

// Add floating animation to shapes
const shapes = document.querySelectorAll('.shape');
shapes.forEach((shape, index) => {
  const randomDelay = Math.random() * 2;
  const randomDuration = 6 + Math.random() * 4;
  
  shape.style.animationDelay = `${randomDelay}s`;
  shape.style.animationDuration = `${randomDuration}s`;
});

// Performance optimization: Throttle scroll events
function throttle(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Apply throttling to scroll events
const throttledScrollHandler = throttle(() => {
  // Scroll progress
  const scrollProgress = document.querySelector('.scroll-progress');
  const scrollTop = window.pageYOffset;
  const docHeight = document.body.offsetHeight - window.innerHeight;
  const scrollPercent = (scrollTop / docHeight) * 100;
  scrollProgress.style.width = scrollPercent + '%';
  
  // Navbar background
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(10, 10, 10, 0.95)';
  } else {
    navbar.style.background = 'rgba(10, 10, 10, 0.9)';
  }
  
  // Parallax effect
  const parallaxElements = document.querySelectorAll('.floating-shapes .shape');
  parallaxElements.forEach((element, index) => {
    const speed = 0.5 + (index * 0.1);
    element.style.transform = `translateY(${scrollTop * speed}px)`;
  });
}, 16); // ~60fps

window.addEventListener('scroll', throttledScrollHandler);

// Add easter egg - Konami code
let konamiCode = [];
const konamiSequence = [
  'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
  'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
  'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
  konamiCode.push(e.code);
  
  if (konamiCode.length > konamiSequence.length) {
    konamiCode.shift();
  }
  
  if (konamiCode.join(',') === konamiSequence.join(',')) {
    // Easter egg activated!
    document.body.style.filter = 'hue-rotate(180deg)';
    setTimeout(() => {
      document.body.style.filter = 'none';
    }, 3000);
    
    // Show a fun message
    const message = document.createElement('div');
    message.textContent = '🎉 Easter Egg Activated! 🎉';
    message.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(135deg, var(--primary-color), var(--secondary-color));
      color: var(--bg-dark);
      padding: 2rem;
      border-radius: 20px;
      font-size: 1.5rem;
      font-weight: bold;
      z-index: 10000;
      animation: fadeInUp 0.5s ease-out;
    `;
    
    document.body.appendChild(message);
    
    setTimeout(() => {
      message.remove();
    }, 3000);
    
    konamiCode = [];
  }
});

// Add particle system for extra visual flair
function createParticle() {
  const particle = document.createElement('div');
  particle.style.cssText = `
    position: fixed;
    width: 4px;
    height: 4px;
    background: var(--primary-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 1;
    opacity: 0.7;
  `;
  
  const x = Math.random() * window.innerWidth;
  const y = window.innerHeight + 10;
  
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';
  
  document.body.appendChild(particle);
  
  const animation = particle.animate([
    { transform: 'translateY(0px)', opacity: 0.7 },
    { transform: `translateY(-${window.innerHeight + 100}px)`, opacity: 0 }
  ], {
    duration: Math.random() * 3000 + 2000,
    easing: 'linear'
  });
  
  animation.onfinish = () => {
    particle.remove();
  };
}

// Create particles periodically
setInterval(createParticle, 2000);

// Add smooth reveal animation for sections
const revealElements = document.querySelectorAll('section');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

revealElements.forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(50px)';
  el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  revealObserver.observe(el);
});

// Add dynamic background color based on scroll position
window.addEventListener('scroll', throttle(() => {
  const scrollPercent = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight)) * 100;
  const hue = (scrollPercent * 3.6) % 360; // Full color wheel over scroll
  
  document.documentElement.style.setProperty('--dynamic-bg', `hsl(${hue}, 20%, 5%)`);
}, 50));
