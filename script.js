document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navList = document.getElementById('nav-list');

    hamburger.addEventListener('click', function() {
        navList.classList.toggle('show');
    });
});

function toggleNav() {
    const navList = document.querySelector('.nav-list');
    navList.classList.toggle('show');
}

// Cerrar el menú automáticamente cuando se hace clic en un enlace de navegación
document.querySelectorAll('.nav-list a').forEach(link => {
    link.addEventListener('click', () => {
        const navList = document.querySelector('.nav-list');
        if (navList.classList.contains('show')) {
            navList.classList.remove('show');
        }
    });
});