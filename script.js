// script.js

// Function to dynamically load a CSS file
function loadCSS(url) {
    var link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = url;
    document.head.appendChild(link);
}

// Load the reset.css file
loadCSS('styles.css');
