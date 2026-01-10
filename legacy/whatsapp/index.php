<?php

$text = $_GET["text"];

echo $text;

$redirect_url = "https://wa.me/5491169952960?text=" . $text;

header("Location: $redirect_url");

exit;

?>