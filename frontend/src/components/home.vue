<template>
  <div id="home">
    <nav-bar/>
  </div>
</template>

<script>
export default {
  props: {
    message: {
      type: String, default: 'Default'
    }
  },

  data() {
    return {}
  },
}
</script>

<style scoped lang="scss">
// scoped style
</style>
