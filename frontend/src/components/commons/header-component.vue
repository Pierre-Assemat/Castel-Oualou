<template>
  <div id="header" class="flex-col-c-c">
    <div class="logo-container flex-row-c">
      <img src="assets/logo.png" width="335px" :height="`${headerSize}px`" alt="Domain Castel Oualou logo">
    </div>
    <nav-bar :is-fixed="isFixed"/>
  </div>
</template>

<script>
export default {
  props: {},

  data() {
    return {
      isFixed: false,
      headerSize: 150,
    }
  },

  mounted() {
    window.addEventListener('scroll', this.onScroll)
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.onScroll)
  },

  computed: {},

  methods: {
    onScroll() {
      this.isFixed = window.scrollY > this.headerSize
    },
  }
}
</script>

<style scoped lang="scss">
#header {
  height: 220px;
}

.logo-container {
  width: 100%;
}

.fixed {
  position: fixed;
  top: 0;
}
</style>
