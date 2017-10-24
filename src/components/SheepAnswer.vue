<template lang="html">
  <li>
    <span>{{ answer.content }} ({{ pointTotal }} points)</span>
    <mselect
      :options="allPlayers"
      label="playerName"
      track-by="id"
      @answerAddPlayer="updateAnswerPlayers"
      class="answer-players">
    </mselect>
  </li>
</template>

<script>
import mselect from './vendor/mselect'
export default {
  name: 'SheepAnswer',
  components: { mselect },
  props: ['answer', 'allPlayers', 'players', 'id'],
  data () {
    return {
      answerPlayers: [],
      selectPlayer: null
    }
  },
  computed: {
    pointTotal () {
      return this.answerPlayers.length !== 0 ? this.answerPlayers.length - 1 : 0
    }
  },
  methods: {
    updateAnswerPlayers (players) {
      // this is disgusting, fix it
      console.log('hit', players)
      this.answerPlayers = players
      this.answerPlayers.forEach((player) => {
        if (this.answer.players.findIndex(_player => _player.id === player.id)) {
          this.answer.addPlayer(player)
        }
        console.log('answer points', this.answer.points, this.answer)
        this.$emit('playerAnswer', player, this.answer)
      })
    }
  }
}
</script>

<style lang="css">
.multiselect {
  max-width:600px;
  margin: 0 auto;
}
</style>
