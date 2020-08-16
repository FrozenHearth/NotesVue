<template>
  <v-container class="top-container">
    <v-btn
      v-if="$route.name === 'Notes'"
      fab
      fixed
      right
      bottom
      @click="$router.push({ name: 'AddNotes' })"
      class="top-btn default-font"
      color="primary"
    >
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-container>
</template>

<script>
export default {
  name: "ContentTop"
};
</script>

<style scoped>
.top-container {
  display: flex;
  justify-content: flex-end;
  width: 91%;
  margin-top: 3rem;
  margin-bottom: -2rem;
}
.top-btn {
  font-size: 1.4rem;
  font-weight: 500;
  bottom: 4rem;
  right: 4rem;
}
</style>
