<template>
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
        <div class="card-header">
          {{note.domain}} 
          <button @click="editable" class="btn btn-info">{{contentEditable ? "finish" : "edit"}}</button>
        </div>
        <div class="card-body">
          <h5 class="card-title">{{note.path}}</h5>
          <p class="card-text" :contenteditable="contentEditable">{{content}}</p>
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
    methods: {
      editable () {
        this.contentEditable = !this.contentEditable
        this.$emit("change_note",this.index,this.content)
      }
    }

	}
</script>