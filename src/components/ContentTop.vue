<template>
  <v-container class="top-container">
    <v-btn
      @click="$router.push({ name: 'AddNotes' })"
      class="text-capitalize top-btn"
      color="primary"
      text
    >
      <v-icon left>mdi-plus-circle-outline</v-icon>Add New Note
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
  width: 92%;
  margin-top: 3rem;
  margin-bottom: -2rem;
}
.top-btn {
  font-size: 1.4rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-family: Poppins, sans-serif;
}
</style>