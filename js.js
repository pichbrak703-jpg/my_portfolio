// Fade animation on scroll

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }

    });

});

document.querySelectorAll('section').forEach((section) => {
    observer.observe(section);
});

// Smooth navbar active effect

const links = document.querySelectorAll('.nav-links a');

links.forEach(link => {

    link.addEventListener('click', function () {

        links.forEach(item => item.classList.remove('active'));

        this.classList.add('active');

    });

});