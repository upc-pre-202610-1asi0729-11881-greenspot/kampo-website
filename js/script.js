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

const translations = {
    es: {
        nav_beneficios: 'Beneficios',
        nav_planes: 'Planes',
        nav_contacto: 'Contacto',
        btn_login: 'Iniciar Sesión',
        btn_register: 'Registrarse',
        hero_badge: '🚜 Tecnología para el agro peruano',
        hero_title: 'Tu campo en datos,<br><span class="accent-text">tu negocio en control</span>',
        hero_desc: 'Optimiza el riego, monitorea tus cultivos y controla la rentabilidad de tus fundos con tecnología IoT en tiempo real.',
        btn_planes: 'Ver Planes',
        btn_explorar: 'Explorar App →',
        stat1_label: 'Módulos integrados',
        stat2_label: 'Sensores en tiempo real',
        stat3_label: 'Digital y escalable',
        hero_scroll: 'Descubre más',
        benefits_tag: '¿Por qué KAMPO?',
        benefits_title: 'Todo lo que necesita tu fundo en un solo lugar',
        benefits_desc: 'Diseñado para ingenieros agrónomos y gestores agroindustriales del Perú',
        plans_tag: 'Membresías',
        plans_title: 'Elige el plan para tu operación',
        plans_desc: 'Desde pequeños productores hasta grandes agroindustrias',
        cta_title: '¿Listo para digitalizar tu fundo?',
        cta_desc: 'Únete a KAMPO y toma el control de tu operación agrícola hoy mismo.',
        btn_comenzar: 'Comenzar Gratis',
        btn_cuenta: 'Ya tengo cuenta'
    },
    en: {
        nav_beneficios: 'Benefits',
        nav_planes: 'Plans',
        nav_contacto: 'Contact',
        btn_login: 'Log In',
        btn_register: 'Sign Up',
        hero_badge: '🚜 Technology for Peruvian agriculture',
        hero_title: 'Your field in data,<br><span class="accent-text">your business in control</span>',
        hero_desc: 'Optimize irrigation, monitor your crops and control the profitability of your farms with real-time IoT technology.',
        btn_planes: 'View Plans',
        btn_explorar: 'Explore App →',
        stat1_label: 'Integrated modules',
        stat2_label: 'Real-time sensors',
        stat3_label: 'Digital and scalable',
        hero_scroll: 'Discover more',
        benefits_tag: 'Why KAMPO?',
        benefits_title: 'Everything your farm needs in one place',
        benefits_desc: 'Designed for agronomists and agro-industrial managers in Peru',
        plans_tag: 'Memberships',
        plans_title: 'Choose the plan for your operation',
        plans_desc: 'From small producers to large agro-industries',
        cta_title: 'Ready to digitize your farm?',
        cta_desc: 'Join KAMPO and take control of your agricultural operation today.',
        btn_comenzar: 'Start Free',
        btn_cuenta: 'I already have an account'
    }
};
