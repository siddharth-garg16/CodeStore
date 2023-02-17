<template>
    <h1 class="form-heading">Sign Up</h1>
    <div class="register">
        <input type="text" v-model="name" placeholder="Enter Name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password" minlength="8">
        <button v-on:click="signUp">Sign Up</button>
    </div>
</template>

<script>
import axios from "axios"

export default{
    name: "SignUp",
    data(){
        return {
            name:"",
            email:"",
            password:""
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/user", {
                name:this.name,
                email:this.email,
                password:this.password
            })
            console.warn(result);
            if(result.status==201){
                alert("User Created!")
            }
            localStorage.setItem("user-info", JSON.stringify(result.data))
        }
    }
}
</script>

<style scoped>
.form-heading{
    font-size: 3em;
    letter-spacing: -0.05em;
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