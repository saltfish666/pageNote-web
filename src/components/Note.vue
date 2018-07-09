<template>
    <div class="container">
        <Cards :notes="notes" @change_note="changeNote"
               @del_note="delNote"/>
        <Add @add_note="addNote"/>
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
        notes:[]
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
      },
      addNote(note){
        this.notes.push(note)

        let token = 'ed99b727dffb4ae316acedff20578a3220342cae'
        let url = 'https://api.pagenote.xyz/note?'
        let params = {
          domain: note.domain,
          path: note.path,
          content: note.content
        }
        for(let key in params){
            url += `&${key}=${params[key]}`
        }
        let options = {
            method: 'post',
            url: url,
            headers: {
              Authorization: 'token ' + token
            }
        }
        axios(options)
        .then( res => {
          console.log(res)
        }).catch( err => {
          console.log(err)
        })
      },
      delNote (index) {
        this.notes.splice(index, 1)
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
