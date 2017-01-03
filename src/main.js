// imports
import Vue from 'vue'
import '../node_modules/semantic-ui-css/semantic.min.css'
import './styles/app.css'
import semantic from 'semantic'
import Splash from './Vues/Splash'
import $ from 'jQuery'
import 'semantic-ui-transition/transition.css'

/* eslint-disable no-new */

// setup
$.fn.transition = require('semantic-ui-transition')

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
        setTimeout(function () {
          $('.links').transition({
            animation: 'fade up',
            useFailSafe: false,
            duration: '1.5s'
          })
        }, 500)
      }
    })
  }, 500)
})
