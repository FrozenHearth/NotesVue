<template>
  <v-container>
    <v-btn
      v-if="mode === 'add'"
      :disabled="disableBtn"
      :loading="loadingAdd"
      class="publish-btn text-capitalize"
      color="primary"
      @click="handleSubmitNotes"
    >Publish</v-btn>
    <v-btn
      v-if="mode === 'edit'"
      :loading="loading"
      :disabled="disableBtn"
      class="publish-btn text-capitalize"
      color="primary"
      @click="handleSubmitEditedNotes"
    >Publish</v-btn>
    <v-form class="d-flex flex-column align-center">
      <v-col cols="12">
        <v-text-field
          class="title-text-field"
          solo
          autocomplete="off"
          label="Title"
          v-model="details.title"
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="desc-text-field-container">
        <v-textarea
          :spellcheck="false"
          auto-grow
          full-width
          class="desc-text-field roboto-font"
          autocomplete="off"
          label="Describe your notes..."
          v-model="details.description"
          solo
        ></v-textarea>
      </v-col>
    </v-form>
    <v-alert
      v-if="createdNote"
      class="alert-top"
      border="bottom"
      colored-border
      type="success"
      elevation="3"
    >{{ alertMsg }}</v-alert>
    <v-alert
      v-if="editedNote"
      class="alert-top"
      border="left"
      colored-border
      type="success"
      elevation="3"
    >{{ alertMsg }}</v-alert>
  </v-container>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { format } from "date-fns";
import { v4 as uuidv4 } from "uuid";
export default {
  name: "AddNotes",
  data() {
    return {
      details: {
        title: "",
        description: ""
      },
      disableBtn: true,
      notesData: {},
      note: [],
      mode: "add",
      createdNote: false,
      editedNote: false,
      loading: false,
      loadingAdd: false,
      alertMsg: ""
    };
  },
  watch: {
    details: {
      handler() {
        const { title, description } = this.details;
        if (title.length > 0 && description.length > 0) {
          this.disableBtn = false;
        }
      },
      deep: true
    }
  },
  mounted() {
    const { id } = this.$route.params;
    if (id) {
      this.mode = "edit";
      this.details = this.notesList.filter(note => note.id === id)[0];
    }
  },
  computed: {
    ...mapState(["notesList"])
  },
  methods: {
    handleSubmitNotes() {
      this.loadingAdd = true;
      const { title, description } = this.details;
      if (title && description) {
        this.disableBtn = false;
        this.notesData = {
          title: title,
          description: description,
          dateCreated: format(new Date(), "dd/MM/yyyy"),
          id: uuidv4()
        };
        this.actionSubmitNotes(this.notesData)
          .then(() => {
            this.createdNote = true;
            this.alertMsg = "Note added successfully!";
          })
          .then(() => {
            setTimeout(() => {
              this.loadingAdd = false;
              this.$router.push({ name: "Notes" });
            }, 600);
          })
          .catch(err => {
            this.loadingAdd = false;
            console.log(err);
          });
      }
    },
    handleSubmitEditedNotes() {
      this.loading = true;
      const { title, description, id } = this.details;
      if (title && description) {
        this.disableBtn = false;
        this.notesData = {
          title: title,
          description: description,
          dateCreated: format(new Date(), "dd/MM/yyyy"),
          id
        };
        this.actionEditNotes(this.notesData)
          .then(() => {
            this.editedNote = true;
            this.alertMsg = "Edited note successfully!";
          })
          .then(() => {
            setTimeout(() => {
              this.loading = false;
              this.$router.push({ name: "Notes" });
            }, 600);
          })
          .catch(err => {
            console.log(err);
            this.loading = false;
          });
      }
    },
    ...mapActions(["actionSubmitNotes", "actionEditNotes"])
  }
};
</script>

<style scoped>
.title-text-field >>> .v-input__slot {
  padding: 1rem 3rem !important;
  background: none !important;
  box-shadow: none !important;
  font-family: Poppins, sans-serif;
}
.title-text-field >>> label {
  font-size: 1.8rem;
}
.title-text-field >>> input {
  font-size: 1.8rem;
  font-weight: 400;
  padding-bottom: 1.2rem;
  height: 40px;
}
.desc-text-field-container {
  margin-top: -3rem;
}
.desc-text-field >>> .v-input__slot {
  padding: 1rem 3rem !important;
  background: none !important;
  box-shadow: none !important;
}
.desc-text-field >>> label {
  font-size: 1.6rem;
}
.desc-text-field >>> textarea {
  font-size: 1.6rem;
  position: relative;
  padding: 9px 12px 0px 0px;
}
.publish-btn {
  font-size: 1.4rem !important;
  font-weight: 400;
  font-family: Poppins, sans-serif;
  position: absolute;
  right: 2rem;
  top: -5rem;
  z-index: 5;
}
.alert-top {
  right: 2rem;
  position: fixed;
  top: 9rem;
}
</style>
