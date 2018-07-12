<template>
    <div class="container">
        <Header :is_login="isLogin" :user="user"></Header>
        <Note v-if="isLogin"  :isLogin="isLogin"></Note>
        <!--<router-view/>-->
    </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Note from './components/Note.vue'

  import axios from 'axios'

  export default {
    name: 'App',
    data () {
      return {
        isLogin: false,
        user: {
          name: 'friend'
        }
      }
    },
    beforeMount () {
      let token = null

      // if there is new token in url
      // set to localStorage
      if (window.location.search) {
        token = window.location.search.split('token=')[1]
      }
      if (token) {
        localStorage.__token = token

        // new token mean it is good token
        // should call api immediately
        // user have default value
        this.isLogin = true
      }

      //test if localStorage has token
      if (!localStorage.__token){
        return null
      }

      // try to use token, (it may bad token)
      token = localStorage.__token
      let url = 'https://api.pagenote.xyz/user'
      let options = {
          method: 'get',
          url: url,
          headers: {
            Authorization: 'token ' + token
          }
      }
      axios(options)
      .then( res => {
        console.log(res)
        this.user = res.data
        this.isLogin = true
      }).catch( err => {
        console.log(err)
      })

    },
    components: {
      Note,
      Header
    }
  }
</script>

<style lang="less" scoped>
</style>
