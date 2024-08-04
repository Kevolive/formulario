document.getElementById('formRegistro').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita que se envíe el formulario

    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    if (password !== confirmPassword) {
        alert('Las contraseñas no coinciden');
    } else {
        alert('Registro exitoso');
        // Aquí puedes proceder con el envío del formulario
        // this.submit();
    }
});