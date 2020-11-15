import Home from 'src/components/pages/home-page.vue';
import Presentation from 'src/components/pages/presentation-page.vue';
import Products from 'src/components/pages/products-page.vue';
import Contact from 'src/components/pages/contact-page.vue';


const ROUTES = [
  { id: "home", display_name: "Accueil", component: Home},
  { id: "presentation", display_name: "Le vignoble", component: Presentation},
  { id: "products", display_name: "Nos vins", component: Products},
  { id: "shop", display_name: "Boutique", component: "link", url: "https://castel-oualou.plugwine.com/Vins"},
  { id: "contact", display_name: "Contact", component: Contact}
]

const constants = {
  ROUTES
}

export default constants
