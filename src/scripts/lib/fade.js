
const nav = document.querySelector('.menu__body');

export const handleHover = function (e) {
    if (e.target.classList.contains('menu__link')) {
        const link = e.target;
        const siblings = link.closest('.menu').querySelectorAll('.menu__link');

        siblings.forEach(el => {
            if (el !== link) {
                el.style.transition = 'opacity 0.3s';
                el.style.opacity = this;
            }
        });
    }
};

nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));
