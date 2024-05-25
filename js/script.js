const { createApp } = Vue;

createApp({
    data(){
        return{
            diskList : [],
            liked_disks : [],
            my_api : "http://localhost/boolean/php-dischi-json/server.php"
        }
    },
    created(){
        axios.get(this.my_api).then((r) => {
            /* console.log(r); */
            this.diskList = r.data.disks;
            this.liked_disks = r.data.likedisks;
            console.log(this.diskList);
            console.log(this.liked_disks);
        });
    },
    methods: {
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
            });
        },
    },
}).mount("#app");