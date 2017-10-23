<template lang="html">
  <li>
    <span>{{ content }}</span>
    <input v-model="answerPlayer">
    <button @click="emitPlayerAnswer">Add Player</button>
    <mselect
      :options="allPlayers"
      label="playerName"
      track-by="id"
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
