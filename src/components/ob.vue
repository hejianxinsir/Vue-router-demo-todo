<template>
  <div class="obj">
    {{msg}}
    {{$route.params.ooo}}
  </div>
</template>

<script>
export default {
  name: 'obj',
  data(){
    return {
      msg: '我是obj组件'
    }
  }
}
</script>