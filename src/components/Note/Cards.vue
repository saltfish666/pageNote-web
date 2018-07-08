    <template>
    <div class="container">
      <div class="row">
        <div class="col-sm">
          <p>notes is: {{notes}}</p>
          <p>{{notes[0]}}</p>
          <Card :note="notes[0]"/><!-- https://stackoverflow.com/questions/51231445/props-became-undefined-during-props -->
          <Card :note="this.notes[0]"/>
        </div>
      </div>
    </div>
    </template>

    <script type="text/javascript">
      import Card from './Card/Card.vue'
      export default {
        name: 'Card',
        props: ["notes"],
        components: {
          Card
        }
      }
    </script>
