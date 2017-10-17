<template lang="html">
<div class="">
  <p>Category: {{ categoryName }}</p>
  <NewAnswerForm @newAnswer="createAnswer"></NewAnswerForm>
  <ul class="sheep-answers">
    <SheepAnswer :key="answer.id" :content="answer.content" :players="answer.players" v-for="answer in answers"></SheepAnswer>
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
  props: ['categoryName', 'categoryId'],
  data () {
    return {
      answers: []
    }
  },
  methods: {
    createAnswer (content) {
      console.log('create answer', this.categoryId)
      this.answers.push(new Answer(this.answers.length, this.categoryId, content))
    }
  }
}
</script>

<style lang="css">
</style>
