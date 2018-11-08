
<template>
    <div>

        <div>This is the Joke Table</div>

        <v-data-table
            :headers = "headers"
            :items = "getAllJokes"
            class = "elevation-1">

            <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td class="text-xs-left">{{ props.item.joke }}</td>
                    <td class="text-xs-left">{{ props.item.id }}</td>
            </template>
        </v-data-table>
    </div>
</template>

<script>
export default {
  data () {
    return {
        headers: [
            {
            text: 'Jokes',
            align: 'right',
            sortable: false,
            value: 'name'
            },
            { text: 'Jokes', value: 'jokes' },
            { text: 'ID', value: 'id' },

        ]
    }
    
  },
  methods: {
    getJokesFromStore: function() {
        console.log([this.$store.state.jokes, this.$store.state.jokeID]);
        return([this.$store.getters.getJoke, this.$store.state.jokeID])
    }

  },
  computed: {
      getOneJoke: function() {
        console.log([this.$store.getters.getJoke, this.$store.getters.getJokeID]);
        return([{joke: this.$store.getters.getJoke, id: this.$store.getters.getJokeID}])
      },
      getAllJokes: function() {
          return (this.$store.getters.getAllJokes);

      }

  }


}


</script>

