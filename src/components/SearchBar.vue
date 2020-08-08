<template>
  <v-app-bar
    app
    height="65"
    class="app-bar-search-container roboto-font"
    :class="[$route.name === 'AddNotes' || $route.name === 'EditNotes' ? 'no-box-shadow' : '']"
    color="default"
  >
    <v-autocomplete
      v-if="$route.name !== 'AddNotes' && $route.name !== 'EditNotes'"
      :menu-props="{ maxWidth: 1200 }"
      class="app-bar-autocomplete roboto-font"
      v-model="searchText"
      :search-input.sync="search"
      :items="searchResults"
      return-object
      item-text="text"
      item-value="id"
      label="Search"
      prepend-icon="mdi-magnify"
      append-icon
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>No Notes found</v-list-item-title>
        </v-list-item>
      </template>
    </v-autocomplete>

    <h1 v-if="$route.name === 'AddNotes' || $route.name === 'EditNotes'" class="app-title">Notes</h1>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SearchBar",
  data() {
    return {
      search: "",
      searchText: "",
      searchResults: []
    };
  },
  computed: {
    ...mapState(["notesList"])
  },
  mounted() {
    this.searchResults = this.notesList.map(note => {
      return {
        text: note.title,
        id: note.id
      };
    });
  }
};
</script>

<style scoped>
.app-bar-search-container {
  max-width: calc(100% - 256px);
  left: 256px !important;
  box-shadow: 12px -12px 20px 1px rgba(0, 0, 0, 0.6) !important;
}
.app-bar-search-container
  >>> .v-autocomplete.v-select--is-menu-active
  .v-input__icon--append
  .v-icon {
  transform: none;
}

.app-bar-autocomplete {
  margin-top: 2.5rem !important;
  margin-left: 4rem !important;
}
.app-bar-autocomplete >>> .v-input__slot {
  box-shadow: none !important;
  margin-top: 2rem;
}
.app-bar-autocomplete >>> .v-icon.v-icon {
  color: #323232;
  opacity: 0.8;
}
.app-bar-autocomplete >>> .v-input__prepend-outer {
  top: 1.2rem;
  position: relative;
}
.app-bar-autocomplete >>> .v-label {
  left: 0 !important;
  top: -1px !important;
  color: #323232;
  font-size: 1.6rem;
}
.app-bar-autocomplete >>> .v-menu__content {
  font-family: Roboto, sans-serif !important;
}
.app-bar-autocomplete >>> input {
  padding-left: 0px !important;
  padding-bottom: 2.5rem !important;
}
.no-box-shadow {
  box-shadow: none !important;
}
.app-title {
  font-family: Kristi, cursive;
  font-size: 4.4rem;
  margin-left: 3.5rem;
  letter-spacing: 4px;
}
</style>
