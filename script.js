
/*Crea una funcion de los desplazamientos de las imagenes*/
function createSlider(sliderId) {
    // JavaScript para el carrusel de imágenes
    const images = document.querySelectorAll(`#${sliderId} .slider-image`);
    let currentIndex = 0;

    function showNextImage() {
            // Oculta la imagen actual
        images[currentIndex].classList.remove('active');
            // Calcula el siguiente índice
        currentIndex = (currentIndex + 1) % images.length;
            // Muestra la siguiente imagen
        images[currentIndex].classList.add('active');
    }
// Cambia la imagen cada 3 segundos
    setInterval(showNextImage, 2500);
}

        // Crear carruseles para las 3 secciones
        createSlider('slider1');
        createSlider('slider2');
        createSlider('slider3');

        // Show alert when contact button is clicked
function showAlert() {
    alert('Se esta trabajando en un mejor futuro por el momento no podemos atenderte');
}

function scrollToPortfolio() {
    document.getElementById('blog container').scrollIntoView({ behavior: 'smooth' });
}




    // Función de login para administrador
    function loginAdmin(event) {
        event.preventDefault(); // Prevenir el envío del formulario
        const adminEmail = document.getElementById('admin-email').value;
        const adminPassword = document.getElementById('admin-password').value;

        // Verificar si el email y la contraseña son correctos
        if (adminEmail === "UDGMEDIGITAL@ejemplo.com" && adminPassword === "123") {
            window.location.href = 'Mainpage.html'; // Redirigir a la página del admin
        } else {
            alert("Credenciales de administrador incorrectas");
        }
    }
 