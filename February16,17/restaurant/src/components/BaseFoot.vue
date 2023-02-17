<template>
  <div class="foot">
    <h1>Good Taste</h1>
    <a href="https://facebook.com" target="_blank"
      ><img src="../assets/fb.png" alt="facebook"
    /></a>
    <a href="https://twitter.com" target="_blank"
      ><img src="../assets/ig.png" alt="instagram"
    /></a>
    <a
      href="https://www.google.com/maps/@28.6129167,77.2273157,17z"
      target="_blank"
      ><img src="../assets/maps.png" alt="maps"
    /></a>
  </div>
</template>

<script>
export default {
  name: "BaseFoot",
};
</script>

<style scoped>
.foot {
  background-color: #61764e;
  color: white;
  position: fixed;
  bottom: 0;
  width: 100%;
  padding-block: 10px;
}
.foot h1 {
  font-size: 2em;
  font-family: "Julee", cursive;
}
.foot img {
  height: 30px;
  margin-left: 10px;
  margin-right: 10px;
}
</style>
