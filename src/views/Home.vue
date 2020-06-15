<template>
  <div class="home">
    <FilmList />
  </div>
</template>

<script>
// @ is an alias to /src
import FilmList from "../components/film-list/FilmList";

export default {
  name: "Home",
  components: {
    FilmList,
  },
};
</script>
