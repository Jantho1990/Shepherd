<template lang="html">

</template>

<script>
export default {
  name: 'SheepRound',
  data(){
    return {
      roundNumber: 0,
      answers: 
    }
  },
  computed: {
    roundName(){
      return "Round " + this.roundNumber
    }
  }
}
</script>

<style lang="css">
</style>
