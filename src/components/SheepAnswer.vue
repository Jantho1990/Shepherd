<template lang="html">
  <li>
    <span>{{ content }}</span>
    <input v-model="answerPlayer">
    <button @click="emitPlayerAnswer">Add Player</button>
    <multiselect
      :model="selectPlayer"
      :options="allPlayers"
      label="playerName"
      track-by="id"
      :multiple="true"
      class="answer-players">
    </multiselect>
  </li>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  name: 'SheepAnswer',
  components: { Multiselect },
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
</style>
