<template lang="pug">
  div
    div
    cms-editor(v-bind:defaultMsg="txt" v-bind:index="0" v-on:ready="getUeditor")
    div
      button(v-on:click="getHtml") 获取 HTML
</template>
<script>
  import CmsEditor from './CmsEditor'

  export default {
    data() {
      return {
        ue: [],
        txt: 'aasdfasf'
      }
    },
    methods: {
      getUeditor(ue, index) {
        this.ue[index] = ue
      },
      getHtml() {
        console.log(this.ue[0].getContent())
      }
    },
    components: {
      CmsEditor
    }
  }
</script>
<style scoped lang="stylus" rel="stylesheet/stylus">
</style>
