<template lang="html">
  <li>
    <span>{{ content }}</span>
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
  props: ['content', 'allPlayers', 'players'],
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
      console.log('hit', players)
      this.answerPlayers = players
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
