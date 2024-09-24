const STORAGE_KEY = "theme";
const THEME_CLASS = "dark";

const LIGHT = 'light';
const DARK  = 'dark';

// === get/set preferred theme ===
function theme_preferred_get() {
    let result = localStorage.getItem(STORAGE_KEY);

    if(result == null) {
        // try to read the preferred color scheme
        if(window.matchMedia) {
            if(window.matchMedia('(prefers-color-scheme: dark)').matches)
                result = DARK;
            else
                result = LIGHT;
        } else {
            // default (media queries not supported)
            result = LIGHT;
        }
    }

    return result;
}

function theme_preferred_set(theme) {
    localStorage.setItem(STORAGE_KEY, theme);
}

// === get/set current theme ===
function theme_get() {
    if(document.body.classList.contains(THEME_CLASS))
        return DARK;
    return LIGHT;
}

function theme_set(theme) {
    if(theme == DARK)
        document.body.classList.add(THEME_CLASS);
    else
        document.body.classList.remove(THEME_CLASS);
}

function theme_toggle() {
    let new_theme = (theme_get() == DARK ? LIGHT : DARK);

    theme_set(new_theme);
    theme_preferred_set(new_theme);
}
