<template lang="html">
  <li>{{ content }}</li>
</template>

<script>
export default {
  name: 'SheepAnswer',
  props: ['content'],
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
