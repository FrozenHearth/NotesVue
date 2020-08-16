<template>
  <v-card class="sidebar-card" width="200">
    <v-navigation-drawer app class="primary sidebar-drawer" permanent left>
      <template v-slot:prepend>
        <div class="sidebar-title-container primaryDarker">
          <h1 class="sidebar-title">Your Notes</h1>
        </div>
      </template>
      <v-list>
        <v-list-item
          :class="[
            clickedIdx === index && $route.name !== 'AddNotes'
              ? 'sidebar-active-list-item'
              : ''
          ]"
          @click="handleListItem(item, index)"
          v-for="(item, index) in items"
          :key="item.title"
          link
        >
          <v-list-item-icon>
            <v-icon class="sidebar-list-item-icon">{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content class="sidebar-list-item-content">
            <v-list-item-title class="sidebar-list-item-title">{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </v-card>
</template>

<script>
export default {
  name: "Sidebar",
  data() {
    return {
      items: [
        { title: "Notes", icon: "mdi-text" },
        // { title: "Deleted", icon: "mdi-delete" },
        { title: "Bookmarked", icon: "mdi-bookmark-outline" }
      ],
      clickedIdx: null
    };
  },
  mounted() {
    if (this.$route.path === "/") {
      this.clickedIdx = 0;
    } else if (this.$route.name === "Bookmarked") {
      this.clickedIdx = 1;
    }
  },
  methods: {
    handleListItem(item, index) {
      this.clickedIdx = index;
      if (this.clickedIdx === 0) {
        this.$router.push("/notes");
      } else if (this.clickedIdx === 1) {
        this.$router.push("/bookmarked");
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebar-card {
  border-radius: 0 !important;
  max-width: 200px !important;
  display: inline-block;
  height: 100%;
}
.sidebar-drawer {
  width: 23rem !important;
}
.sidebar-title-container {
  box-shadow: 12px -12px 20px 1px rgba(0, 0, 0, 0.6) !important;
  padding: 1.4rem 1.6rem;
}
.sidebar-title {
  font-size: 2.5rem !important;
  font-weight: 400;
  color: #fff;
}
.sidebar-active-list-item {
  border-left: 3px solid #fff;
}
.sidebar-list-item-content,
.sidebar-list-item-icon {
  color: #fff !important;
}
.sidebar-list-item-title {
  font-size: 1.6rem;
}
</style>
