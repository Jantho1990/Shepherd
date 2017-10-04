<template lang="html">
<div id="sheep-handler">
  <div class="sheep-players">
    <SheepPlayer v-for="player in players"></SheepPlayer>
  </div>
</div>
</template>

<script>
import SheepPlayer from './SheepPlayer'
import SheepCategory from './SheepCategory'
import SheepAnswer from './SheepAnswer'

export default {
  components: {
    SheepPlayer,
    SheepCategory,
    SheepAnswer
  },
  data () {
    return {
      players: [],
      categories: [],
      answers: []
    }
  },
  methods: {
    addPlayer (player) {
      this.players.push(player)
    },
    createPlayer (name) {
      // let player = {name}
    }
  }
}
</script>

<style lang="css">
</style>
