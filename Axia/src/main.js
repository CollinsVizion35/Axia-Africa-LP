import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// import VueCarousel from 'vue-carousel';
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'


/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret, faChevronDown, faArrowRight, faQuoteLeft, faMinus } from '@fortawesome/free-solid-svg-icons'
// import { faChevronDown } from '@fortawesome/free-regular-svg-icons'
import { faLinkedin, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

/* add icons to the library */
library.add( faUserSecret, faChevronDown, faArrowRight, faLinkedin, faTwitter, faInstagram, faQuoteLeft, faMinus )

createApp(App)
.component('font-awesome-icon', FontAwesomeIcon)
.use(Vue3Marquee)
// .use(VueCarousel)
.mount('#app')
