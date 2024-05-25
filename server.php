<?php
include_once "./partials/functions.php";

# 1. Estrapolo i dati (Array) nel JSON
$disk_list_string = file_get_contents("dischi.json");
$disk_list = json_decode($disk_list_string, true);
$disk_liked = [];


# 2. Controllo la corretta estrazione dei dati
/* var_dump($disk_list); */

# BONUS 1 Like Aggiungo una nuova proprietà isLiked ad ogni disco
for( $i = 0; $i < count($disk_list); $i++){
    if(!isset($disk_list[$i]["isLiked"])){
        if($i === 1){
            #Imposto per DEBUG il secondo true
            $disk_list[$i]["isLiked"] = true;
        }else{
            $disk_list[$i]["isLiked"] = false;
        }
    }
}

for( $i = 0; $i < count($disk_list); $i++ ){
    if($disk_list[$i]["isLiked"] === true){
        # Aggiungo all'array
        $disk_liked[] = $disk_list[$i];
    }
}

#------------------------
# BONUS 2 creo un array che popolo con quelli con isLiked True
# Non sposta ma copia !

# Controllo se in post arriva un like
if(isset($_POST["like"]) && $_POST["like"] === "toggle"){
    # Indice
    $disk_index = $_POST["disk_i"];

    # Funzione toggle_like, per mettere e togliere il like
    $disk_list = toggle_like($disk_index, $disk_list);
    
    # Inserisco in file
    file_put_contents("dischi.json", json_encode($disk_list));

    foreach($disk_list as $disk){
        if($disk["isLiked"]){
            $disk_liked[] = $disk;
        }
    }
}
# 3. Creo un'array associativo che in JS diverrà Object
$disk_data = [
    "disks" => $disk_list,
    "likedisks" => $disk_liked
];

# 4. Controllo corretta assegnazione
/* var_dump($disk_data); */

# 5. Passo Array Associativo in JSON
$JSON_disks = json_encode($disk_data);

# 6. Li invio tramite header()
header('Content-Type: application/json');
echo $JSON_disks;
?>