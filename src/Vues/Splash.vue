<template>
  <div id='splash-bg' class=' full-screen'>
    <titlesplash></titlesplash>
    <links></links>
  </div>
</template>

<script>
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
