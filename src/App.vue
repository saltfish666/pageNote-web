<template>
    <div class="container">
        <!-- <Header></Header> -->
        <Note></Note>
        <!--<router-view/>-->
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Note from './components/Note.vue'

  import HelloWorld from './router'

  export default {
    name: 'App',
    data () {
      return {
        ifShowNote: false
      }
    },
    router:HelloWorld,
    methods: {
      changeNoteShowState () {
        this.ifShowNote = !this.ifShowNote
      }
    },
    components: {
      Note,
      Header
    }
  }
</script>

<style lang="less" scoped>
</style>
