<template>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header smaller-header">
          {{note.domain}} 
          <button @click="editable" class="btn btn-info smaller-btn">{{contentEditable ? "finish" : "edit"}}</button>
          <a :href="url" target="_blank">
              <button class="btn btn-visit smaller-btn">visit</button>
            </a>
          <button @click="delNote" class="btn btn-danger smaller-btn">delete</button>
        </div>
        <div class="card-body smaller-body">
          <h5 class="card-title smaller-title">{{note.path}}</h5>
          <p :class="{'edit': contentEditable,'card-text': true}" 
             :contenteditable="contentEditable">{{content}}</p>
        </div>
      </div>
</template>

<script type="text/javascript">
  import axios from 'axios'
	export default {
		name: 'Card',
		props: ["note", "index"],
    data(){
      return {
        contentEditable: false,
        content: this.note.content
      }
    },
    computed:{
      url: function(){
        if(/http:/.test(this.note.domain)){
          return this.note.domain + this.note.path
        } else {
          return 'http://' + this.note.domain + this.note.path
        }
      }
    },
    methods: {
      editable () {
        this.contentEditable = !this.contentEditable
        this.$emit("change_note",this.index,this.content)
      },
      delNote (e) {
        e.preventDefault()

        let token = 'ed99b727dffb4ae316acedff20578a3220342cae'
        let url = 'https://api.pagenote.xyz/note?'
        let params = {
          domain: this.note.domain,
          path: this.note.path
        }
        for(let key in params){
            url += `&${key}=${params[key]}`
        }
        let options = {
            method: 'delete',
            url: url,
            headers: {
              Authorization: 'token ' + token
            }
        }
        this.$emit('del_note', this.index)
        axios(options)
        .then( res => {
          console.log(res)
        }).catch( err => {
          console.log(err)
        })
      }
    }

	}
</script>
<style type="text/css">
  .edit {
    background-color: white;
    color: black;
  }
  .smaller-btn {
    padding: 0rem 0.2rem;
  }
  .smaller-header {
    padding: 0.4rem 0.4rem;
  }
  .smaller-body {
    padding: 0.6rem;
  }
  .smaller-title {
    margin-bottom: 0.3rem;
  }
  .btn-visit {
    color: #fff;
    background-color: #00ccff;
    border-color: #00ccff;
  }
</style>