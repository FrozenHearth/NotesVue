import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesList: []
  },
  mutations: {
    submitNotes(state, payload) {
      state.notesList.push(payload);
      console.log(state.notesList);
    }
  },
  actions: {
    actionSubmitNotes({ commit }, payload) {
      console.log(payload);
      commit("submitNotes", payload);
    }
  },
  modules: {}
});
