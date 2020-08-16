import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    notesList: [],
    bookmarkedNotesList: []
  },
  mutations: {
    submitNotes(state, payload) {
      state.notesList.push(payload);
    },
    editNotes(state, payload) {
      let { notesList } = state;
      const noteToUpdate = notesList.findIndex(note => note.id === payload.id);
      notesList.splice(noteToUpdate, 1, payload);
    },
    deleteNote(state, id) {
      state.notesList = state.notesList.filter(note => note.id !== id);
    }
  },
  actions: {
    actionSubmitNotes({ commit }, payload) {
      commit("submitNotes", payload);
    },
    actionEditNotes({ commit }, payload) {
      commit("editNotes", payload);
    },
    actionDeleteNote({ commit }, id) {
      commit("deleteNote", id);
    }
  },
  getters: {
    searchResults(state) {
      return state.notesList.map(note => {
        return {
          text: note.title,
          id: note.id
        };
      });
    },
    bookmarkedNotesList(state) {
      state.bookmarkedNotesList = state.notesList.filter(
        note => note.bookmarked
      );
      return state.bookmarkedNotesList;
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});
