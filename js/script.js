const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
});

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

function closeMobileMenu() {
    mobileMenu.classList.remove('open');
}

function scrollToSection(id) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const delay = entry.target.dataset.delay || 0;
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.transition = 'all 0.6s ease';
            }, parseInt(delay));
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.benefit-card').forEach(card => {
    card.style.transform = 'translateY(30px)';
    observer.observe(card);
});

const plans = {
    mensual: {
        semilla: { price: '20', period: '/mes', link: 'https://buy.stripe.com/test_8x2bJ00MO1lvaqs1ls6EU00' },
        cosecha: { price: '45', period: '/mes', link: 'https://buy.stripe.com/test_aFaaEWfHIfcl8ike8e6EU01' },
        hacienda: { price: '95', period: '/mes', link: 'https://buy.stripe.com/test_eVq28q2UWc09buw2pw6EU02' }
    },
    anual: {
        semilla: { price: '200', period: '/año', link: 'https://buy.stripe.com/test_6oU14m1QSc09buwfci6EU03' },
        cosecha: { price: '450', period: '/año', link: 'https://buy.stripe.com/test_fZucN41QS0hrgOQ0ho6EU04' },
        hacienda: { price: '950', period: '/año', link: 'https://buy.stripe.com/test_9B63cufHI9S18ik7JQ6EU05' }
    }
};

document.getElementById('billingToggle').addEventListener('change', function() {
    const mode = this.checked ? 'anual' : 'mensual';
    ['semilla', 'cosecha', 'hacienda'].forEach(plan => {
        document.getElementById(`price-${plan}`).textContent = plans[mode][plan].price;
        document.getElementById(`period-${plan}`).textContent = plans[mode][plan].period;
        document.getElementById(`btn-${plan}`).href = plans[mode][plan].link;
    });
});