document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const userList = document.getElementById('user-list');
    const totalAmountElement = document.getElementById('total-amount');

    // Obtener datos de usuarios y viajes desde una API o cualquier otra fuente
    // En este ejemplo, usaremos datos estáticos simulados
    const usersData = [
        { nombre: 'Usuario 1', abordajes: 10, montoTotal: 100 },
        { nombre: 'Usuario 2', abordajes: 8, montoTotal: 80 },
        { nombre: 'Usuario 3', abordajes: 5, montoTotal: 50 },
    ];

    // Calcular el monto total de los viajes realizados
    const totalAmount = usersData.reduce((total, user) => total + user.montoTotal, 0);
    totalAmountElement.textContent = totalAmount + ' soles';

    // Ordenar la lista de usuarios por la cantidad de abordajes
    const sortedUsers = usersData.sort((a, b) => b.abordajes - a.abordajes);

    // Mostrar la lista de usuarios que más abordaron el vehículo junto con el monto total de viajes realizados
    sortedUsers.forEach(function(user) {
        const li = document.createElement('li');
        li.textContent = `${user.nombre} - Abordajes: ${user.abordajes}, Monto total: ${user.montoTotal} soles`;
        userList.appendChild(li);
    });

    // Manejar el clic en el botón de salida
    logoutBtn.addEventListener('click', function() {
        // Eliminar la sesión del localStorage
        localStorage.removeItem('isLoggedIn');
        // Eliminar el indicador de conductor del localStorage
        localStorage.removeItem('isDriver');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    });
});
