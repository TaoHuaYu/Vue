<template>
    <div class="demo">
      <h1>学校名称：{{name}}</h1>
      <h1>学校地址：{{address}}</h1>
      <h1>学校历时：{{age}}</h1>
      <button type="button" @click="getSchoolName1()">点击获取学校名</button>
    </div>
  </template>
  
  <script>
  
  export default {
      // eslint-disable-next-line vue/multi-word-component-names
      name:'School',
      props:['getSchoolName'],
      data(){
          return{
            name:'kewen',
            address:'xuzhou',
            age:22
             
          }
      },
      methods:{
        getSchoolName1(){
          this.getSchoolName(this.name);

        }
      }
     
  }
  </script>
  
  <style scoped>
  .demo{
    background-color: greenyellow;
  }
  
  </style>