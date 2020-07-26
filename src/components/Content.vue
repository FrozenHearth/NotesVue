<template>
  <v-container>
    <v-row class="content-row">
      <template v-for="n in 12">
        <v-col class="content-column" :key="n">
          <v-card class="pa-2 content-card">
            <v-card-subtitle class="content-card-subtitle-top"
              >23 June, 2017</v-card-subtitle
            >
            <v-card-title class="content-card-title"
              >The monkey-rope</v-card-title
            >
            <div class="text--primary content-card-description">
              Being the savage's bowsman, that is, the person who pulled the
              bow-oar.
            </div>
          </v-card>
        </v-col>
      </template>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Content"
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
