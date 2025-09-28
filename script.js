
const menuHamburguer = document.getElementById('meuToggle');
const navLista = document.getElementById('navLista');

menuHamburguer.addEventListener('click', () => {
    navLista.classList.toggle('show');
    const menuEstaVisivel = navLista.classList.contains('show');
    menuHamburguer.setAttribute('aria-expanded', menuEstaVisivel);
});

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

const header = document.getElementById('menu');
let menuEstaComSombra = false;

function onScroll() {
    const scrollAtual = window.scrollY;
    if (!menuEstaComSombra && scrollAtual > 20) {
        header.classList.add('scrolled');
        menuEstaComSombra = true;
    } 
    else if (menuEstaComSombra && scrollAtual <= 10) {
        header.classList.remove('scrolled');
        menuEstaComSombra = false;
    }
}
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();