import constants from 'src/constants.js'

import Footer from './commons/footer-component.vue'
import Header from './commons/header-component.vue'
import NavBar from './commons/nav-bar.vue'


const components = {
  "footer-component": Footer,
  "header-component": Header,
  "nav-bar": NavBar,
}

const pageComponents = constants.ROUTES.reduce((components, route) => {
  if (route.component !== 'link') {
    components[route.id] = route.component
  }
  return components
}, {})

Object.assign(components, pageComponents)

export default components
