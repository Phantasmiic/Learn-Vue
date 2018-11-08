<template>
  <div>
    <header>
      <span>Handling Ajax Request with Axios in Vue</span>
    </header>
    <main>
        <h2>Click the button to get Random jokes</h2>
        <div>
            <button id="btn" class="" v-on:click="getJokes">Get Jokes</button>
            <div> {{ this.$store.state.joke }} </div>
            <div> {{ this.$store.state.jokeID }} </div>

        </div>

        <div v-if="loading">
          Loading.....
        </div>

      <div class="wrapper">
        ... 
      </div>
    </main>
  </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: 'app',
        data () {
            return {
                jokes: [{"joke": "Data has not been fetched yet", "id": -1}],
                loading: false
        }
    }, 
    methods: {

        updateJoke_store: function() {
            console.log(this.jokes);
            this.$store.commit('updateJoke', [this.jokes[0].joke, this.jokes[0].id]);
        },
        getJokes: function () {
            console.log("What");
            this.loading = true;
            axios.get("http://api.icndb.com/jokes/random/10")
            .then((response)  =>  {
            this.loading = false;
            this.jokes = response.data.value;
            }, (error)  =>  {
            this.loading = false;
            })

            //update store
            this.updateJoke_store();
        }

    },

}
</script>