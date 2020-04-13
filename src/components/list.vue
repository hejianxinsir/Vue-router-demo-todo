<template>
  <div class="list">
    <router-link :to="{name: 'helloworld', params: {worldmsg: '你好世界'}}">
      HelloWorld 链接
    </router-link>
    <router-link :to="{name: 'helloyou', params: {youmsg: '你好地球'}}">
      HelloYou 链接
    </router-link>
    <router-link :to="{name: 'hejianxin', params: {xinxin: '年龄：18'}}">
      Hejianxin 链接
    </router-link>
    <router-link :to="{name: 'hehe', params: {xxx: '我是hehe的xxx'}}">
      hehe 链接
    </router-link>
    <router-link :to="{name: 'jianjian', params: {jian: '我是jiajian的jian'}}">
      jianjian 链接
    </router-link>
    <router-link :to="{name: 'obj',params: {ooo: '我是obj参数'}}">
      obj 链接
    </router-link>
    <router-link :to="{name: 'axios'}">
      axios 链接
    </router-link>
    <hr>



    <div class="task">
      <form v-on:submit.prevent="yyy">
        <label>添加事项: </label>
        <input type="text" v-model="xxx" placeholder="add a todo" >
      </form>
      <ul>
        <li v-for="item in list" :key="item.id">
          <span v-if="!item.del">{{item.title}}</span>
          <span v-else :style="deletstyle">{{item.title}}</span>
          <button v-if="!item.del" @click="deleteitem(item)" :style="btnstyle"></button>
        </li>
      </ul>
    </div>





  </div>
</template>


<script>
import HelloWorld from './HelloWorld'
import HelloYou from './HelloWorld'

export default {
  name: 'list',
  components: {
    HelloWorld,
    HelloYou
  },
  methods: {
    deleteitem(arr){
      arr.del = true
    },
    yyy(){
      this.idcount += 1
      this.list.push({
        id: this.idcount,
        title: this.xxx,
        del: false
      })
      this.xxx = ''
    }
  },
  data(){
    return {
      xxx: '',
      idcount: 2,
      list: [
        {
          id: 0,
          title: 'Javascript',
          del: false
        },
        {
         id: 1,
          title: 'HTML',
          del: true 
        },
        {
          id: 2,
          title: 'React',
          del: false
        }
      ],
      deletstyle: {
        'text-decoration': 'line-through',
        'color': 'gray'
      },
      btnstyle: {
        'padding': '0',
        'width': '16px',
        'height': '16px',
        'border-radius': '50%',
        'border': '1px solid gray'
      }
    }
  }
}
</script>


<style scoped>

</style>