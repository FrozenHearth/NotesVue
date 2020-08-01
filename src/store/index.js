import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesList: []
  },
  mutations: {
    submitNotes(state, payload) {
      state.notesList.push(payload);
    }
  },
  actions: {
    actionSubmitNotes({ commit }, payload) {
      commit("submitNotes", payload);
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
