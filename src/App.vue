<template>
  <v-app id="inspire" class="default-font">
    <Sidebar />
    <v-content class="main-content">
      <SearchBar />

      <router-view> </router-view>
    </v-content>
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
.main-content {
  position: absolute;
  width: 100vw;
}
</style>
