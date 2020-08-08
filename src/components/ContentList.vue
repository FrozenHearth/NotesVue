<template>
  <v-container>
    <v-row v-if="notesList.length > 0" class="content-row">
      <template v-for="note in notesList">
        <v-col cols="4" class="content-column" :key="note.id">
          <v-card @click="goToEditNotes(note.id)" class="pa-2 content-card">
            <v-card-subtitle class="content-card-subtitle-top">
              {{
              note.dateCreated
              }}
            </v-card-subtitle>
            <v-card-title class="content-card-title">
              {{
              note.title
              }}
            </v-card-title>
            <div class="grey--text content-card-description roboto-font">{{ note.description }}</div>
          </v-card>
        </v-col>
      </template>
    </v-row>
    <div
      v-if="notesList.length === 0"
      class="img-content-container d-flex flex-column align-center"
    >
      <v-img class="default-img" width="500" height="500" :src="noNotesImg"></v-img>
      <h2 class="img-content-text">No notes added yet. Click on Add New Note to create a new note!</h2>
    </div>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import TakingNotesIllus from "../assets/logos/taking_notes.png";
export default {
  name: "ContentList",
  computed: {
    ...mapState(["notesList"])
  },
  data() {
    return {
      noNotesImg: TakingNotesIllus
    };
  },
  methods: {
    goToEditNotes(id) {
      this.$router.push({
        name: "EditNotes",
        params: {
          id
        }
      });
    }
  }
};
</script>

<style scoped>
.content-row {
  padding: 16px 48px;
  height: 500px;
  overflow-y: auto;
  margin-right: 0.1rem !important;
}
.content-column {
  flex-basis: 21%;
}
.content-card {
  background: #fff;
  height: 22rem;
  width: 23.5rem;
  margin-right: 0.4rem;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important; */
  /* 0px 0px 0px -2px rgb(247 247 247 / 20%), 1px 0px 0px -1px rgb(255 255 255 / 14%), 1px 3px 6px -2px rgb(175 175 175) */
}
.content-card-subtitle-top {
  font-size: 1.4rem;
}
.content-card-title {
  font-family: Poppins, sans-serif !important;
  font-size: 1.8rem;
  font-weight: 400;
  padding: 8px 16px;
}
.content-card-description {
  font-size: 1.6rem;
  padding: 8px 16px;
}
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: var(--v-primary-base);
  border-right: 4px white solid;
  border-top: 26px white solid;
  border-bottom: 24px white solid;
}
.img-content-text {
  font-weight: 400;
  font-size: 1.8rem;
}
</style>
