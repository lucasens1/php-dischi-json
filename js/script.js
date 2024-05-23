const { createApp } = Vue;

createApp({
    data(){
        return{
            diskList : [],
            liked_disks : []
        }
    },
    created(){
        axios.get("http://localhost/boolean/php-dischi-json/server.php").then((r) => {
            /* console.log(r); */
            this.diskList = r.data.disks;
            console.log(this.diskList);
        });
    },
    methods : {
        likeUnlike(disk){
            disk.isLiked = !disk.isLiked;
            console.log(disk.isLiked);
            if(disk.isLiked){

            }
		},
    },
}).mount("#app");