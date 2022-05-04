<template>
  <div><router-view></router-view></div>
</template>
<script>

export default {
  name: 'App',
}

</script>
<style>
/* Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+HK&family=Sawarabi+Mincho&family=Yomogi&display=swap');

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  height: 100%;
}

#app {
  font-size: 1.2rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #abb2bf;
  background: #282c34;
  font-family: 'Anonymous Pro', monospace;  
}

</style>
