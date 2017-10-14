<template lang="html">
<div class="">
  <p>Category: {{ categoryName }}</p>
</div>
</template>

<script>
export default {
  name: 'SheepCategory',
  props: ['categoryName'],
  data () {
    return {
      answers: [

      ]
    }
  }
}
</script>

<style lang="css">
</style>
