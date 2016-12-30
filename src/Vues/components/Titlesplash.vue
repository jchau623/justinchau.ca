<template>
  <div class='container headplate'>
    <div class='ui very padded middle aligned two column centered grid'>
      <div v-if="bigName" class='column profile-photo'>
        <img src='../../img/me.jpg' />
      </div>
      <div v-if="bigName" class='column'>
        <span class='ui huge header' v-bind:class="{ bigName: bigName }" id="name">{{ firstName }}</span><br />
        <span class='ui huge header' v-bind:class="{ bigName: bigName }" id="name">{{ lastName }}</span>
      </div>
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
