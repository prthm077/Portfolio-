
    // Close menu when clicking a link (mobile)
    document.querySelectorAll('.nav-links a').forEach(link => {
      link.addEventListener('click', () => {
        document.querySelector('.nav-links').classList.remove('active');
      });
    });
    
    document.querySelector('.menu-btn').addEventListener('click', function() {
      this.classList.toggle('active');
    });

    const cards = document.querySelectorAll('.project-card');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.2 });

    cards.forEach(card => observer.observe(card));
    
    const textArray = [
      "🚀 Vibe Coder",
      "🎓 BCA Student", 
      "💻 Tech Enthusiast",
      "✨ Creative Web Designer"
    ];

    let index = 0;
    let charIndex = 0;
    let currentText = "";
    let isDeleting = false;
    const typingElement = document.getElementById("typing");

    function typeEffect() {
      if (isDeleting) {
        currentText = textArray[index].substring(0, charIndex--);
      } else {
        currentText = textArray[index].substring(0, charIndex + 1);
        charIndex++;
      }
      
      typingElement.textContent = currentText;
      
      let typingSpeed = isDeleting ? 60 : 100;
      
      if (!isDeleting && charIndex === textArray[index].length) {
        typingSpeed = 1200;
        isDeleting = true;
      } else if (isDeleting && charIndex < 0) {
        isDeleting = false;
        index = (index + 1) % textArray.length;
        typingSpeed = 200;
        charIndex = 0;
      }
      
      setTimeout(typeEffect, typingSpeed);
    }

    // NEW FEATURE 1: Floating Particles
    function createParticles() {
      const particlesContainer = document.getElementById('particles');
      
      function createParticle() {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        // Random position and animation duration
        particle.style.left = Math.random() * 100 + 'vw';
        particle.style.animationDuration = (Math.random() * 3 + 4) + 's';
        particle.style.animationDelay = Math.random() * 2 + 's';
        
        particlesContainer.appendChild(particle);
        
        // Remove particle after animation
        setTimeout(() => {
          particle.remove();
        }, 8000);
      }
      
      // Create particles at intervals
      setInterval(createParticle, 500);
    }

    // NEW FEATURE 2: Skills Animation
    function animateSkills() {
      const skillBars = document.querySelectorAll('.skill-progress');
      
      const skillsObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const width = entry.target.getAttribute('data-width');
            entry.target.style.width = width + '%';
            skillsObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.5 });
      
      skillBars.forEach(bar => {
        bar.style.width = '0%';
        skillsObserver.observe(bar);
      });
    }

    // Theme Toggle Functionality
    function initThemeToggle() {
      const themeToggle = document.getElementById('themeToggle');
      let currentTheme = 'green';
      
      themeToggle.addEventListener('click', () => {
        if (currentTheme === 'green') {
          document.body.classList.add('blue-theme');
          currentTheme = 'blue';
          themeToggle.textContent = '💙';
        } else {
          document.body.classList.remove('blue-theme');
          currentTheme = 'green';
          themeToggle.textContent = '🎨';
        }
      });
    }

    // Initialize everything when DOM loads
    document.addEventListener("DOMContentLoaded", function() {
      typeEffect();
      createParticles();
      animateSkills();
      initThemeToggle();
    });
// === FEEDBACK POPUP SCRIPT ===
const feedbackPopup = document.getElementById("feedbackPopup");
const closeFeedback = document.getElementById("closeFeedback");
const feedbackForm = document.getElementById("feedbackForm");
const feedbackThanks = document.getElementById("feedbackThanks");
const openFeedbackBtn = document.getElementById("openFeedback");

// Open Popup
openFeedbackBtn.onclick = () => {
  feedbackPopup.style.display = "flex";
};

// Close Popup
closeFeedback.onclick = () => {
  feedbackPopup.style.display = "none";
};

// Close on outside click
window.onclick = (e) => {
  if (e.target === feedbackPopup) {
    feedbackPopup.style.display = "none";
  }
};

// Handle Submit
feedbackForm.addEventListener("submit", function(e) {
  e.preventDefault();
  feedbackForm.style.display = "none";
  feedbackThanks.style.display = "block";
  setTimeout(() => {
    feedbackPopup.style.display = "none";
    feedbackForm.style.display = "block";
    feedbackThanks.style.display = "none";
    feedbackForm.reset();
  }, 2000);
});