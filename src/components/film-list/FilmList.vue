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
import FilmListCard from "../film-list/FilmListCard";

export default {
  name: "FilmList",
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

<style lang="scss">
.films {
  display: inline-block;
}
.buttons {
  display: flex;
  display: wrap;
  justify-content: center;
  align-items: center;

  .btn_main {
    font-family: "Silom";
    font-size: 1.8vw;
    cursor: pointer;
    text-transform: uppercase;
    border: 2px solid white;
    padding: 5px;
    width: 25vw;
    background-color: transparent;
    color: white;

    &:hover {
      opacity: 0.5;
    }
  }
  .active {
    border: 2px solid $primary;
    background-color: transparent;
    color: $primary;
  }
}
</style>
