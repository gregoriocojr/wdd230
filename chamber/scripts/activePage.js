var currentPage = window.location.pathname;

var navLinks = document.querySelectorAll('.navigation ul li a');

navLinks.forEach(function(link) {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});
