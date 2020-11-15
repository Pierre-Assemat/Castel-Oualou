<template>
  <div id="app">
    <header-component/>
    <router-view></router-view>
    <footer-component/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello World',
    }
  },
}
</script>

<style lang="scss">
@import 'style/main.scss';

#app {
  font-family: $font-family;
}
</style>
