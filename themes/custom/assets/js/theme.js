const LIGHT = 'light';
const DARK  = 'dark';

// === get/set preferred theme ===
function theme_preferred_get() {
    let stored = localStorage.getItem('theme');
    if(stored)
        return stored;

    // try to read the preferred color scheme
    if(window.matchMedia) {
        if(window.matchMedia('(prefers-color-scheme: dark)').matches)
            return DARK;
        else
            return LIGHT;
    }

    // default theme
    return LIGHT;
}

function theme_preferred_set(theme) {
    localStorage.setItem('theme', theme);
}

// === get/set current theme ===
function theme_get() {
    return document.body.className;
}

function theme_set(theme) {
    document.body.className = theme;
}

function theme_toggle() {
    let new_theme = (theme_get() == DARK ? LIGHT : DARK);

    theme_set(new_theme);
    theme_preferred_set(new_theme);
}
