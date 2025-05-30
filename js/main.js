// Navigation mobile
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Animation du header au scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll <= 0) {
        header.classList.remove('scroll-up');
        return;
    }
    
    if (currentScroll > lastScroll && !header.classList.contains('scroll-down')) {
        // Scroll Down
        header.classList.remove('scroll-up');
        header.classList.add('scroll-down');
    } else if (currentScroll < lastScroll && header.classList.contains('scroll-down')) {
        // Scroll Up
        header.classList.remove('scroll-down');
        header.classList.add('scroll-up');
    }
    lastScroll = currentScroll;
});

// Animation des éléments au scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Validation du formulaire de contact
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Récupération des champs
        const name = contactForm.querySelector('input[name="name"]').value;
        const email = contactForm.querySelector('input[name="email"]').value;
        const message = contactForm.querySelector('textarea[name="message"]').value;
        
        // Validation basique
        if (!name || !email || !message) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Validation email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        // Simulation d'envoi
        alert('Votre message a été envoyé avec succès !');
        contactForm.reset();
    });
}

// Filtrage des produits (lunettes et lentilles)
document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');

    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Retirer la classe active de tous les boutons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                // Ajouter la classe active au bouton cliqué
                button.classList.add('active');

                const category = button.getAttribute('data-category') || button.getAttribute('data-filter');

                productCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category') || card.getAttribute('data-filter');
                    if (category === 'all' || cardCategory === category) {
                        card.style.display = 'block';
                        // Animation de fade-in
                        card.style.opacity = '0';
                        setTimeout(() => {
                            card.style.opacity = '1';
                        }, 50);
                    } else {
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Lightbox pour les images
const galleryImages = document.querySelectorAll('.gallery-image');
if (galleryImages.length > 0) {
    galleryImages.forEach(image => {
        image.addEventListener('click', () => {
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            
            const img = document.createElement('img');
            img.src = image.src;
            
            lightbox.appendChild(img);
            document.body.appendChild(lightbox);
            
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        });
    });
}

// Slider des tendances
const tendancesTrack = document.querySelector('.tendances-track');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');
let currentPosition = 0;
const cardWidth = 330; // Largeur de la carte + gap

if (tendancesTrack && prevBtn && nextBtn) {
    nextBtn.addEventListener('click', () => {
        const maxPosition = -(tendancesTrack.scrollWidth - tendancesTrack.clientWidth);
        currentPosition = Math.max(currentPosition - cardWidth, maxPosition);
        tendancesTrack.style.transform = `translateX(${currentPosition}px)`;
    });

    prevBtn.addEventListener('click', () => {
        currentPosition = Math.min(currentPosition + cardWidth, 0);
        tendancesTrack.style.transform = `translateX(${currentPosition}px)`;
    });
} 