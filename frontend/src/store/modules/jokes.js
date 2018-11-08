

// initial state
// jokes: [{ id, quantity }]
const state = {
    jokes: "",
    jokeID: -1
}

const getters = {}
const mutations = {
    updateJoke (state, joke) {
          state.joke = joke[0];
          state.jokeID = joke[1];
    }
}
const actions = {

}
export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
  }