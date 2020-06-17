<template>
  <div>
    <div class="buttons">
      <router-link to="/allFilms" class="btn_main">All films</router-link>
      <router-link to="/sortedByDateFilms" class="btn_main"
        >Chronological order</router-link
      >
    </div>
    <div class="films" v-for="(Film, index) in films" :key="index">
      <FilmListCard :Film="Film" :index="index"></FilmListCard>
    </div>
  </div>
</template>

<script>
import FilmListCard from "../components/film-list/FilmListCard";

export default {
  name: "TheAllFilmsView",
  components: {
    FilmListCard,
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
  },
  created() {
    this.$store.dispatch("fetchFilms");
  },
};
</script>
