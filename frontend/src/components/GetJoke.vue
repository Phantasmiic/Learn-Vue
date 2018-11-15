<template>
  <div>
    <header>
      <span>
          <h1>Here to get JOKES!</h1>
      </span>
    </header>
    <main>
        <h2>Click the button to get Random jokes</h2>
        <div>
            <v-btn color="info">
                <div v-on:click="getJokes">Get Jokes</div>
            </v-btn>
            <v-btn v-bind="style">
                <div v-on:click="deleteOldestJoke">Delete Oldest Joke</div>
            </v-btn>
            <div> {{ this.$store.state.jokes }} </div>
            <div> {{ this.$store.state.jokeID }} </div>
            <div> {{ this.$store.state.completeJokes.length }} </div>


        </div>

        <div v-if="loading">
          ...Loading.....
        </div>
        <div v-else>
            Updated.
        </div>

      <div class="wrapper">
        ... 
      </div>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "app",
  data() {
    return {
      //need to fix this, not good solution
      jokes: [{ joke: "Data has not been fetched yet", id: -1 }],
      loading: false
      //why below not reactive idk
      //storeLength: this.$store.state.completeJokes.length > 1
    };
  },
  methods: {
    updateJoke_store: function() {
      this.$store.commit("updateJoke", [this.jokes[0].joke, this.jokes[0].id]);
    },
    getJokes: function() {
      console.log(this.jokes);
      this.loading = true;
      axios.get("http://api.icndb.com/jokes/random/10").then(
        response => {
          this.loading = false;
          this.jokes = response.data.value;
        },
        error => {
          this.loading = false;
        }
      );

      //update store
      this.updateJoke_store();
    },
    deleteOldestJoke: function() {
      this.$store.commit("deleteOldestJoke");
    }
  },
  computed: {
    style() {
      return {
        //'disabled': !this.storeLengthTest,
        color: this.storeLengthTest ? "info" : "warning"
      };
    },
    storeLengthTest() {
      //now this is reactive for some reason
      return this.$store.state.completeJokes.length > 3;
    }
  }
};
</script>
