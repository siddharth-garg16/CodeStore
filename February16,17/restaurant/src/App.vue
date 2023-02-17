<template>
  <NavBar />
  <SignUp />
  <LoggedHome />
  <BaseFoot />
</template>

<script>
import SignUp from "./components/SignUp.vue"
import NavBar from "./components/NavBar.vue"
import BaseFoot from "./components/BaseFoot.vue"
import LoggedHome from "./components/LoggedHome.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    BaseFoot,
    SignUp,
    LoggedHome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
