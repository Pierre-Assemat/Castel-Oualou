import constants from 'src/constants.js'

import navBar from './commons/nav-bar.vue'


const components = {
  "nav-bar": navBar,
}

const pageComponents = constants.ROUTES.reduce((components, route) => {
  if (route.component !== 'link') {
    components[route.id] = route.component
  }
  return components
}, {})

Object.assign(components, pageComponents)

export default components
