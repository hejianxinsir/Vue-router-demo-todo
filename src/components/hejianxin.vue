<template>
  <div class="hejianxin">
    {{msg}}
    <p>我是router传来的参数 {{$route.params.xinxin}}</p>
  </div>
</template>


<script>
export default {
  name: 'hejianxin',
  data(){
    return {
      msg: 'I am Hejianxin'
    }
  }
}
</script>