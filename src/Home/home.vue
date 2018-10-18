<template>

  <div id="home">
  <log-in></log-in>
  </div>
</template>

<script>
import login from '../login/login.vue'
export default {
 components: {
      'log-in':login
    }
  }
</script>

<style scoped>
div{
    width:80%;
    hieght:80%;
    margin-top: 7%;
    margin-left: 10%;
}
</style>
