const { createApp } = Vue;

createApp({
    data(){
        return{
            diskList : [],
            isFav : false
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

    }
}).mount("#app");