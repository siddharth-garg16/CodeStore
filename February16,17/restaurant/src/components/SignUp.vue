<template>
  <h1 class="form-heading">Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" required />
    <input type="email" v-model="email" placeholder="Enter Email" required />
    <input type="password" v-model="password" placeholder="Enter Password" minlength="8" required />
    <button v-on:click="signUp">Sign Up</button>
    <span>Already registered with us? &nbsp;</span>
    <span><router-link to="/login">Login</router-link></span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      if (this.name && this.email && this.password) {
        let result = await axios.post("http://localhost:3000/user", {
          name: this.name,
          email: this.email,
          password: this.password,
        });

        if (result.status == 201) {
          alert("Signed up successfully!");
          localStorage.setItem("user-info", JSON.stringify(result.data));
          this.$router.push({ name: "LoggedHome" });
        }
      }else{
        alert("All fields are mandatory.")
      }
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "LoggedHome" });
    }
  },
};
</script>

<style scoped>
.form-heading {
  font-size: 3em;
  letter-spacing: -0.05em;
  margin-top: 50px;
}

.register input {
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

.register button {
  width: 310px;
  padding: 10px 30px;
  font-size: 1em;
  border: none;
  border-radius: 5px;
  background-color: rgb(97, 118, 78);
  color: white;
  font-weight: 500;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 15px;
}

.register button:hover {
  background-color: rgb(53, 94, 59);
  font-weight: 600;
}

.register a {
  color: rgb(97, 118, 78);
  font-weight: 500;
}
</style>
