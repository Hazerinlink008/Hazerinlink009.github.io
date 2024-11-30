<?php
    $host = "localhost";
    $username = "root";
    $dbname = "clientes";
    $password = "";

    $conexion = mysqli_connect($host, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Error en la conexión a la base de datos: " . $conn->connect_error);
    }
    
// Obtener los datos del formulario
$nombre = $_POST['nombre'];
$domicilio = $_POST['domicilio'];
$telefono = $_POST['telefono'];
$email = $_POST['email'];
$comentarios = $_POST['comentarios'];




// Validación de los datos (opcional, pero recomendable)
if (empty($nombre) || empty($domicilio) || empty($telefono) || empty($email) || empty($comentarios)) {
    die("Por favor, completa todos los campos del formulario.");
}

// Evitar inyecciones SQL (recomendado)
$nombre = $conn->real_escape_string($nombre);
$domicilio = $conn->real_escape_string($domicilio);
$telefono = $conn->real_escape_string($telefono);
$email = $conn->real_escape_string($email);
$comentarios = $conn->real_escape_string($comentarios);


// Preparar la consulta SQL
$sql = "INSERT INTO clientes (nombre, domicilio, telefono, email, comentarios) 
        VALUES ('$nombre', '$domicilio', '$telefono', '$email', '$comentarios')";

// Ejecutar la consulta
if ($conn->query($sql) === TRUE) {
    echo "Datos insertados correctamente";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Cerrar conexión
$conn->close();
?>
