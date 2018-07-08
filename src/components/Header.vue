<template>
    <header>
        <div v-if="isLogin">
            <div>name:{{user.name}}</div>
            <div>email:{{user.email}}</div>
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
        isLogin:true,
        user:{
          name:"lishuia",
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
