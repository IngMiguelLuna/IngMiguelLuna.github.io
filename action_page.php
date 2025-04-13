<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = htmlspecialchars($_POST['Name']);
    $email = htmlspecialchars($_POST['Email']);
    $subject = htmlspecialchars($_POST['Subject']);
    $message = htmlspecialchars($_POST['Message']);

    $to = "ing.miguel.luna.l@gmail.com";
    $headers = "From: $email\r\n" .
               "Reply-To: $email\r\n" .
               "X-Mailer: PHP/" . phpversion();

    $body = "Nombre: $name\nEmail: $email\nAsunto: $subject\n\nMensaje:\n$message";

    if (mail($to, $subject, $body, $headers)) {
        echo "<h1>Mensaje enviado exitosamente.</h1>";
    } else {
        echo "<h1>Error al enviar el mensaje. Inténtalo de nuevo más tarde.</h1>";
    }
}
?>