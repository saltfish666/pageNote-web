<template>
    <header>
        <div v-if="isLogin">
            <div>hello {{user.name}}</div>
        </div>
        <div v-else>
            <a href="https://github.com/login/oauth/authorize?client_id=40e9e869abab72c0da76&scope=public_repo"><span>登录</span></a>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'Note',
    data () {
      return {
        isLogin:false,
        user:{
          name:"lishuai",
          email:"overwall2016@gmail.com"
        }
      }
    },
    methods: {
    },
    beforeMount () {

    },
  }
</script>

<style scoped>

</style>
