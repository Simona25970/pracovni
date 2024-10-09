<?php

if ($_SERVER["REQUEST_METHOD"] === "POST"){
    $jmeno_a_prijmeni = $_POST["jmeno_a_prijmeni"];
    $email = $_POST["email"];
    $zprava = $_POST["zprava"];

    echo $jmeno_a_prijmeni;
    echo "<br>";
    echo $email;
    echo "<br>";
    echo $zprava;
}

?>