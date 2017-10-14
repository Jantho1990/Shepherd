<template lang="html">
  <div class="new-player-form">
    <input v-model="newPlayerName">
    <button @click="emitCreatePlayer">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newPlayerName: ''
    }
  },
  methods: {
    emitCreatePlayer () {
      this.$emit('newPlayer', this.newPlayerName)
      this.newPlayerName = ''
    }
  }
}
</script>

<style lang="css">
</style>
