import Vue from 'vue';
import App from './App.vue';
import Nui from './utils/Nui';
import { Message } from 'buefy'
import 'buefy/dist/buefy.css'

Vue.use(Message)

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
