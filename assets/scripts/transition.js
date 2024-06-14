window.addEventListener('load', () => {
    const backgroundContainer = document.querySelector('.box2__main');
    setTimeout(() => {
        backgroundContainer.classList.add('zoomed');
    }, 1000);
});