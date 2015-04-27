    <?php
require_once(__DIR__ . "/../model/config.php");

unset($_SESSION["auuthenticated"]);

session_destroy();
header("Location: " . $path . "index.php");

