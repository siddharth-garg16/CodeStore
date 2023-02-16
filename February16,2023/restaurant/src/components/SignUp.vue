<template>
    <img class="logo" src="../assets/restaurant-logo.webp"/>
    <h1>Sign Up</h1>
    <div class="register">
        <input type="text" placeholder="Enter Name">
        <input type="email" placeholder="Enter Email">
        <input type="password" placeholder="Enter Password">
        <button>Sign Up</button>
    </div>
</template>

<script>
export default{
    name: "SignUp"
}
</script>

<style>
.logo{
    height: 200px;
    width: 200px;
}
.register input{
    width: 300px;
    height: 30px;
    padding-left: 10px;
    display: block;
    margin-bottom: 20px;
    border: 1px solid rgb(150, 150, 150);
    border-radius: 5px;
    margin-left: auto;
    margin-right: auto;
}
.register button{
    width: 310px;
    padding: 10px 30px;
    font-size: 1em;
    border: none;
    border-radius: 5px;
    background-color: rgb(97,118,78);
    color: white;
    font-weight: 500;
    cursor: pointer;
}
.register button:hover{
    background-color: rgb(53, 94, 59);
    font-weight: 600;
}
</style>