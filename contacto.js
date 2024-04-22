// Capturamos el evento submit del formulario
document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitamos que el formulario se envíe automáticamente

    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;

    // Validamos los campos
    if(nombre === '') {
        mostrarError('nombre', 'Por favor, ingresa tu nombre.');
        return false;
    }
    if(apellido === '') {
        mostrarError('apellido', 'Por favor, ingresa tu apellido.');
        return false;
    }
    if(correo === '') {
        mostrarError('correo', 'Por favor, ingresa tu correo.');
        return false;
    }
    if(asunto === '') {
        mostrarError('asunto', 'Por favor, ingresa un asunto.');
        return false;
    }
    if(mensaje === '') {
        mostrarError('mensaje', 'Por favor, ingresa un mensaje.');
        return false;
    }

    // Si todos los campos están completos, mostramos un mensaje de éxito
    alert('Formulario enviado con éxito.');
    // Aquí puedes añadir más validaciones o enviar el formulario al servidor
});

// Función para mostrar mensajes de error junto a los campos
function mostrarError(campo, mensaje) {
    var errorElement = document.getElementById(campo + '-error');
    errorElement.textContent = mensaje;
}
