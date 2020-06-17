<template>
  <div>
    <div class="buttons">
      <router-link to="/allFilms" class="btn_main">All films</router-link>
      <router-link to="/sortedByDateFilms" class="btn_main"
        >Chronological order</router-link
      >
    </div>
    <div class="films" v-for="(Film, index) in filmsByDate" :key="index">
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
    filmsByDate() {
      return this.$store.getters.filmsSortedByDate;
    },
  },
  created() {
    this.$store.dispatch("fetchFilms");
  },
};
</script>
