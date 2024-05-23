const { createApp } = Vue;

createApp({
    data(){
        return{
            diskList : []
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
        likeUnlike(isDisk){
            isDisk.isLiked = !isDisk.isLiked;
            console.log(isDisk.isLiked);
        }
    }
}).mount("#app");