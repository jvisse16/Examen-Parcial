document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form');
    const logoutBtn = document.getElementById('logout-btn');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const userType = document.getElementById('user-type').value;

        if (username === 'usuario' && password === '123') {
            // Guardar la sesión en localStorage
            localStorage.setItem('isLoggedIn', true);
            if (userType === 'conductor') {
                // Marcar al usuario como conductor en localStorage
                localStorage.setItem('isDriver', true);
                // Redirigir al dashboard del conductor
                window.location.href = 'dashboardconductor.html';
            } else {
                // Redirigir al dashboard del usuario regular
                window.location.href = 'dashboard.html';
            }
        } else {
            alert('Credenciales incorrectas. Por favor, inténtalo de nuevo.');
        }
    });

    // Manejar el clic en el botón de salida
    logoutBtn.addEventListener('click', function() {
        // Eliminar la sesión del localStorage
        localStorage.removeItem('isLoggedIn');
        // Eliminar el indicador de conductor del localStorage
        localStorage.removeItem('isDriver');
        // Ocultar el botón de salida
        logoutBtn.style.display = 'none';
        // Redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    });

});
