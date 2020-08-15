<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main class="main-content p-absolute">
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
html {
  /* Prevent default scrollbar container */
  overflow-y: auto !important;
}
.default-font {
  /* font-family: Varta, sans-serif !important; */
  font-family: Poppins, sans-serif !important;
}
.roboto-font {
  font-family: Roboto, sans-serif !important;
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
  width: 100vw;
}
.p-absolute {
  position: absolute !important;
}
.p-relative {
  position: relative;
}
.break-word {
  word-break: break-word !important;
}
</style>
