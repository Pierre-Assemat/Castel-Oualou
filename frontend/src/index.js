import Vue from 'vue';
import VueRouter from 'vue-router'

import App from 'src/App.vue';
import components from 'src/components/components.js';
import routes from 'src/routes.js';

Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

// Attach all the components to the vue instance
for (const [name, component] of Object.entries(components)) {
  Vue.component(name, component);
}

new Vue({
  el: '#app',
  router,
  render: h => h(App),
});
