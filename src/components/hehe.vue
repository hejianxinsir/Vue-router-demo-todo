<template>
  <div class="hehe">
    {{msg}}
    {{$route.params.xxx}}
  </div>
</template>

<script>
export default {
  name: 'hehe',
  data(){
    return {
      msg: '我是 呵呵'
    }
  }
}
</script>