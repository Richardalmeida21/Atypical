// Mantém as outras funções normalmente
function inicializarMenuMobile() {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const links = document.querySelectorAll('.nav-links li');

    if (!hamburger || !navLinks) return;

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');

        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    links.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navLinks.classList.remove('active');
            links.forEach(link => link.style.animation = '');
        });
    });
}

function revelarElementosNoScroll() {
    const elementos = document.querySelectorAll('.feature, .projeto-card, .membro-card');
    const windowHeight = window.innerHeight;

    elementos.forEach(elemento => {
        const elementoTop = elemento.getBoundingClientRect().top;
        const elementoPoint = 150;

        if (elementoTop < windowHeight - elementoPoint) {
            elemento.classList.add('reveal');
        }
    });
}

function inicializarFormularioContato() {
    const form = document.getElementById('contato-form');
    if (!form) return;

    const inputs = form.querySelectorAll('input, textarea');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('active');
        });

        input.addEventListener('blur', () => {
            if (!input.value) {
                input.classList.remove('active');
            }
        });
    });

    form.addEventListener('submit', async (e) => {
        e.preventDefault();

        const submitButton = form.querySelector('.submit-button');
        const originalText = submitButton.textContent;

        submitButton.textContent = 'Enviando...';
        submitButton.disabled = true;

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));

            submitButton.textContent = 'Mensagem Enviada!';
            submitButton.style.backgroundColor = 'var(--primary-color)';
            submitButton.style.color = 'var(--background-dark)';

            form.reset();

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
                submitButton.style.color = '';
            }, 3000);

        } catch (error) {
            submitButton.textContent = 'Erro ao enviar';
            submitButton.style.backgroundColor = '#ff3333';

            setTimeout(() => {
                submitButton.textContent = originalText;
                submitButton.disabled = false;
                submitButton.style.backgroundColor = '';
            }, 3000);
        }
    });
}

function inicializarScrollSuave() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
}

function typeWriter() {
    const texts = [
        "Inovação em Tecnologia",
        "Desenvolvimento Web",
        "Design Moderno",
        "Soluções Criativas"
    ];
    const typingText = document.querySelector('.typing-text');
    if (!typingText) return;

    let textIndex = 0;
    let charIndex = 0;

    function type() {
        if (charIndex < texts[textIndex].length) {
            typingText.textContent += texts[textIndex].charAt(charIndex);
            charIndex++;
            setTimeout(type, 50);
        } else {
            setTimeout(erase, 1500);
        }
    }

    function erase() {
        if (charIndex > 0) {
            typingText.textContent = texts[textIndex].substring(0, charIndex - 1);
            charIndex--;
            setTimeout(erase, 25);
        } else {
            textIndex = (textIndex + 1) % texts.length;
            setTimeout(type, 300);
        }
    }

    type();
}

document.addEventListener('DOMContentLoaded', function () {
    inicializarMenuMobile();
    inicializarFormularioContato();
    inicializarScrollSuave();
    typeWriter();
    revelarElementosNoScroll();
    window.addEventListener('scroll', revelarElementosNoScroll);
});