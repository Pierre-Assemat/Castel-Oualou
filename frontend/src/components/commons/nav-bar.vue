<template>
  <div id="nav-bar">
    <ul class="flex-row">
      <li v-for="item in navItems" :key="item.id">
        <a v-if="item.component === 'link'" :href="item.url" class="btn-nav reset-css">{{ item.display_name }}</a>
        <router-link v-else :to="getPath(item)" class="btn-nav reset-css">{{ item.display_name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import constants from 'src/constants.js'

export default {
  props: {},

  data() {
    return {}
  },

  computed: {
    navItems() {
      return constants.ROUTES
    },
    currentRoute() {
      return this.$route.name
    }
  },

  methods: {
    getPath(item) {
      return `/${item.id}`
    }
  }
}
</script>

<style scoped lang="scss">
ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  justify-content: flex-end;
}

.btn-nav {
  font-family: $font-family;
  padding: 8px;
  cursor: pointer;
  color: $black;

  &:hover {
    color: $black-light;
  }

  &.router-link-active {
    color: $yellow;
  }
}

.test {
  color: $black-lighter;
}
</style>
