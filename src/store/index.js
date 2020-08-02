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
    },
    editNotes(state, payload) {
      state.notesList.splice(state.notesList[payload.id], 1, payload);
    }
  },
  actions: {
    actionSubmitNotes({ commit }, payload) {
      commit("submitNotes", payload);
    },
    actionEditNotes({ commit }, payload) {
      commit("editNotes", payload);
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
