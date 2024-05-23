<?php
include_once "./partials/functions.php";
# 1. Estrapolo i dati (Array) nel JSON
$disk_list_string = file_get_contents("dischi.json");
$disk_list = json_decode($disk_list_string, true);
# 2. Controllo la corretta estrazione dei dati
/* var_dump($disk_list); */
# 3. Creo un'array associativo che in JS diverrà Object
$disk_data = [
    "disks" => $disk_list
];
# 4. Controllo corretta assegnazione
/* var_dump($disk_data); */
# 5. Passo Array Associativo in JSON
$JSON_disks = json_encode($disk_data);
# 6. Li invio tramite header()
header('Content-Type: application/json');
echo $JSON_disks;
?>