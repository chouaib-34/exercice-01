
const pageActuelle = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-lien').forEach(lien => {
    if (lien.getAttribute('href') === pageActuelle) {
        lien.classList.add('actif');
    }
});


const lightbox = document.getElementById('lightbox');
if (lightbox) {
    const lightboxImage = document.getElementById('lightbox-image');
    const boutonFermer = document.getElementById('lightbox-fermer');

    document.querySelectorAll('.galerie-image').forEach(image => {
        image.addEventListener('click', () => {
            lightboxImage.src = image.src;
            lightboxImage.alt = image.alt;
            lightbox.classList.add('ouverte');
        });
    });

    function fermer() {
        lightbox.classList.remove('ouverte');
    }

    boutonFermer.addEventListener('click', fermer);
    lightbox.addEventListener('click', event => {
        if (event.target === lightbox) fermer();   
    });
    document.addEventListener('keydown', event => {
        if (event.key === 'Escape') fermer(); });
}