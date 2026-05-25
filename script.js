
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

const navLinks = document.querySelectorAll('.nav-links a');

navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        if (this.hash !== "" && this.pathname === window.location.pathname) {
            const hash = this.hash;
            const targetElement = document.querySelector(hash);
            
            if (targetElement) {
                e.preventDefault();
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        }
    });
});

const langToggle = document.getElementById('lang-toggle');
const body = document.body;

langToggle.addEventListener('click', () => {
    if (body.classList.contains('lang-pl')) {
        body.classList.remove('lang-pl');
        body.classList.add('lang-en');
        langToggle.textContent = 'PL';
    } else {
        body.classList.remove('lang-en');
        body.classList.add('lang-pl');
        langToggle.textContent = 'EN';
    }
});

window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 20) {
        navbar.style.boxShadow = '0 2px 15px rgba(0,0,0,0.08)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

function copyEmail() {
    const email = document.getElementById('email-address').innerText;
    const msg = document.getElementById('copy-msg');
    
    navigator.clipboard.writeText(email).then(() => {
        msg.style.display = 'block';
        
        setTimeout(() => {
            msg.style.display = 'none';
        }, 2000);
    }).catch(err => {
        console.error('Błąd kopiowania: ', err);
    });
}
