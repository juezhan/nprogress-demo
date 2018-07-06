<template lang="pug">
  div
    router-link(v-bind:to="{path:'/'}") Hello World
    br
    router-link(v-bind:to="{path:'/Editor'}") Editor
    br
    router-link(v-bind:to="{path:'/PageA'}") PageA
    br
    router-link(v-bind:to="{path:'/PageB'}") PageB
    br
    router-link(v-bind:to="{path:'/PageC'}") PageC
    br
    router-link(v-bind:to="{path:'/PageD'}") PageD
    br
</template>

<script type="text/ecmascript-6">
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
