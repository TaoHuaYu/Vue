<template>
    <div class="demo">
      <h1>学生名称：{{name}}</h1>
      <h1>学生地址：{{address}}</h1>
      <h1>学生年龄：{{age}}</h1>
      <button type="button" @click="getStudentName1()">点击获取学上姓名</button>
      <button type="button" @click="death()">关闭事件</button>
    </div>
  </template>
  
  <script>
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name:'Student',
      data(){
          return{
            name:'ttt',
            address:'yangzhou',
            age:22
             
          }
      },
      methods:{
        getStudentName1(){
          this.$emit('getName',this.name);
        },
        death(){
          this.$off('getName')
        }
      }
      
  }
  </script>
  
  <style scoped>
  .demo{
    background-color: skyblue;
  }
  
  </style>