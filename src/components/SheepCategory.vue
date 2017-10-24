<template lang="html">
<div class="">
  <p>Category: {{ categoryName }}</p>
  <NewAnswerForm @newAnswer="createAnswer"></NewAnswerForm>
  <ul class="sheep-answers">
    <SheepAnswer
      :key="answer.id"
      :answer="answer"
      :all-players="allPlayers"
      @playerAnswer="passUpEvent"
      v-for="answer in answers"></SheepAnswer>
  </ul>
</div>
</template>

<script>
import NewAnswerForm from '../forms/answer'
import SheepAnswer from './SheepAnswer'
import Answer from '../data/models/answer'

export default {
  name: 'SheepCategory',
  components: {NewAnswerForm, SheepAnswer},
  props: ['categoryName', 'categoryId', 'allPlayers'],
  data () {
    return {
      answers: []
    }
  },
  methods: {
    createAnswer (content) {
      console.log('create answer', this.categoryId)
      this.answers.push(new Answer(this.answers.length, this.categoryId, content))
    },
    passUpEvent (player, answer) {
      console.log('You are still using evil event handling. Fix that.', player, answer)
      // This is evil. Do some proper event handling when you refactor.
      this.$emit('playerAnswer', player, answer)
    }
  }
}
</script>

<style lang="css">
</style>
