// script.js

// Function to dynamically load a CSS file
function loadCSS(url) {
    var link = document.getElementById('main-styles');
    link.href = url;
}

// Function to toggle between light and dark mode
function toggleTheme() {
    var currentTheme = document.getElementById('main-styles').getAttribute('href');
    if (currentTheme === 'light.css') {
        loadCSS('dark.css');
        localStorage.setItem('theme', 'dark');
    } else {
        loadCSS('light.css');
        localStorage.setItem('theme', 'light');
    }
}

// Load theme from localStorage
window.addEventListener('load', () => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    loadCSS(savedTheme + '.css');
});

// Add event listener to the button
document.getElementById('toggle-theme').addEventListener('click', toggleTheme);
