<?php
    $to = 'email@mail.ru';// почта куда будут приходить заявки
    $subject = 'Заявка с сайта';
    $message = '
            <html>
                <head>
                    <title>' . $subject . '</title>
                </head>
                <body>
                    <h2> Позвоните нам </h2>
                    <p>Телефон: ' . $_POST['phone'] . '</p>    
                </body>
            </html>';
    $headers = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: <email@mail.ru>\r\n";// Почта из которой будут исходить заяки (почта сервера)
    mail($to, $subject, $message, $headers);
?>