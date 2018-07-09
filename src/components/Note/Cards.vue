<template>
<div class="container">
  <div v-for="(group, i) in notes_groups">
    <div class="row">
      <div class="col-sm">
       <Card :note="group[0]" :index="i * 2" 
             @change_note="change_note"  @del_note="delNote"/>
      </div>
      <div class="col-sm">
       <Card v-if="group[1]" :note="group[1]" :index="i * 2 + 1"
             @change_note="change_note"  @del_note="delNote"/>
      </div>
    </div>
  </div>
</div>
</template>

<script type="text/javascript">
  import Card from './Card/Card.vue'
  import groups from 'in-groups-of'
  export default {
    name: 'Cards',
    props: ["notes"],
    computed: {
      notes_groups:function() {
        return groups(this.notes,2)
      }
    },
    methods:{
      change_note(index,content){
        this.$emit("change_note",index,content)
      },
      delNote (index) {
        this.$emit('del_note', index)
      }
    },
    components: {
      Card
    }
  }
</script>
