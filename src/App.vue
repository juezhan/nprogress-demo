<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
</style>
<style lang="stylus" rel="stylesheet/stylus">
  #nprogress
    .bar
      background #660000
  #nprogress
    .peg
      box-shadow 0 0 20px #37cb00, 0 0 5px #e4d300
</style>
