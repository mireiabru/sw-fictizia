<template>
  <div class="detail">
    <div>
      <img src="../../assets/ep1.jpg" alt="Poster" class="imgDet" />
      <div class="votesDet">
        <h3>0 votes</h3>
        <button class="btn">Vote as favorite</button>
      </div>
    </div>
    <div class="film_info">
      <h1>Episodio 1: The Phantom Menace</h1>
      <p>
        Director:
        <span>{{ Film.director }}</span>
      </p>
      <p>
        Producer:
        <span>{{ Film.producer }}</span>
      </p>
      <p>
        Release date:
        <span>{{ Film.release_date }}</span>
      </p>
      <p>Characters:</p>
      <div v-for="(character, index) in Film.characters" :key="index">
        <li>{{ character }}</li>
      </div>
      <p>Planets:</p>
      <ul>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
      </ul>
      <p>Starships:</p>
      <ul>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
      </ul>
      <p>Vehicles:</p>
      <ul>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
      </ul>
      <p>Species:</p>
      <ul>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
        <li>Anakin Skywalker</li>
      </ul>
      <div class="buttons">
        <button class="back" @click="scrollToTop()">Go up</button>
        <router-link to="/">
          <button class="back">Go home page</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "FilmDetail",
  props: {
    Film: {
      required: true,
      type: Object,
    },
  },
  data() {
    return {
      characters: [],
      charactersUrl: this.Film.characters,
    };
  },
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    },
  },
  mounted() {
    let char = this.charactersUrl.forEach((character) => {
      axios.get(character).then((result) => result.data.results);
    });
    console.log(char);
  },
};
</script>

<style lang="scss">
.detail {
  display: flex;
}
.imgDet {
  object-fit: contain;
  margin: 0;
  max-width: 500px;
  align-self: flex-start;
}

.film_info {
  margin: 0 20px;
  text-align: left;
  margin-bottom: 5vw;
  h1 {
    color: $primary;
    font-size: 2vw;
  }
  p {
    color: $primary;
    font-size: 1.2vw;
    span {
      color: white;
    }
  }
  li {
    font-size: 1.2vw;
  }
}

.votesDet {
  display: flex;
  max-width: 500px;
  width: max-content !important;
  justify-content: flex-end;
  margin: 5px;
  padding: 0 10px 0 10px;
  width: 25vw;
  background-color: $primary;

  h3 {
    text-transform: uppercase;
    color: black;
    margin-right: 0.5vw;
    font-size: 1.2vw;
  }
}
.btn {
  font-family: "Silom";
  margin: auto;
  padding: 5px;
  text-transform: uppercase;
  width: 20vw !important;
  border: none;
  background-color: white;
  color: black;
  border-radius: 60px;
  font-size: 1.1vw;

  &:hover {
    opacity: 0.9;
    padding: 10px;
    width: 26vw;
  }
}
.back {
  font-family: "Silom";
  cursor: pointer;
  margin-top: 3vw;
  margin-right: 1vw;
  padding: 10px;
  text-transform: uppercase;
  width: 20vw !important;
  border: none;
  background-color: white;
  color: black;
  border-radius: 60px;
  font-size: 1.1vw;

  &:hover {
    opacity: 0.9;
    padding: 10px;
    width: 26vw;
  }
}
</style>
