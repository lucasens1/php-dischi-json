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
            console.log(this.diskList);
            if(disk.isLiked){
                let pushedDisk = { ...disk };
                //Pusho nei liked_disks
                this.liked_disks.push(pushedDisk);
                console.log(this.liked_disks);
            }
		},
    },
}).mount("#app");