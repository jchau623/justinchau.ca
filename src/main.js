// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '../node_modules/semantic-ui-css/semantic.min.css'
import './app.css'
import semantic from 'semantic'
import Splash from './Vues/Splash'
/* eslint-disable no-new */

new Vue({
  el: '#splash',
  render: h => h(Splash),
  template: '<Splash/>',
  components: { Splash }
})
