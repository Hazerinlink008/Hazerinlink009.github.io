let myslq = require ("mysql");

host = "localhost";
username = "root";
dbname = "clientes";
password = "";

$conexion = mysqli_connect($host, $username, $password, $dbname);

if (mysqli_connect_error()) {
  die("Error de conexión: " . mysqli_connect_error());
}