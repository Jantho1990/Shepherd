<template lang="html">
  <multiselect
      :model="selected"
      :options="options"
      :label="label"
      :track-by="trackBy"
      :multiple="true"
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
      selected: null
    }
  }
}
</script>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
