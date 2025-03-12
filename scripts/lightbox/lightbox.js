document.querySelectorAll('.completed-works__photo-container').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');

        lightbox.style.display = 'flex';
        lightboxImg.src = this.href;

        document.body.style.overflow = 'hidden';
    });
});

function closeLightbox() {
    document.getElementById('lightbox').style.display = 'none';
    document.body.style.overflow = 'auto';
}