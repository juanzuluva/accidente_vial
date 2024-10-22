// Scroll suave para los enlaces del menú de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de contacto
document.getElementById('contact-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre === "" || email === "" || mensaje === "") {
        alert("Por favor, completa todos los campos obligatorios.");
        return;
    }

    if (!validateEmail(email)) {
        alert("Por favor, introduce una dirección de correo electrónico válida.");
        return;
    }

    alert("Gracias por contactarnos, " + nombre + ". Tu mensaje ha sido enviado.");
});

// Validación del correo electrónico
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
