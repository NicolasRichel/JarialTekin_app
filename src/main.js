// Service Worker registration
if ('serviceWorker' in navigator) {

  navigator.serviceWorker.register('/service-worker.js').then((registration) => {
    console.log(`Service Worker registered.`);
  });

  navigator.serviceWorker.onmessage = (event) => {
    const msg = JSON.parse(event.data);
  };

} else {
  console.log('Service Worker not supported.');
}

import Store from './store.js';
import JarialtekinApp from './components/jarialtekin-app.js';

// Define Vuex Store
Vue.use(Vuex);
const store = Store();

// Define Vue root instance
new Vue({
  el: '#app',
  store,
  components: { JarialtekinApp }
});
