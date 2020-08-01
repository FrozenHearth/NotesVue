<template>
  <v-container>
    <v-row class="content-row">
      <template v-for="(note, index) in notesList">
        <v-col class="content-column" :key="index">
          <v-card class="pa-2 content-card">
            <v-card-subtitle class="content-card-subtitle-top">{{
              note.dateCreated
            }}</v-card-subtitle>
            <v-card-title class="content-card-title">{{
              note.title
            }}</v-card-title>
            <div class="text--primary content-card-description">
              {{ note.description }}
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Content",
  computed: {
    ...mapState(["notesList"])
  }
};
</script>

<style scoped>
.content-row {
  padding: 16px 48px;
}
.content-column {
  flex-basis: 21%;
}
.content-card {
  background: #fff;
  height: 22rem;
  width: 30rem;
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
  font-weight: 300;
  padding: 8px 16px;
}
</style>
