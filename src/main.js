import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import firebase from 'firebase/app'
import LogRocket from 'logrocket'
LogRocket.init('nrfs4h/protfolio')
// This is an example script - don't forget to change it!
LogRocket.identify('THE_USER_ID_IN_YOUR_APP', {
  name: 'James Morrison',
  email: 'jamesmorrison@example.com',

  // Add your own custom user variables here, ie:
  subscriptionType: 'pro'
});

Vue.config.productionTip = false

// Initialize Firebase
const config = {
  apiKey: 'AIzaSyCgUm5DRvMcwGHXNLTmOgjOBFfhrNRFKfE',
  authDomain: 'portfolio-vue-1db22.firebaseapp.com',
  databaseURL: 'https://portfolio-vue-1db22.firebaseio.com',
  projectId: 'portfolio-vue-1db22',
  storageBucket: 'portfolio-vue-1db22.appspot.com',
  messagingSenderId: '470220877212'
}
firebase.initializeApp(config)

// todo hashが有る無しで表示するworkを変更する
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
