<template lang="html">
<div id="sheep-handler">
  <div class="sheep-players">
    <SheepPlayer :key="player.id" :playerName="player.playerName" :points="player.points" v-for="player in players"></SheepPlayer>
    <div class="new-player-form">
      <input v-model="newPlayerName">
      <button @click="createPlayer">Submit</button>
    </div>
  </div>
</div>
</template>

<script>
import SheepPlayer from './SheepPlayer'
import SheepCategory from './SheepCategory'
import SheepAnswer from './SheepAnswer'
import Player from '../data/models/player'
import Category from '../data/models/category'
import Answer from '../data/models/answer'

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
      answers: [],
      newPlayerName: ''
    }
  },
  methods: {
    addPlayerAnswer (player, answer) {
      player.addAnswer(answer)
      answer.addPlayer(player)
    },
    createAnswer (content) {
      this.answers.push(new Answer(content))
    },
    createCategory (name) {
      this.categories.push(new Category(name))
    },
    createPlayer () {
      this.players.push(new Player(this.newPlayerName, this.players.length))
      this.newPlayerName = ''
    }
  }
}
</script>

<style lang="css">
</style>
