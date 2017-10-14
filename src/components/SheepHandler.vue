<template lang="html">
<div id="sheep-handler">
  <div class="sheep-players">
    <SheepPlayer :key="player.id" :playerName="player.playerName" :points="player.points" v-for="player in players"></SheepPlayer>
    <NewPlayerForm @newPlayer="createPlayer"></NewPlayerForm>
  </div>
</div>
</template>

<script>
// Todo: clean this up
import SheepPlayer from './SheepPlayer'
import SheepCategory from './SheepCategory'
import SheepAnswer from './SheepAnswer'
import Player from '../data/models/player'
import Category from '../data/models/category'
import Answer from '../data/models/answer'
import NewPlayerForm from '../forms/player'

export default {
  components: {
    SheepPlayer,
    SheepCategory,
    SheepAnswer,
    NewPlayerForm
  },
  data () {
    return {
      players: [],
      categories: [],
      answers: [],
      newPlayerName: '',
      newCategoryName: ''
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
    createPlayer (name) {
      this.players.push(new Player(name, this.players.length))
      this.newPlayerName = ''
    }
  }
}
</script>

<style lang="css">
</style>
