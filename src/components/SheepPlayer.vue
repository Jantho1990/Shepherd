<template lang="html">
  <div class="">

  </div>
</template>

<script>
export default {
  name: 'SheepPlayer',
  props: ['name'],
  data () {
    return {
      name: 'Sheep Player',
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
