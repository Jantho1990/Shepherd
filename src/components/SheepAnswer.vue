<template lang="html">
<div class="">

</div>
</template>

<script>
export default {
  name: 'SheepAnswer',
  data () {
    return {
      content: 'This is an answer to a Sheep Category',
      players: []
    }
  },
  computed: {
    pointTotal () {
      return this.players.count
    }
  }
}
</script>

<style lang="css">
</style>
