<template>
  <v-app-bar height="65" fixed class="app-bar-search-container" color="default">
    <v-autocomplete
      :menu-props="{ maxWidth: 1200 }"
      class="app-bar-autocomplete"
      v-model="searchText"
      :items="searchResults"
      item-text="text"
      item-value="id"
      label="Search"
      prepend-icon="mdi-magnify"
      append-icon=""
      solo
    >
      <template v-slot:no-data>
        <v-list-item>
          <v-list-item-title>
            No Notes found
          </v-list-item-title>
        </v-list-item>
      </template>
    </v-autocomplete>
  </v-app-bar>
</template>

<script>
export default {
  name: "SearchBar",
  data() {
    return {
      searchResults: [
        {
          text: "Search One",
          id: 0
        },
        {
          text: "Search Two",
          id: 1
        },
        {
          text: "Search Three",
          id: 2
        }
      ],
      search: "",
      searchText: ""
    };
  }
};
</script>

<style scoped>
.app-bar-search-container {
  max-width: calc(100% - 256px);
  margin-left: 256px;
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
  top: 1rem;
  position: relative;
}
.app-bar-autocomplete >>> .v-label {
  left: 0 !important;
  top: -1px !important;
  color: #323232;
  font-size: 1.8rem;
}
.app-bar-autocomplete >>> input {
  padding-left: 0px !important;
  padding-bottom: 2.5rem !important;
}
</style>
