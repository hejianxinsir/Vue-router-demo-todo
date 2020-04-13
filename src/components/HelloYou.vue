<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    我是通过route 传递过来的参数：<h3>{{$route.params.youmsg}}</h3>
  </div>
</template>

<script>
export default {
  name: 'HelloYou',
  data () {
    return {
      msg: 'I am HelloYou'
    }
  }
}
</script>

<style scoped>

</style>
