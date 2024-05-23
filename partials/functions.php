<?php
# Funzione che prende l'array contenenti i dischi e controlla se quest'ultimi abbiano isLiked True or false
function liked_disk($disk_array){
    $liked_disk = [];
    foreach($disk_array as $disk){
        if($disk['isLiked']){
            $liked_disk[] = $disk;
        }
    }
    return $liked_disk;
}
?>