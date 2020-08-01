<template>
  <div>
    <ContentTop />
    <Content />
  </div>
</template>

<script>
import Content from "../components/Content";
import ContentTop from "../components/ContentTop";
export default {
  name: "Home",
  components: {
    Content,
    ContentTop
  }
};
</script>
