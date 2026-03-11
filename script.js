// ===== MOBILE MENU =====
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-x');
    navbar.classList.toggle('active');
};

// Close navbar on link click
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', () => {
        menuIcon.classList.remove('fa-x');
        navbar.classList.remove('active');
    });
});

// ===== HEADER SCROLL =====
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
});

// ===== TYPEWRITER =====
const roles = [
    'Backend Developer',
    'Node.js Engineer',
    'API Architect',
    'Full Stack Dev'
];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typeEl = document.getElementById('typewriter');

function typeWriter() {
    const current = roles[roleIndex];
    if (isDeleting) {
        typeEl.textContent = current.slice(0, charIndex - 1);
        charIndex--;
    } else {
        typeEl.textContent = current.slice(0, charIndex + 1);
        charIndex++;
    }

    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => isDeleting = true, 2000);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
    }

    const speed = isDeleting ? 60 : 100;
    setTimeout(typeWriter, speed);
}

window.addEventListener('load', typeWriter);

// ===== SCROLL REVEAL =====
const reveals = document.querySelectorAll('.exp-card, .skill-category, .project-item, .contact-inner > *');

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, i * 80);
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

reveals.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ===== SEND MAIL =====
function sendMail() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const number = document.getElementById('number').value.trim();
    const message = document.getElementById('textarea').value.trim();
    const status = document.getElementById('form-status');

    if (!name || !email || !message) {
        status.style.color = '#ff6b6b';
        status.textContent = 'Please fill in all required fields.';
        return;
    }

    const btn = document.querySelector('.send-btn');
    btn.textContent = 'Sending...';
    btn.disabled = true;

    emailjs.send('service_id', 'template_id', {
        from_name: name,
        reply_to: email,
        phone: number,
        message: message
    }).then(() => {
        status.style.color = '#4ade80';
        status.textContent = '✓ Message sent! I\'ll get back to you soon.';
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
        btn.disabled = false;
        document.getElementById('name').value = '';
        document.getElementById('email').value = '';
        document.getElementById('number').value = '';
        document.getElementById('textarea').value = '';
    }).catch(() => {
        status.style.color = '#ff6b6b';
        status.textContent = 'Something went wrong. Try emailing directly.';
        btn.innerHTML = 'Send Message <i class="fa-solid fa-paper-plane"></i>';
        btn.disabled = false;
    });
}