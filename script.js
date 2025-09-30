// Menu responsivo

const menuHamburguer = document.getElementById('meuToggle');
const navLista = document.getElementById('navLista');

menuHamburguer.addEventListener('click', () => {
    navLista.classList.toggle('show');
    const menuEstaVisivel = navLista.classList.contains('show');
    menuHamburguer.setAttribute('aria-expanded', menuEstaVisivel);
});

// Fecha menu ao clicar em um link

navLista.addEventListener('click', (e) => {
    if (e.target.tagName === 'A' && navLista.classList.contains('show')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            navLista.classList.remove('show');
            menuHamburguer.setAttribute('aria-expanded', 'false');

            setTimeout(() => {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }, 300);
        }
    }
});