<?php

function toggle_like($index, $disk_list) {
    # Aggiorno il valore 
    $disk_list[$index]["isLiked"] = !$disk_list[$index]["isLiked"];
    # Restituisco
    return $disk_list;
}
?>