<template>
  <div class="hello">
    <h1>我是 axios 组件</h1>
  </div>
</template>

<script>
import Vue from 'vue'
import axios from 'axios'
Vue.prototype.$http = axios

export default {
  name: 'axios',
  data () {
    return {
      msg: 'I am axios'
    }
  }
}
</script>

<style scoped>

</style>
