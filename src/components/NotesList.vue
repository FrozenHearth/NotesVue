<template>
  <v-container>
    <!-- Notes List -->
    <v-row v-if="notesList.length > 0" class="content-row">
      <template v-for="note in notesList">
        <v-col cols="4" class="content-column" :key="note.id">
          <v-card class="pa-2 content-card p-relative">
            <div class="d-flex align-center"></div>
            <v-card-title class="break-word content-card-title">
              {{ note.title }}
            </v-card-title>
            <div class="grey--text content-card-description roboto-font">
              {{ note.description | truncate(130) }}
            </div>
            <v-card-subtitle class="content-card-subtitle p-absolute mt-0">
              {{ note.dateCreated }}
            </v-card-subtitle>
            <div class="p-absolute content-card-actions-container">
              <!-- Bookmarks -->
              <span v-if="$route.name === 'Notes'">
                <v-btn
                  v-if="!note.bookmarked"
                  icon
                  @click="bookmarkNotes(note)"
                >
                  <v-icon color="primary" size="20"
                    >mdi-bookmark-outline</v-icon
                  >
                </v-btn>
                <v-btn
                  v-if="note.bookmarked"
                  icon
                  @click="removeBookmark(note)"
                >
                  <v-icon color="primary" size="20">mdi-bookmark</v-icon>
                </v-btn>
              </span>
              <!-- End bookmarks -->
              <v-btn color="info" icon @click="goToEditNotes(note.id)">
                <v-icon size="20">mdi-pencil</v-icon>
              </v-btn>
              <v-btn color="error" icon>
                <v-icon size="20" @click="deleteNote(note.id)"
                  >mdi-delete-outline</v-icon
                >
              </v-btn>
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>

    <div
      v-if="notesList.length === 0"
      class="img-content-container d-flex flex-column align-center"
    >
      <v-img
        class="default-img"
        width="500"
        height="500"
        :src="noNotesImg"
      ></v-img>
      <h2 class="img-content-text">
        No notes added yet. Click on the
        <v-icon size="24">mdi-plus-circle-outline</v-icon>&nbsp; button to
        create a new note!
      </h2>
    </div>
    <v-alert
      v-if="showAlert"
      class="alert-top"
      border="bottom"
      colored-border
      type="success"
      elevation="3"
      >{{ alertMsg }}</v-alert
    >
  </v-container>
</template>

<script>
import { mapState, mapActions, mapGetters } from "vuex";
import { format } from "date-fns";
import TakingNotesIllus from "../assets/logos/taking_notes.png";
export default {
  name: "NotesList",
  data() {
    return {
      noNotesImg: TakingNotesIllus,
      showAlert: false,
      alertMsg: "",
      clickedNoteId: "",
      notesData: {}
    };
  },
  computed: {
    ...mapState(["notesList"]),
    ...mapGetters(["bookmarkedNotesList"])
  },
  methods: {
    goToEditNotes(id) {
      this.$router.push({
        name: "EditNotes",
        params: {
          id
        }
      });
    },
    deleteNote(id) {
      this.actionDeleteNote(id)
        .then(() => {
          this.alertMsg = "Deleted note successfully!";
          this.showAlert = true;
          setTimeout(() => {
            this.showAlert = false;
          }, 1000);
        })
        .catch(err => console.log(err));
    },
    bookmarkNotes(note) {
      const { title, description, id } = note;
      this.notesData = {
        title,
        description,
        dateCreated: format(new Date(), `LLL d, yyyy`),
        id,
        bookmarked: true
      };
      this.actionEditNotes(this.notesData)
        .then(() => {
          note.bookmarked = true;
        })
        .catch(err => {
          note.bookmarked = false;
          console.log(err);
        });
    },
    removeBookmark(note) {
      const { title, description, id } = note;
      this.notesData = {
        title,
        description,
        dateCreated: format(new Date(), `LLL d, yyyy`),
        id,
        bookmarked: false
      };
      this.actionEditNotes(this.notesData)
        .then(() => {
          note.bookmarked = false;
        })
        .catch(err => {
          note.bookmarked = true;
          console.log(err);
        });
    },
    ...mapActions(["actionDeleteNote", "actionEditNotes"])
  }
};
</script>

<style scoped>
.content-row {
  padding: 16px 32px;
  height: 62rem;
  overflow-y: auto;
  margin-right: 0.1rem !important;
  margin-bottom: 5rem;
}
.content-column {
  flex-basis: 21%;
}
.content-card {
  background: #fff;
  width: 31rem;
  margin-right: 0.4rem;
  min-height: 27rem;
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24) !important; */
  /* 0px 0px 0px -2px rgb(247 247 247 / 20%), 1px 0px 0px -1px rgb(255 255 255 / 14%), 1px 3px 6px -2px rgb(175 175 175) */
}
.content-card-subtitle {
  font-size: 1.4rem;
  margin-bottom: 1rem;
  bottom: 0;
}
.content-card-title {
  font-family: Poppins, sans-serif !important;
  font-size: 1.6rem;
  font-weight: 400;
}
.content-card-description {
  font-size: 1.6rem;
  padding: 8px 16px;
  margin-bottom: 1rem;
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
.alert-top {
  right: 2rem;
  position: fixed;
  top: 9rem;
}
.content-card-actions-container {
  padding: 0 1rem;
  bottom: 1.5rem;
  right: 0;
}
.bookmark-button {
  right: -1rem;
  cursor: pointer;
  bottom: -1.5rem;
}
</style>
