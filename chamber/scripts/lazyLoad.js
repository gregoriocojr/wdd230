document.addEventListener("DOMContentLoaded", function() {
    const lazyImages = document.querySelectorAll('.lazy');

    const lazyLoad = function() {
        lazyImages.forEach(image => {
            if (image.offsetTop < window.innerHeight + window.pageYOffset) {
                image.src = image.dataset.src;
                image.classList.add('loaded');
            }
        });
    }

    window.addEventListener('scroll', lazyLoad);
    window.addEventListener('resize', lazyLoad);

    // Initial load check
    lazyLoad();
});