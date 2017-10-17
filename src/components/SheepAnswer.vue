<template lang="html">
  <li>{{ content }}</li>
</template>

<script>
export default {
  name: 'SheepAnswer',
  props: ['content', 'players'],
  data () {
    return {
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
