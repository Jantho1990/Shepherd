<template lang="html">
  <multiselect
      v-model="value"
      :options="options"
      :label="label"
      :track-by="trackBy"
      :multiple="true"
      @input="emitAnswerAddPlayer"
      class="answer-players">
    </multiselect>
</template>

<script>
import Multiselect from 'vue-multiselect'
export default {
  components: { Multiselect },
  props: ['options', 'label', 'trackBy'],
  data () {
    return {
      value: null
    }
  },
  methods: {
    emitAnswerAddPlayer () {
      this.$emit('answerAddPlayer', this.value)
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
