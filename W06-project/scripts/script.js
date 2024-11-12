// Burger menu toggle functionality
const burgerMenu = document.getElementById('burgerMenu');
const navLinks = document.getElementById('navLinks');

burgerMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burgerMenu.textContent = navLinks.classList.contains('active') ? '✖' : '☰';
});

// Form submission with local storage handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        const formData = { name, email, message };
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        alert('Form submitted successfully!');
    });
}
