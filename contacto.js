function validarFormulario() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var correo = document.getElementById('correo').value;
    var asunto = document.getElementById('asunto').value;
    var mensaje = document.getElementById('mensaje').value;
    if(nombre === '' || apellido === '' || correo === '' || asunto === '' || mensaje === '') {
        alert('Por favor, rellena todos los campos.');
        return false;
    }
    alert('Formulario enviado con éxito.');
    // Aquí puedes añadir más validaciones o enviar el formulario
}