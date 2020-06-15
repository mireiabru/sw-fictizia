<template>
  <div class="detail">
    <FilmDetail :Film="Film" />
  </div>
</template>

<script>
import FilmDetail from "../components/film-detail/FilmDetail";

export default {
  name: "Detail",
  components: {
    FilmDetail,
  },
  data() {
    return {
      Film: null,
    };
  },
  created() {
    this.Film = this.$route.params.Film;
  },
};
</script>
