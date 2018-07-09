<template>
    <div class="container">
        <Cards :notes="notes" @change_note="changeNote"/>
        <Add/>
    </div>
</template>

<script>
  import Add from './Note/Add.vue'
  import Cards from './Note/Cards.vue'
  import axios from 'axios'
  export default {
    name: 'Note',
    data () {
      return {
        notes:[],

        willAddDomain:null,
        willAddPath:null,
        willAddContent:null

      }
    },
    components: {
      Add,
      Cards
    },
    methods: {
      addNote () {
        //remote add
        this.notes.push({
          domain:this.willAddDomain,
          path:this.willAddPath,
          content:this.willAddContent
        })
      },
      changeNote(index, content){
        this.notes[index] = {
          domain: this.notes[index].domain,
          path: this.notes[index].path,
          content
        }
      }
    },
    created (){
      let token = 'ed99b727dffb4ae316acedff20578a3220342cae'
      let url = 'https://api.pagenote.xyz/note?'
 
      let options = {
        method: 'get',
        url: url,
        headers: {
          Authorization: 'token ' + token
        }
      }
      axios(options)
      .then( (res) => {
        console.log(res)
        this.notes = res.data
      }).catch( (err) => {
        console.log(err)
      })
    },
    updated () {

    }
  }
</script>

<style scoped>
.panel{
  margin-top: 5px;
  border-bottom: 1px solid #ccffff;
}
.panel-title{
  color:#4d94ff;
}
</style>
