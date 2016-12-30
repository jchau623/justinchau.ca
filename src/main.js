// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import '../node_modules/semantic-ui-css/semantic.min.css'
import './app.css'
import semantic from 'semantic'
import Splash from './Vues/Splash'
import $ from 'jQuery'
import 'semantic-ui-transition/transition.css'
$.fn.transition = require('semantic-ui-transition')

/* eslint-disable no-new */
new Vue({
  el: '#splash',
  render: h => h(Splash),
  template: '<Splash/>',
  components: { Splash }
})

$(document).ready(function () {
  setTimeout(function () {
    $('.headplate').transition({
      animation: 'scale',
      onComplete: function () {
        $('.links').transition({
          animation: 'fade up',
          duration: '850ms'
        })
      }
    })
  }, 500)
})
