import constants from 'src/constants.js'

let HOME

const routes = constants.ROUTES.reduce((routes, rawRoute) => {
  if (rawRoute.id === 'home') {
    HOME = rawRoute
  }
  if (rawRoute.component !== 'link') {
    routes.push({
      path: `/${rawRoute.id}`,
      name: rawRoute.id,
      component: rawRoute.component,
    })
  }
  return routes
}, [])

routes.push({ path: '/', redirect: `/${HOME.id}`})

export default routes
