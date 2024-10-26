// Burger menu functionality
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

// Toggle 'active' class on the navigation links and change burger icon to X
burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.textContent = burgerMenu.textContent === '✖' ? '☰' : '✖';
});

// Form submission functionality
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const formData = { name, email, message };
    
    // Save the form data to localStorage
    localStorage.setItem('contactFormData', JSON.stringify(formData));
    alert('Form submitted!');
});

// Mobile menu toggle functionality
const menuCheckbox = document.getElementById('menu-checkbox');
const menu = document.getElementById('menu');

// Toggle menu visibility based on checkbox status
menuCheckbox?.addEventListener('change', () => {
    menu.classList.toggle('show', menuCheckbox.checked);
});
