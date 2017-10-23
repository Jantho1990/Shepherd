<template lang="html">
  <li>
    <span>{{ content }}</span>
    <mselect
      :options="allPlayers"
      label="playerName"
      track-by="id"
      @playerUpdate="answerPlayerUpdate"
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
      answerPlayer: '',
      selectPlayer: null
    }
  },
  computed: {
    pointTotal () {
      return this.players.count
    }
  },
  methods: {
    emitPlayerAnswer () {
      this.$emit('playerAnswer', this.answerPlayer)
      this.answerPlayer = ''
    },
    answerPlayerUpdate (players) {
      console.log('shark', players)
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
