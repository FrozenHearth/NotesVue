<template>
  <v-app id="inspire">
    <Sidebar />
    <v-main class="main-content p-absolute">
      <Navbar />

      <router-view></router-view>
    </v-main>
    <v-progress-linear
      v-if="showProgressbar"
      class="horizontal-progress-bar"
      absolute
      indeterminate
      color="#03d1c5"
    ></v-progress-linear>
  </v-app>
</template>

<script>
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
export default {
  name: "App",
  components: {
    Sidebar,
    Navbar
  },
  data() {
    return {
      showProgressbar: false
    };
  },
  watch: {
    $route(to, from) {
      if (from.fullPath !== to.fullPath) {
        this.showProgressbar = true;
        setTimeout(() => {
          this.showProgressbar = false;
        }, 1000);
      } else {
        this.showProgressbar = false;
      }
    }
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
.horizontal-progress-bar {
  height: 4px;
  top: 0;
  z-index: 6 !important;
}
</style>
