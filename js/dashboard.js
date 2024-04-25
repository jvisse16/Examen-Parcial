document.addEventListener('DOMContentLoaded', function() {
    const logoutBtn = document.getElementById('logout-btn');
    const tripsList = document.getElementById('trips-list');
    const viewAllBtn = document.getElementById('view-all-btn');

    // Manejar el clic en el botón de salida
    logoutBtn.addEventListener('click', function() {
        // Eliminar la sesión del localStorage
        localStorage.removeItem('isLoggedIn');
        // Redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    });

    // Verificar si el usuario está autenticado al cargar la página
    const isLoggedIn = localStorage.getItem('isLoggedIn');

    if (!isLoggedIn) {
        // Si el usuario no está autenticado, redirigir a la página de inicio de sesión
        window.location.href = 'login.html';
    } else {
        // Datos de ejemplo de viajes del usuario
        const trips = [
            { duracion: '1 hora', fecha: '2024-04-23', origen: 'Lima', destino: 'Cusco', conductor: 'Conductor 1' },
            { duracion: '45 minutos', fecha: '2024-04-22', origen: 'Arequipa', destino: 'Trujillo', conductor: 'Conductor 2' },
            { duracion: '2 horas', fecha: '2024-04-21', origen: 'Piura', destino: 'Iquitos', conductor: 'Conductor 3' },            
            { duracion: '1 hora', fecha: '2024-04-23', origen: 'Lima', destino: 'Cusco', conductor: 'Conductor 1' },
            { duracion: '45 minutos', fecha: '2024-04-22', origen: 'Arequipa', destino: 'Trujillo', conductor: 'Conductor 2' },
            { duracion: '2 horas', fecha: '2024-04-21', origen: 'Piura', destino: 'Iquitos', conductor: 'Conductor 3' },
            { duracion: '1.5 horas', fecha: '2024-04-20', origen: 'Chiclayo', destino: 'Tacna', conductor: 'Conductor 4' },
            { duracion: '3 horas', fecha: '2024-04-19', origen: 'Huancayo', destino: 'Puno', conductor: 'Conductor 5' },
            { duracion: '2.5 horas', fecha: '2024-04-18', origen: 'Ica', destino: 'Tarapoto', conductor: 'Conductor 6' },
            { duracion: '2 horas', fecha: '2024-04-17', origen: 'Cajamarca', destino: 'Chimbote', conductor: 'Conductor 7' }
            
        ];

        // Función para mostrar los viajes
        function showTrips(tripsArray) {
            // Limpiar la lista antes de agregar nuevos elementos
            tripsList.innerHTML = '';

            // Mostrar los viajes en la lista
            tripsArray.forEach(function(trip) {
                const li = document.createElement('li');
                li.textContent = `${trip.fecha} - ${trip.origen} a ${trip.destino}, ${trip.duracion}, Conductor: ${trip.conductor}`;
                tripsList.appendChild(li);
            });
        }

        // Mostrar los últimos 4 viajes al cargar la página
        const last4Trips = trips.slice(Math.max(trips.length - 4, 0));
        showTrips(last4Trips);

        // Manejar el clic en el botón "Ver más"
        viewAllBtn.addEventListener('click', function() {
            // Mostrar todos los viajes
            showTrips(trips);
        });
    }
});
