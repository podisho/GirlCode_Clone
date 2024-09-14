document.addEventListener('DOMContentLoaded', (event) => {
    let slideIndex = 0;
    showSlides(slideIndex);

    document.querySelector('.prev').addEventListener('click', () => {
        showSlides(slideIndex -= 1);
    });

    document.querySelector('.next').addEventListener('click', () => {
        showSlides(slideIndex += 1);
    });

    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlides(slideIndex = index);
        });
    });

    function showSlides(n) {
        let i;
        let slides = document.querySelectorAll('.testimonial');
        let dots = document.querySelectorAll('.dot');

        if (n >= slides.length) {
            slideIndex = 0;
        }
        if (n < 0) {
            slideIndex = slides.length - 1;
        }

        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = 'none';
        }

        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }

        slides[slideIndex].style.display = 'block';
        dots[slideIndex].className += ' active';
    }
});
