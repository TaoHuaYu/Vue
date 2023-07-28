<template>
  <div>
    <h1>学生名称：{{name}}</h1>
    <h1>学生地址：{{address}}</h1>
    <h1>学生年龄：{{age}}</h1>
    <button type="button" @click="showNmae()">点击查看名字</button>
  </div>
</template>

<script>
 import { mixin1 } from "../mixin";
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
        return{
          name:'ttt',
          address:'yangzhou',
          age:22
           
        }
    },
    mixins:[mixin1]
    
}
</script>

<style>

</style>