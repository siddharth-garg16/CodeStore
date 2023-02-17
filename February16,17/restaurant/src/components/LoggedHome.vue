<template>
  <div class="top">
    <h1>Welcome to Good Taste!</h1>
    <a v-on:click="logOut" href="#"><img src="../assets/logout-icon.png" alt="logout"></a>
  </div>
  <div class="content">
    <RightCard cuisine="Mexican"/>
    <LeftCard cuisine="Italian"/>
    <RightCard cuisine="Indian"/>
  </div>
  <div class="lifter"></div>
</template>

<script>
import RightCard from "./RightCard.vue"
import LeftCard from "./LeftCard.vue"

export default {
    name: "LoggedHome",
    components:{
        RightCard,
        LeftCard
    },
    methods: {
        logOut() {
            localStorage.clear();
            this.$router.push({ name: "LogIn" });
        }
    },
    mounted() {
        let user = localStorage.getItem("user-info");
        if (!user) {
            this.$router.push({ name: "LogIn" });
        }
    }
};
</script>

<style scoped>
.top{
    display: flex;
    align-items: center;
    justify-content: center;
}
.top img{
    height: 40px;
}
.top h1{
    font-size: 3em;
    width: 95%;
}
.content{
    width: 90vw;
    margin-left: auto;
    margin-right: auto;
    padding-left: 50px;
    padding-right: 50px;
    margin-top: 50px;
    padding-block: 50px;
    box-shadow: rgba(0, 0, 0, 0.2) 7px 5px 7px 2px;
    border-radius: 10px;
    background-color: rgba(40,44,52,0.9);
}
.lifter{
    height:200px;
}
</style>
