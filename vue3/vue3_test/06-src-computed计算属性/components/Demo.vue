<template>
    <h1>个人信息</h1>
    姓：<input type="text" v-model="person.firstName"/><br/>
    名：<input type="text" v-model="person.lastName"/><br/>
    全名<h2>{{ person.fullName }}</h2><br/>
    计算全名:<input type="text" v-model="person.fullName"/>
  </template>

  <script>
import { computed, reactive } from 'vue'
  export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Demo',
  setup(){
    const person=reactive({
        firstName:'tao',
        lastName:'huayu'
    })
    //简写形式，只读，不可以修改
    // person.fullName=computed(()=>{
    //   return person.firstName+'-'+person.lastName;
    // })
      //完整写法，可以读同时也可以写
    person.fullName=computed({
      get(){
        return person.firstName+'-'+person.lastName;
      },
      set(value){
        const nameArry=value.split('-');
        person.firstName=nameArry[0];
        person.lastName=nameArry[1];
      }
    })
    return{
        person
    }
  }
}
  </script>
  
  <style>
  
  </style>
  