// Selecciona la barra de navegación
const nav = document.querySelector('.scroll-nav');

// Función para controlar el desvanecimiento
function handleScroll() {
    // Obtiene la posición vertical de desplazamiento
    const scrollY = window.scrollY;

    // Ajusta la opacidad de la barra de navegación según la posición de desplazamiento
    nav.style.opacity = scrollY > 100 ? '0' : '1';
}

// Agrega un evento de desplazamiento (scroll) para llamar a la función handleScroll
window.addEventListener('scroll', handleScroll);
