<template lang="pug">
div(:style="{background: 'green'}").ba
  models
</template>

<script>
import models from './models.vue'
export default {
  name: 'mainLayout',
  components: {models},
  data () {
    return {
      routes: {
        mmm: 'mmm'
      }
    }
  },
  mounted () {
    console.log('ml: mounted')
  }
}
</script>

<style lang="stylus">
.smt
  font-weight 500
  font-size 50px
</style>