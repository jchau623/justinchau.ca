<template>
  <div>
    <ul class='slideshow'>
      <li v-for='n in 6'>
        <span></span>
      </li>
  </ul>
    <div class='ui very padded right aligned container'>
      <titlesplash></titlesplash>
      <links></links>
    </div>
  </div>
</template>

<script>
  import '../styles/slideshow.css'
  import Titlesplash from './components/Titlesplash'
  import Links from './components/Links'
  export default {
    name: 'splash',
    landing: true,
    components: {
      Titlesplash,
      Links
    }
  }
</script>
