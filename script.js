// Simular BD
let usuariosRegistrados = [{userEmail: 'admin@admin.com',userPassword: 'admin'}, {userEmail: 'user@user.com',userPassword: 'user'}];

document.getElementById('formLogin').addEventListener('submit', function(e){
    e.preventDefault();

    // Obtener los valores usuario y contraseña
    let userEmail = document.getElementById('userEmail').value;
    let userPassword = document.getElementById('userPassword').value;

    // Verificar que las credenciales esten en la BD
    let usuarioValido =usuariosRegistrados.find(function(user){
        return user.userEmail === userEmail && user.userPassword === userPassword;
    });

    if (usuarioValido) {
        window.location.href = 'user.html';
    } else {
        let errorMessage = document.getElementById('error-message');
        errorMessage.textContent = 'Usuario o contraña incorrecto. Por favor, inténtalo de nuevo.'
    }
})