<template>
  <v-app class="default-font">
    <v-main>
      <Sidebar />
      <SearchBar />

      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import SearchBar from "./components/SearchBar";
export default {
  name: "App",
  components: {
    Sidebar,
    SearchBar
  }
};
</script>

<style>
.default-font {
  font-family: Varta, sans-serif !important;
}
:root {
  font-size: 10px !important;
}
.v-list-item__title {
  font-size: 1.6rem !important;
}
.v-application >>> .v-menu__content {
  left: 342px !important;
}
</style>
