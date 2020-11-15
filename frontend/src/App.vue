<template>
  <div id="app">
    <nav-bar/>
    <router-view></router-view>
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
