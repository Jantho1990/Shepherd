<template lang="html">
<div id="sheep-handler">
  <div class="sheep-players">
    <h2>Players</h2>
    <SheepPlayer :key="player.id" :playerName="player.playerName" :points="player.points" v-for="player in players"></SheepPlayer>
    <NewPlayerForm @newPlayer="createPlayer"></NewPlayerForm>
  </div>
  <div class="sheep-categories">
    <h2>Categories</h2>
    <NewCategoryForm @newCategory="createCategory"></NewCategoryForm>
    <SheepCategory
      :key="category.id"
      :categoryName="category.categoryName"
      :categoryId="category.id"
      :all-players="players"
      v-for="category in categories"></SheepCategory>
  </div>
</div>
</template>

<script>
// Todo: clean this up
import SheepPlayer from './SheepPlayer'
import SheepCategory from './SheepCategory'
import Player from '../data/models/player'
import Category from '../data/models/category'
import NewPlayerForm from '../forms/player'
import NewCategoryForm from '../forms/category'

export default {
  components: {
    SheepPlayer,
    SheepCategory,
    NewPlayerForm,
    NewCategoryForm
  },
  data () {
    return {
      players: [],
      categories: [],
      newPlayerName: '',
      newCategoryName: ''
    }
  },
  methods: {
    addPlayerAnswer (player, answer) {
      player.addAnswer(answer)
      answer.addPlayer(player)
    },
    createCategory (name) {
      this.categories.push(new Category(name, this.categories.length))
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
