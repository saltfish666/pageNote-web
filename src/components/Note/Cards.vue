<template>
<div class="container">
  <div v-for="group in notes_groups">
    <div class="row">
      <div class="col-sm">
       <Card :note="group[0]"/>
      </div>
      <div class="col-sm">
       <Card :note="group[1]"/>
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
    components: {
      Card
    }
  }
</script>
