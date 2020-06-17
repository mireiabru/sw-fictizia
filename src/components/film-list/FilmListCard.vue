<template>
  <div class="card">
    <div class="image">
      <img class="preview" :src="image" alt="poster" />
      <button class="btn_view">
        <router-link :to="{ name: 'detail', params: { Film: this.Film } }"
          >View film</router-link
        >
      </button>
    </div>
    <div class="content">
      <div class="info">
        <p>
          Title:
          <span>Episode {{ Film.episode_id }}: {{ Film.title }}</span>
        </p>
        <p>
          Release date:
          <span>{{ Film.release_date }}</span>
        </p>
        <p>
          Opening:
          <span>{{ Film.opening_crawl }}</span>
        </p>
      </div>
      <div class="votes">
        <h3>{{ filmPoints }} votos</h3>
        <button class="btn" @click="positiveVote">Vote as favorite</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "FilmListCard",
  props: {
    Film: {
      required: true,
      type: Object,
    },
    index: {
      required: true,
      type: Number,
    },
  },
  data() {
    return {
      filmPoints: 0,
    };
  },
  computed: {
    image() {
      if (this.Film.episode_id === 1) {
        return require("../../assets/ep1.jpg");
      } else if (this.Film.episode_id === 2) {
        return require("../../assets/ep2.jpg");
      } else if (this.Film.episode_id === 3) {
        return require("../../assets/ep3.jpg");
      } else if (this.Film.episode_id === 4) {
        return require("../../assets/ep4.jpg");
      } else if (this.Film.episode_id === 5) {
        return require("../../assets/ep5.jpg");
      } else if (this.Film.episode_id === 6) {
        return require("../../assets/ep6.jpg");
      }
      return null;
    },
  },
  methods: {
    positiveVote() {
      this.filmPoints++;
    },
  },
};
</script>

<style lang="scss">
.card {
  margin: 2vw;
  border: 2px solid white;
  display: flex;

  .image {
    display: inline-block;
    position: relative;

    .preview {
      width: auto;
      margin: auto;
      border: 0px;

      &:hover {
        opacity: 0.5;
      }
    }
    .btn_view {
      position: absolute;
      top: 50%;
      margin-left: -155px;
      padding: 10px 20px;
      background-color: rgba(white, 0.5);
      border-radius: 60px;
      border: none;

      a {
        font-family: "Silom";
        text-transform: uppercase;
        color: black;
        font-size: 0.8rem;
        text-decoration: none;
      }
    }
  }
}

.content {
  display: flex;
  flex-direction: column;
}

.info {
  padding: 0 20px;
  p {
    text-align: left;
    color: $primary;
    font-size: 1.1vw;
  }
  span {
    color: white;
  }
}

.votes {
  display: flex;
  width: max-content !important;
  justify-content: flex-end;
  margin-top: auto;
  margin-left: auto;
  padding: 0 10px 0 10px;
  text-transform: uppercase;
  width: 25vw;
  background-color: $primary;

  h3 {
    text-transform: uppercase;
    color: black;
    margin-right: 0.5vw;
    font-size: 1.2vw;
    font-family: "Silom";
    text-transform: uppercase;
  }

  .btn {
    margin: auto;
    padding: 5px;
    width: 20vw;
    background-color: white;
    color: black;
    border-radius: 60px;
    font-size: 1.1vw;
    border: none;
    font-family: "Silom";
    text-transform: uppercase;

    &:hover {
      opacity: 0.9;
      width: 26vw;
    }
  }
}
</style>
