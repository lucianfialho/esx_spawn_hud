import Vue from 'vue';
import App from './App.vue';
import Nui from './utils/Nui';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'


library.add(fas)
Vue.component('font-awesome-icon', FontAwesomeIcon)

import Buefy from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Buefy, {
  defaultIconPack: 'fas',
  defaultIconComponent: 'font-awesome-icon'
});

Vue.config.productionTip = false;


new Vue({
  render: h => h(App),
}).$mount('#app');

/// #if DEBUG
setTimeout(() => {
  Nui.emulate('open', {
    locals: [],
  });
}, 1000);

document.addEventListener('keypress', event => {
  if (event.keyCode == 116) {
    // do something
  }
});
/// #endif
