<template>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header smaller-header">
          {{note.domain}} 
          <button @click="editable" class="btn btn-info smaller-btn">{{contentEditable ? "finish" : "edit"}}</button>
          <a :href="url">
              <button class="btn btn-visit smaller-btn">visit</button>
            </a>
        </div>
        <div class="card-body smaller-body">
          <h5 class="card-title smaller-title">{{note.path}}</h5>
          <p :class="{'edit': contentEditable,'card-text': true}" 
             :contenteditable="contentEditable">{{content}}</p>
        </div>
      </div>
</template>

<script type="text/javascript">
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
        return this.note.domain + '/' + this.note.path
      }
    },
    methods: {
      editable () {
        this.contentEditable = !this.contentEditable
        this.$emit("change_note",this.index,this.content)
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
    padding: 0.1rem 0.7rem;
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