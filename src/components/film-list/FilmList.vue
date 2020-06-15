<template>
  <div>
    <div class="buttons">
      <select class="btnc" v-model="selectedFilm">
        <option value="filterByAll">All films</option>
        <option value="filterByDate">Chronological order</option>
        <option value="filterByRelease">Release date</option>
      </select>
    </div>
    <div>
      <div class="films" v-for="(Film, index) in filteredFilms" :key="index">
        <FilmListCard :Film="Film" :index="index"></FilmListCard>
      </div>
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
  data() {
    return {
      selectedFilm: "filterByAll",
    };
  },
  computed: {
    films() {
      return this.$store.state.films;
    },
    filmsSortedByDate() {
      return this.$store.getters.filmsSortedByDate;
    },
  },
  watch: {
    selectedFilm(newValue) {
      this.selectedFilm = newValue;
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

  .btnc {
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
