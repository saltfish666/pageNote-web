<template>
    <header>
        <div v-if="is_login">
            <img src="/imgs/logo.png" class="img-fluid smaller">
            <span class="bigger">hello {{user.name}} {{isLogin}}</span>
        </div>
        <div v-else>
            <div class="alert alert-danger" role="alert">
              Please login to continue service!
            </div>
            <a href="https://github.com/login/oauth/authorize?client_id=40e9e869abab72c0da76&scope=public_repo">
              <span class="btn btn-primary">login with github</span>
            </a>
        </div>
    </header>
</template>

<script>
  export default {
    name: 'Note',
    props:['is_login'],
    data () {
      return {
        user:{
          name:"lishuai",
          email:"overwall2016@gmail.com"
        }
      }
    },
    methods: {
    },
    beforeMount () {
      console.log(this)
    },
  }
</script>

<style scoped>
.smaller{
  height: 120px;
}
.bigger{
  font-size: 40px;
  font-family: Caslon;
  margin-left: 6rem;
}

</style>
