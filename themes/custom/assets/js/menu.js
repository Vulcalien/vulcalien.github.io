function menu_toggle() {
    const menu = document.querySelector('.site-menu');
    menu.classList.toggle('open');

    const button = document.querySelector('.menu-button');
    button.classList.toggle('open');
}
