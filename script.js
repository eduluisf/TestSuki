// Efecto de scroll en el header
window.addEventListener('scroll', function () {
    const header = document.querySelector('.head');
    const japanText = document.querySelector('.japan');

    if (window.scrollY > 50) {
        header.classList.add('scrolled');
        japanText.classList.add('hidden');
    } else {
        header.classList.remove('scrolled');
        japanText.classList.remove('hidden');
    }
});

document.addEventListener('DOMContentLoaded', () => {
    // Scroll horizontal galería normal
    const scrollContainer = document.querySelector('.scroll-gallery');
    let isDown = false;
    let startX;
    let scrollLeft;

    if (scrollContainer) {
        scrollContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            scrollContainer.classList.add('dragging');
            startX = e.pageX - scrollContainer.offsetLeft;
            scrollLeft = scrollContainer.scrollLeft;
        });

        scrollContainer.addEventListener('mouseleave', () => {
            isDown = false;
            scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mouseup', () => {
            isDown = false;
            scrollContainer.classList.remove('dragging');
        });

        scrollContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - scrollContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            scrollContainer.scrollLeft = scrollLeft - walk;
        });
    }

    // Scroll horizontal galería eventos
    const eventosGallery = document.querySelector('.scroll-gallery-eventos');

    if (eventosGallery) {
        eventosGallery.addEventListener('mousedown', (e) => {
            isDown = true;
            eventosGallery.classList.add('dragging');
            startX = e.pageX - eventosGallery.offsetLeft;
            scrollLeft = eventosGallery.scrollLeft;
        });

        eventosGallery.addEventListener('mouseleave', () => {
            isDown = false;
            eventosGallery.classList.remove('dragging');
        });

        eventosGallery.addEventListener('mouseup', () => {
            isDown = false;
            eventosGallery.classList.remove('dragging');
        });

        eventosGallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - eventosGallery.offsetLeft;
            const walk = (x - startX) * 1.5;
            eventosGallery.scrollLeft = scrollLeft - walk;
        });
    }

    // Botón hamburguesa
    const toggleBtn = document.querySelector('.menu-toggle');
    const navbarLinks = document.querySelector('.navbar-links');

    if (toggleBtn && navbarLinks) {
        toggleBtn.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        });
    }
});

// Funciones para botones de desplazamiento con flechas
function scrollGallery(direction) {
    const gallery = document.querySelector(".scroll-gallery");
    const scrollAmount = 160;
    if (gallery) {
        gallery.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    }
}

function scrollGalleryEventos(direction) {
    const gallery = document.querySelector(".scroll-gallery-eventos");
    const scrollAmount = 326;
    if (gallery) {
        gallery.scrollBy({
            left: direction * scrollAmount,
            behavior: "smooth",
        });
    }
}

