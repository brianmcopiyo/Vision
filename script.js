// script.js

// Function to dynamically load a theme CSS file
function loadThemeCSS(url) {
    var link = document.getElementById('theme-styles');
    link.href = url;
}

// Function to toggle between light and dark mode
function toggleTheme() {
    var currentTheme = document.getElementById('theme-styles').getAttribute('href');
    if (currentTheme === 'light.css') {
        loadThemeCSS('dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        loadThemeCSS('light.css');
        localStorage.setItem('theme', 'light');
    }
}

// Load theme from localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    loadThemeCSS(savedTheme + '.css');
});

// Add event listener to the button
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
