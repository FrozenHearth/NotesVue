<template>
  <div>
    <ContentTop />
    <ContentList />
  </div>
</template>

<script>
import ContentList from "../components/ContentList";
import ContentTop from "../components/ContentTop";
export default {
  name: "Home",
  components: {
    ContentList,
    ContentTop
  }
};
</script>
