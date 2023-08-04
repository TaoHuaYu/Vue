<template>
  <h1>个人信息</h1>
  <h2>{{ name }}</h2>
  <h2>{{ age }}</h2>
  <button type="button" @click="showInfo()">查看信息</button>
</template>

<script>
// import{h} from 'vue'
export default {
  name: 'App',
  setup(){
    let name='陶华宇';
    let age=22;

    function showInfo(){
      alert('name:'+name+'\t'+'age:'+age)
    }
    //返回一个对象（常用）
    return{
      name,
      age,
      showInfo
    }

    //返回一个函数（渲染函数）
    //return ()=>h('h1','11111')
  }

}
</script>

<style>

</style>
