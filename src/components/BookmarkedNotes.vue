<template>
  <v-container>
    <!-- Notes List -->
    <v-row v-if="bookmarkedNotesList.length > 0" class="content-row">
      <template v-for="note in bookmarkedNotesList">
        <v-col cols="4" class="content-column" :key="note.id">
          <v-card class="pa-2 content-card p-relative">
            <div class="d-flex align-center"></div>
            <v-card-title class="break-word content-card-title">
              {{ note.title }}
            </v-card-title>
            <div class="grey--text content-card-description roboto-font">
              {{ note.description | truncate(80) }}
            </div>
            <v-card-subtitle class="content-card-subtitle p-absolute mt-0">
              {{ note.dateCreated }}
            </v-card-subtitle>
            <div class="p-absolute content-card-actions-container">
              <!-- Bookmarks -->
              <span>
                <v-btn
                  style="font-size: 1.2rem"
                  @click="removeFromBookmarks(note)"
                  color="primary"
                >
                  Unbookmark
                  <!-- <v-icon color="primary" size="20"></v-icon> -->
                </v-btn>
              </span>
              <!-- End bookmarks -->
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>

    <div
      v-if="bookmarkedNotesList.length === 0"
      class="img-content-container d-flex flex-column align-center"
    >
      <v-img
        class="default-img"
        width="50%"
        height="50%"
        :src="noBookmarkedNotes"
      ></v-img>
      <h2 class="img-content-text">Your bookmarked notes will show up here.</h2>
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
import { mapActions, mapGetters, mapState } from "vuex";
import { format } from "date-fns";
import BookingIllustration from "../assets/logos/BookmarkIllus.png";
export default {
  name: "BookmarkedNotesList",
  data() {
    return {
      noBookmarkedNotes: BookingIllustration,
      showAlert: false,
      alertMsg: ""
    };
  },
  computed: {
    ...mapGetters(["bookmarkedNotesList"]),
    ...mapState(["notesList"])
  },
  methods: {
    removeFromBookmarks(note) {
      const { title, description, id } = note;
      this.notesData = {
        title,
        description,
        dateCreated: format(new Date(), `LLL d, yyyy`),
        id,
        bookmarked: false
      };
      this.actionEditNotes(this.notesData)
        .then(res => {
          note.bookmarked = false;
          console.log(res);
        })
        .catch(err => {
          note.bookmarked = true;
          console.log(err);
        });
    },
    ...mapActions(["actionEditNotes"])
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
