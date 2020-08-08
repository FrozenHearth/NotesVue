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
      let { notesList } = state;
      const noteToUpdate = notesList.findIndex(note => note.id === payload.id);
      notesList.splice(noteToUpdate, 1, payload);
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
