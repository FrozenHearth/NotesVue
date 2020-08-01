<template>
  <v-container>
    <v-btn
      :disabled="disableBtn"
      class="publish-btn text-capitalize"
      color="primary"
      @click="handleSubmitNotes"
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
          class="desc-text-field"
          autocomplete="off"
          label="Describe your notes..."
          v-model="details.description"
          solo
        ></v-textarea>
      </v-col>
    </v-form>
  </v-container>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "AddNotes",
  data() {
    return {
      details: {
        title: "",
        description: ""
      },
      disableBtn: true,
      notesData: {}
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
    console.log(this.notesData);
  },
  methods: {
    handleSubmitNotes() {
      const { title, description } = this.details;
      if (title && description) {
        this.disableBtn = false;
        this.notesData = {
          title: title,
          description: description,
          dateCreated: new Date()
        };
        this.actionSubmitNotes(this.notesData).then(() => {
          this.$router.push({ name: "Notes" });
        });
      }
    },
    ...mapActions(["actionSubmitNotes"])
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
</style>
