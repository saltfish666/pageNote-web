<template>
    <div class="container">
        <Header :is_login="isLogin"></Header>
        <Note v-if="isLogin"  :isLogin:="isLogin"></Note>
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
        ifShowNote: false,
        isLogin: true
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
