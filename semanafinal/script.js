// Función para mostrar formulario de contacto
function showContactForm() {
    document.getElementById('contactForm').style.display = 'block';
}

// Función para ocultar formulario de contacto
function hideContactForm() {
    document.getElementById('contactForm').style.display = 'none';
}

// Event Listener para botón de contacto
document.getElementById('contactButton').addEventListener('click', showContactForm);
document.getElementById('closeButton').addEventListener('click', hideContactForm);
