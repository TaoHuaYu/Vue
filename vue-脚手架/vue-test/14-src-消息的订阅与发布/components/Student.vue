<template>
    <div class="demo">
      <h1>学生名称：{{name}}</h1>
      <h1>学生地址：{{address}}</h1>
      <h1>学生年龄：{{age}}</h1>
      <button type="button" @click="sendStudentName()">发送学生的姓名给school组件</button>
    </div>
  </template>
  
  <script>
import PubSub from 'pubsub-js'
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
        sendStudentName(){
          PubSub.publish("getName",this.name);
        }
      }
  }
  </script>
  
  <style scoped>
  .demo{
    background-color: skyblue;
  }
  
  </style>