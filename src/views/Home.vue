<template>
  <div>
    <ContentTop />
    <NotesList v-if="$route.name === 'Notes'" />
    <BookmarkedNotes v-if="$route.name === 'Bookmarked'" />
  </div>
</template>

<script>
import NotesList from "../components/NotesList";
import BookmarkedNotes from "../components/BookmarkedNotes";

import ContentTop from "../components/ContentTop";
export default {
  name: "Home",
  components: {
    NotesList,
    BookmarkedNotes,
    ContentTop
  }
};
</script>
