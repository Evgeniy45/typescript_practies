export function initScrollListener() {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 100) {
            console.log('Scroll position is over 100px');
        }
    });
}
