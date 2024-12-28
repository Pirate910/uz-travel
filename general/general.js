const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        header.classList.add('position')
    }else{
        header.classList.remove('position')
    }
});
