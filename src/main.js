import Vue from 'vue'
import Vuelidate from 'vuelidate'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCoffee, faChild, faCircle, faBone,faCamera, faArchive } from '@fortawesome/free-solid-svg-icons'
import { faComment,faCheckCircle} from '@fortawesome/free-regular-svg-icons'
import { faTwitter,faFacebook,faVk,faInstagramSquare,faYoutube,faFacebookMessenger} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon, FontAwesomeLayers, FontAwesomeLayersText } from '@fortawesome/vue-fontawesome'
import Paginate from 'vuejs-paginate'
import VueMeta from 'vue-meta'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import dateFilter from "./filters/date.filter";
import localizeFilter from "./filters/localize.filter";
import currencyFilter from "./filters/currency.filter";
import tooltipDirective from '@/directives/tooltip.directive'
import messagePlugin from '@/utils/message.plugin'
import titlePlugin from '@/utils/title.plugin'
import Loader from "./components/app/Loader";
import 'materialize-css/dist/js/materialize.min'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
library.add(
    faCoffee,
    faChild,
    faCircle,
    faArchive,
    faComment,
    faFacebook,
    faTwitter,
    faVk,
    faBone,
    faYoutube,
    faCamera,
    faInstagramSquare,
    faFacebookMessenger,
    faCheckCircle
)
Vue.component('font-awesome-icon', FontAwesomeIcon)
Vue.component('font-awesome-layers', FontAwesomeLayers)
Vue.component('font-awesome-layers-text', FontAwesomeLayersText)

Vue.config.productionTip = false
Vue.use(messagePlugin)
Vue.use(titlePlugin)
Vue.use(Vuelidate)
Vue.use(VueMeta)
Vue.filter('date', dateFilter)
Vue.filter('localize', localizeFilter)
Vue.filter('currency', currencyFilter)
Vue.component('Loader', Loader)
Vue.directive('tooltip', tooltipDirective)
Vue.component('Paginate', Paginate)

firebase.initializeApp(
/*    {
    apiKey: "AIzaSyA8cwLNuEewNzHbXEKZAoRH75QHq_sMstI",
    authDomain: "show-galaktika.firebaseapp.com",
    databaseURL: "https://show-galaktika.firebaseio.com",
    projectId: "show-galaktika",
    storageBucket: "show-galaktika.appspot.com",
    messagingSenderId: "854350845130",
    appId: "1:854350845130:web:bb8182f902f9e09f111033",
    measurementId: "G-JEL5Y85J2K"
}*/
{
    apiKey: "AIzaSyBQ89oSEspGc1i7WBCzMGebC3abJ6IHv2c",
        authDomain: "show-galaktika-5f728.firebaseapp.com",
        databaseURL: "https://show-galaktika-5f728.firebaseio.com",
        projectId: "show-galaktika-5f728",
        storageBucket: "show-galaktika-5f728.appspot.com",
        messagingSenderId: "948660315883",
        appId: "1:948660315883:web:f751cdfc7adcc762a140ae",
        measurementId: "G-13L9N0L7SL"
})

let app;

firebase.auth().onAuthStateChanged(() => {
    if (!app) {
        app = new Vue({
            router,
            store,
            render: h => h(App)
        }).$mount('#app')
    }
})

