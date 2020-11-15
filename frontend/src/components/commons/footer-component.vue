<template>
  <footer id="footer" class="flex-row-c">
    <small>&copy; Copyright {{currentYear}}, Domaine Castel Oualou</small>
  </footer>
</template>

<script>
export default {
  props: {},

  data() {
    return {}
  },

  computed: {
    currentYear() {
      const date = new Date()
      return date.getFullYear()
    }
  },

  methods: {}
}
</script>

<style scoped lang="scss">
#footer {
  color: $black-lighter;
}
</style>
