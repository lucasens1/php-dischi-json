const { createApp } = Vue;

createApp({
    data(){
        return{
            diskList : [],
            /* Da togliere */
            liked_disks : [],
            filtered_disks : [],
            option : "all",
            my_api : "http://localhost/boolean/php-dischi-json/server.php"
        }
    },
    created(){
        this.initializeData();
    },
    methods: {
        initializeData(){
            axios.get(this.my_api).then((r) => {
                /* console.log(r); */
                this.diskList = r.data.disks;
                this.liked_disks = r.data.likedisks;
                this.populateFilterDisks();
                console.log(this.filtered_disks);
                console.log(this.diskList);
                /* Da togliere */
                console.log(this.liked_disks);
            });
        },
        likeUnlike(i) {
            console.log(i);
            const data = {
                like: "toggle",
                disk_i: i
            };
            console.log(data);
            axios.post(this.my_api, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }).then((r) => {
                this.liked_disks = r.data.likedisks;
                console.log(this.liked_disks);
                this.populateFilterDisks();
            });
        },
        populateFilterDisks() {
            //Controllo se l'opzione è per i preferiti
            if (this.option === "liked_ones") {
                //filter per popolare filtered_disks solo se isLiked è true
                this.filtered_disks = this.diskList.filter(disk => disk.isLiked);
            } else {
                this.filtered_disks = this.diskList;
            }
        },
        handleChange(){
            console.log("Sto cambiando..");
            this.populateFilterDisks();
        }
    },
}).mount("#app");