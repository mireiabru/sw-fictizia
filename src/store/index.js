import Vue from "vue"
import Vuex from "vuex"
import axios from "axios";
import VueAxios from "vue-axios";

Vue.use(Vuex)
Vue.use(VueAxios, axios)

export default new Vuex.Store({
  state: {
    films: [],
  },
  mutations: {
    getFilms(state, films) {
      state.films = films
    }
  },
  actions: {
    fetchFilms(context) {
      axios.get('http://927a45b2f7fb.ngrok.io/api/films/').then(result => {
        context.commit('getFilms', result.data.results);
      }).catch(error => {
        throw new Error(`API ${error}`);
      });
    }
  },
  getters: {
    filmsSortedByDate: state => {
      return state.films.sort(function (a, b) {
        if (a.episode_id > b.episode_id) {
          return 1;
        }
        if (a.episode_id < b.episode_id) {
          return -1;
        }
        return 0;
      })
    }
  }
})