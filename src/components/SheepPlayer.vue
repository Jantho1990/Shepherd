<template lang="html">
  <div class="">
    <span>Name: {{ playerName }}, </span>
    <span>Points: {{ points }}</span>
  </div>
</template>

<script>
export default {
  name: 'SheepPlayer',
  props: ['playerName', 'points'],
  data () {
    return {
      answers: []
    }
  },
  computed: {
    pointTotal () {
      return this.answers.reduce((carry, value, i) => carry + value.pointTotal, 0)
    },
    pointsPerCategory () {
      return this.answers.map((value) => value.pointTotal)
    }
  },
  methods: {
    setAnswer (answer) {
      this.answers.push(answer)
    }
  }
}
</script>

<style lang="css">
</style>
