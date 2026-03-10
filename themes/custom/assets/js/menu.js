function menu_toggle() {
    const menu = document.querySelector('.site-menu');
    menu.classList.toggle('open');

    const button = document.querySelector('button.menu');
    button.classList.toggle('open');
}
