document.getElementById('reserva-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar el formulario
    const nombre = document.getElementById('nombre');
    const email = document.getElementById('email');
    const fecha = document.getElementById('fecha');

    if (nombre.value.trim() === '') {
        alert('Por favor, ingrese su nombre');
        return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value)) {
        alert('Por favor, ingrese un email válido');
        return;
    }

    if (fecha.value === '') {
        alert('Por favor, seleccione una fecha');
        return;
    }

    // Simulación de envío de reserva
    alert('¡Reserva realizada con éxito! Nos pondremos en contacto pronto.');
    this.reset();
});