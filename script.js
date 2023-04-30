document.addEventListener('DOMContentLoaded', function () {
    const imageLinks = document.querySelectorAll('.image-link');
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = lightbox.querySelector('.lightbox-image');
    const lightboxClose = lightbox.querySelector('.lightbox-close');
  
    imageLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        lightbox.style.display = 'block';
        lightboxImage.src = link.getAttribute('data-src');
        setTimeout(() => {
          lightboxImage.style.opacity = '1';
        }, 50);
      });
    });
  
    lightboxClose.addEventListener('click', () => {
      lightboxImage.style.opacity = '0';
      setTimeout(() => {
        lightbox.style.display = 'none';
      }, 500);
    });
  
    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightboxImage.style.opacity = '0';
        setTimeout(() => {
          lightbox.style.display = 'none';
        }, 250); // Reduced duration from 500ms to 250ms
      }
    });
  });
  
  