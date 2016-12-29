<template>
  <div class='ui very padded middle aligned two column centered grid'>
    <div class='column profile-photo'>
      <img v-if="bigName" src='../../img/me.jpg' />
    </div>
    <div class='column'>
      <span class='ui huge header' v-bind:class="{ bigName: bigName }" id="name">{{ firstName }}</span><br />
      <span class='ui huge header' v-bind:class="{ bigName: bigName }" id="name">{{ lastName }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'titlesplash',
    data () {
      return {
        bigName: true,
        firstName: 'Justin',
        lastName: 'Chau'
      }
    }
  }
</script>
