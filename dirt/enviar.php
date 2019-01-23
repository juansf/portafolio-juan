<?php
    // llamandio a los campo
    $nombre = $_post['nombre'];

    $correo = $_post['correo'];

    $mensaje = $_post['mensaje'];

 // datos del correo

    $detinatario = "juansf80@gmail.com";

    $asunto = "contacto desde la web"

    $carta = "De: $nombre \n";
    $carta .= "Correo: $correo \n";
    $carta .= "Mensaje: $mensaje" 

    //enviando mensaje

    mail($detinatario, $asunto, $carta);
    header("Location:envio.html")
?>