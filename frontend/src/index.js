import Vue from 'vue';
import App from './App.vue';
import components from './components/components.js';

// Attach all the components to the vue instance
for (const [name, component] of Object.entries(components)) {
  Vue.component(name, component);
}

new Vue({
  el: '#app',
  render: h => h(App),
});
