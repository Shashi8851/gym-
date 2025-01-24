
document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const navigation = document.querySelector('.navigation');
    let currentSlide = 0;
    let slideInterval;

    // Create navigation dots
    slides.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('nav-btn');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        navigation.appendChild(dot);
    });

    const navigationDots = document.querySelectorAll('.nav-btn');

    function updateDots() {
        navigationDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }

    function goToSlide(index) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        updateDots();
        resetInterval();
    }

    function nextSlide() {
        goToSlide(currentSlide + 1);
    }

    function prevSlide() {
        goToSlide(currentSlide - 1);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }

    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        resetInterval();
    });

    nextBtn.addEventListener('click', () => {
        nextSlide();
        resetInterval();
    });

    // Touch events for mobile swipe
    let touchStartX = 0;
    let touchEndX = 0;

    document.querySelector('.slideshow-container').addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    document.querySelector('.slideshow-container').addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        if (touchStartX - touchEndX > 50) { // Swipe left
            nextSlide();
        } else if (touchEndX - touchStartX > 50) { // Swipe right
            prevSlide();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            prevSlide();
        } else if (e.key === 'ArrowRight') {
            nextSlide();
        }
    });

    // Pause on hover
    const slideshowContainer = document.querySelector('.slideshow-container');
    slideshowContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });

    slideshowContainer.addEventListener('mouseleave', () => {
        resetInterval();
    });

    // Start the slideshow
    resetInterval();
});

// cards divide for specific.
const gymQuotes = [
    // Row 1 - Beginner Motivation
    [
        {
            quote: "The journey of a thousand miles begins with a single step.",
            author: "Lao Tzu",
            background: "./see.jpg"
        },
        {
            quote: "Start where you are. Use what you have. Do what you can.",
            author: "Arthur Ashe",
            background: "./mind.jpg"
        },
        {
            quote: "Every expert was once a beginner.",
            author: "perid",
            background: "./push.jpg"
        },
        {
            quote: "Small progress is still progress.",
            author: "krine",
            background: "./bad.jpg"
        }
    ],
    // Row 2 - Advanced Training
    [
        {
            quote: "The pain you feel today will be the strength you feel tomorrow.",
            author: "peter jain gode",
            background: "./stand.jpg"
        },
        {
            quote: "Your body can stand almost anything. It's your mind you have to convince.",
            author: "Marvin Phillips",
            background: "./tirum.jpg"
        },
        {
            quote: "When you feel like giving up, remember why you started.",
            author: "pedula slcher",
            background: "./better.jpg"
        },
        {
            quote: "Success is built on consistency.",
            author: "pemil guat seman",
            background: "./strenght.jpg"
        }
    ],
    // Row 3 - Peak Performance
    [
        {
            quote: "The only person you are destined to become is the person you decide to be.",
            author: "Ralph Waldo Emerson",
            background: "./look.jpg"
        },
        {
            quote: "The harder you work for something, the greater you'll feel when you achieve it.",
            author: "brein kale",
            background: "./kalu.jpg"
        },
        {
            quote: "Champions keep playing until they get it right.",
            author: "Billie Jean King",
            background: "./couple.jpg"
        },
        {
            quote: "Strength does not come from what you can do. It comes from overcoming what you thought you couldn't.",
            author: "Rikki Rogers",
            background: "impo.jpg"
        }
    ]
];

document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('.row');
    
    rows.forEach((row, rowIndex) => {
        gymQuotes[rowIndex].forEach((quote, index) => {
            const card = document.createElement('div');
            card.className = 'child fade-in';
            card.style.animationDelay = `${(rowIndex * 4 + index) * 0.1}s`;

            card.innerHTML = `
                <div class="card-background" style="background-image: url('${quote.background}')"></div>
                <div class="card-content">
                    <div class="quote">"${quote.quote}"</div>
                    <div class="author">- ${quote.author}</div>
                </div>
                <div class="card-number">#${rowIndex * 4 + index + 1}</div>
            `;

            row.appendChild(card);
        });
    });

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    document.querySelectorAll('.child').forEach(card => {
        observer.observe(card);
    });
});

// footer link
class GymFooter {
    constructor() {
      this.socialIcons = [
        { 
          platform: 'Twitter',
          url: 'https://twitter.com',
          icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/%3E%3C/svg%3E'
        },
        {
          platform: 'Facebook',
          url: 'https://facebook.com',
          icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"/%3E%3C/svg%3E'
        },
        {
          platform: 'Instagram',
          url: 'https://instagram.com',
          icon: 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"%3E%3Cpath d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/%3E%3C/svg%3E'
        }
      ];
      
      this.init();
    }
  
    async init() {
      try {
        await this.loadSocialIcons();
        await this.animateStats();
        this.setupResizeHandler();
        this.setupIntersectionObserver();
      } catch (error) {
        console.error('Failed to initialize footer:', error);
        this.showError('Failed to load some content. Please refresh the page.');
      }
    }
  
    async loadSocialIcons() {
      const socialLinksContainer = document.querySelector('.social-links');
      socialLinksContainer.innerHTML = ''; // Clear existing content
  
      for (const icon of this.socialIcons) {
        try {
          await new Promise(resolve => setTimeout(resolve, 200)); // Simulate network delay
          
          const link = document.createElement('a');
          link.href = icon.url;
          link.className = 'social-link loading';
          link.setAttribute('aria-label', icon.platform);
          
          const img = document.createElement('img');
          img.src = icon.icon;
          img.alt = icon.platform;
          
          link.appendChild(img);
          socialLinksContainer.appendChild(link);
  
          // Remove loading state and add loaded animation after image loads
          img.onload = () => {
            link.classList.remove('loading');
            setTimeout(() => link.classList.add('loaded'), 100);
          };
  
          img.onerror = () => {
            throw new Error(`Failed to load ${icon.platform} icon`);
          };
  
        } catch (error) {
          console.error(`Error loading ${icon.platform} icon:`, error);
          this.showError(`Failed to load ${icon.platform} icon`);
        }
      }
    }
  
    async animateStats() {
      const stats = document.querySelectorAll('.stats-item');
      
      for (const stat of stats) {
        try {
          await new Promise(resolve => setTimeout(resolve, 150));
          stat.classList.add('visible');
        } catch (error) {
          console.error('Error animating stats:', error);
        }
      }
    }
  
    setupResizeHandler() {
      let resizeTimeout;
      
      window.addEventListener('resize', () => {
        // Debounce resize handler
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          this.handleResize();
        }, 250);
      });
    }
  
    setupIntersectionObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('visible');
            }
          });
        },
        { threshold: 0.2 }
      );
  
      document.querySelectorAll('.stats-item').forEach(item => {
        observer.observe(item);
      });
    }
  
    handleResize() {
      try {
        const footer = document.querySelector('.footer-content');
        const width = window.innerWidth;
        
        if (width <= 576) {
          footer.style.gridTemplateColumns = '1fr';
        } else if (width <= 992) {
          footer.style.gridTemplateColumns = 'repeat(2, 1fr)';
        } else {
          footer.style.gridTemplateColumns = 'repeat(4, 1fr)';
        }
      } catch (error) {
        console.error('Error handling resize:', error);
      }
    }
  
    showError(message) {
      const errorDiv = document.createElement('div');
      errorDiv.className = 'error-message';
      errorDiv.textContent = message;
      document.querySelector('.footer-section:last-child').appendChild(errorDiv);
    }
  }
  
  // Initialize footer when DOM is loaded
  document.addEventListener('DOMContentLoaded', () => {
    new GymFooter();
  });