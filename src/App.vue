<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/application/AppHeader";

export default {
  components: {
    AppHeader,
  },
};
</script>

<style lang="scss">
#app {
  text-align: center;
  color: white;
}
</style>
