<template>
  <h1 class="form-heading">Log In</h1>
  <div class="login">
    <input type="email" v-model="email" placeholder="Enter Email" required />
    <input
      type="password"
      v-model="password"
      placeholder="Enter Password"
      minlength="8"
      required
    />
    <button v-on:click="logIn">Log In</button>
    <span>Don't have an account yet? &nbsp;</span>
    <span><router-link to="/sign-up">SignUp</router-link></span>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "LogIn",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async logIn() {
      if (this.email && this.password) {
        let result = await axios.get(
          `http://localhost:3000/user?email=${this.email}&passowrd=${this.password}`
        );

        if (result.status == 200 && result.data.length) {
          localStorage.setItem("user-info", JSON.stringify(result.data[0]));
          this.$router.push({ name: "LoggedHome" });
        }
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
.login input {
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
.login button {
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
.login button:hover {
  background-color: rgb(53, 94, 59);
  font-weight: 600;
}
.login a {
  color: rgb(97, 118, 78);
  font-weight: 500;
}
</style>
