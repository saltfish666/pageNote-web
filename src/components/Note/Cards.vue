<template>
<div class="container">
  <div v-for="(group, i) in notes_groups">
    <div class="row">
      <div class="col-sm">
       <Card :note="group[0]" :index="i" @change_note="change_note"/>
      </div>
      <div class="col-sm">
       <Card :note="group[1]" :index="i"/>
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
      }
    },
    components: {
      Card
    }
  }
</script>
