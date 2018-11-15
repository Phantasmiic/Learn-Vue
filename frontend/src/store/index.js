import Vue from "vue";
import Vuex, { mapState } from "vuex";
import jokes from "./modules/jokes"

Vue.use(Vuex);

export default new Vuex.Store({
  //complicated stuff with namespace, 
  //need to use mapState helper to figure out the module naming, etc
  state: {
    jokes: "", //initialized values 
    jokeID: -1,
    completeJokes: []
  },

  mutations: {
    updateJoke (state, joke) {
          state.jokes = joke[0];
          state.jokeID = joke[1];
          
          var completeJokes = state.completeJokes;
          for (var i = 0; i < completeJokes.length; i++) {
            if (completeJokes[i].id == joke[1]) {
              break;
            }
          } 
          if (i == completeJokes.length) {
            state.completeJokes.push({joke: joke[0], id: joke[1]});
          }
          else {
            console.log("Duplicate joke encountered.");
          }
        },
    deleteOldestJoke(state) {
      if (state.completeJokes.length == 1) {
        alert("Cannot delete only joke");
      }
      else {
        var joke = state.completeJokes.pop();
      }
      return joke;
    },
    updateLength(state, direction) {
    }
  },
  getters: {
    getJoke (state) {
      return (state.jokes);
    },
    getJokeID(state) {
      return (state.jokeID);
    },
    getAllJokes(state) {
      return (state.completeJokes);
    }

  },

});
