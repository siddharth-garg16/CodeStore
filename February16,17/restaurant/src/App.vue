<template>
  <NavBar />
  <router-view />
  <BaseFoot />
</template>

<script>
import NavBar from "./components/NavBar.vue"
import BaseFoot from "./components/BaseFoot.vue"

export default {
  name: 'App',
  components: {
    NavBar,
    BaseFoot
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
