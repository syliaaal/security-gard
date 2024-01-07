document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animated-element');

    animatedElements.forEach(function (element) {
        element.classList.add('animate__animated', 'animate__fadeIn');
    });
});