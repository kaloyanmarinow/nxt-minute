/**
 * Menu toggle
 */

document.querySelector('.js-menu-toggle').addEventListener('click', function(event) {
    document.querySelector('.js-menu-toggle').classList.toggle('is-active');
    document.querySelector('.js-menu').classList.toggle('is-active');
    
    event.preventDefault();
});