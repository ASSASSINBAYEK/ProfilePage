// Modern JavaScript improvements
document.addEventListener('DOMContentLoaded', () => {
    // Loading screen transition
    const loadingScreen = document.getElementById('loading-screen');
    if (loadingScreen) {
        loadingScreen.style.transition = 'opacity 0.5s ease';
        setTimeout(() => {
            loadingScreen.style.opacity = '0';
            setTimeout(() => loadingScreen.remove(), 500);
        }, 2000);
    }

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
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

    // Back to top button functionality
    const backButton = document.createElement('button');
    backButton.innerHTML = '↑';
    backButton.className = 'back-to-top';
    document.body.appendChild(backButton);

    window.addEventListener('scroll', () => {
        backButton.style.opacity = (window.scrollY > 300) ? '1' : '0';
        backButton.style.pointerEvents = (window.scrollY > 300) ? 'auto' : 'none';
    });

    backButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Animate content sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'all 0.6s ease-out';
        observer.observe(section);
    });

    // Hover effect for profile image
    const profileImage = document.querySelector('.profile-image');
    if (profileImage) {
        profileImage.addEventListener('mouseenter', () => {
            profileImage.style.transform = 'scale(1.05) rotateZ(2deg)';
        });
        
        profileImage.addEventListener('mouseleave', () => {
            profileImage.style.transform = 'scale(1) rotateZ(0)';
        });
    }

    // Dynamic copyright year
    const yearSpan = document.getElementById('copyright-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

// Add this CSS for the back-to-top button:
/*
.back-to-top {
    position: fixed;
    bottom: 30px;
    right: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #2d2d2d;
    color: white;
    border: none;
    cursor: pointer;
    opacity: 0;
    transition: all 0.3s ease;
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
}

.back-to-top:hover {
    background: #3d3d3d;
    transform: scale(1.1);
}
*/