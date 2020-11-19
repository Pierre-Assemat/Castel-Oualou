<template>
    <div id="nav-bar" :class="{ fixed: isFixed }" class="flex-row-c-c">
      <nav>
        <ul class="flex-row-c">
          <li v-for="item in navItems" :key="item.id">
            <a v-if="item.component === 'link'" :href="item.url" class="reset-link subtitle btn-nav">{{ item.display_name }}</a>
            <router-link v-else :to="getPath(item)" class="reset-link subtitle btn-nav">{{ item.display_name }}</router-link>
          </li>
        </ul>
      </nav>
    </div>
</template>

<script>
import constants from 'src/constants.js'

export default {
  props: {
    isFixed: {
      type: Boolean,
      default: false
    },
  },

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
    },
  }
}
</script>

<style scoped lang="scss">
#nav-bar {
  width: 100%;
  height: 70px;
  background-color: white;
  z-index: 100;
}

ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.btn-nav {
  font-family: $font-family;
  padding: $margin;
  margin: $margin-largest;
  color: $black;

  &:hover {
    color: $black-light;
  }

  &.router-link-active {
    color: $yellow;
  }
}
</style>
