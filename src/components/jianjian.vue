<template>
  <div class="jianjian">
    {{msg}}
    {{$route.params.jian}}
  </div>
</template>

<script>
export default {
  name: 'jianjian',
  data(){
    return {
      msg: '我是jianjian'
    }
  }
}
</script>