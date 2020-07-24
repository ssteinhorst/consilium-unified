import Vue from 'vue'
import App from './App.vue'
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
// import VueGAPI from 'vue-gapi'
import axios from 'axios'

// const apiConfig = {
//   apiKey: 'AIzaSyADVp9I8Nzxit9FdJWDx-AGOzbuir1tj6w',
//   clientId: '945957695120-5jqbkap53bljscplatu0k60gkhttd4nd.apps.googleusercontent.com',
//   discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
//   // see all available scopes here: https://developers.google.com/identity/protocols/googlescopes'
//   scope: 'https://www.googleapis.com/auth/spreadsheets',
//
//   // works only with `ux_mode: "prompt"`
//   refreshToken: true,
// }
// Vue.use(VueGAPI, apiConfig);

Vue.config.productionTip = false;
Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
