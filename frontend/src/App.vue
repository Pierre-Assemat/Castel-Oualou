<template>
  <div id="app">
    <home :message="message"/>
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
@import './style/main.scss';

#app {
  font-family: 'Roboto', sans-serif;
}
</style>
