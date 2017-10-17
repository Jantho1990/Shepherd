<template lang="html">
  <div class="new-answer-form">
    <input v-model="newAnswerContent">
    <button @click="emitCreateAnswer">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newAnswerContent: ''
    }
  },
  methods: {
    emitCreateAnswer () {
      console.log('new answer')
      this.$emit('newAnswer', this.newAnswerContent)
      this.newAnswerContent = ''
    }
  }
}
</script>

<style lang="css">
</style>
