<template lang="html">
  <div class="new-category-form">
    <input v-model="newCategoryName">
    <button @click="emitCreateCategory">Submit</button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newCategoryName: ''
    }
  },
  methods: {
    emitCreateCategory () {
      this.$emit('newCategory', this.newCategoryName)
      console.log('fired')
      this.newCategoryName = ''
    }
  }
}
</script>

<style lang="css">
</style>
