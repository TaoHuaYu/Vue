<template>
    <h1>个人信息</h1>
    <h2>{{ person.name }}</h2>
    <h2>{{ person.age }}</h2>
    <h2 v-show="person.sex">{{ person.sex }}</h2>
    <h2>{{ person.hobby }}</h2>
    <h2>{{ person.job.type }}</h2>
    <h2>{{ person.job.salary }}</h2>
    <slot name="tao"></slot>
    <button type="button" @click="update()">跟新数据</button><br/>
    <button type="button" @click="showInfo()">查看信息</button><br/>
    <button type="button" @click="addSex()">添加性别</button><br/>
    <button type="button" @click="deleteSex()">删除性别</button><br/>
    <button type="button" @click="test()">测试demo</button>
     
  </template>
  
  <script>
  import { reactive} from 'vue';
  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: 'Demo',
    props:['msg'],
    emits:['hello'],
    setup(props,context){
        // console.log(props)
       // console.log(context.attrs);//相当于vue2中的$attrs，（父组件给子组件传递指，子组件没有申明接收就回去往attrs中）
    //    console.log(context.emit);
            console.log(context.slots);
      const person=reactive({
        name:'陶华宇',
        age:22,
        job:{
          type:'Java开发',
          salary:'10k'
        },
        hobby:['抽烟','喝酒']
      })
  
      function showInfo(){
        alert('name:'+person.name+'\t'+'age:'+person.age)
      }
      function update(){
        person.name='Tao',
        person.age=666,
        person.job.type='java开发工程师',
        person.job.salary='30k',
        person.hobby[0]='xuexi'
      }
      function addSex(){
        person.sex='男'
      }
      function deleteSex(){
        delete person.sex
      }
      function test(){
        context.emit('hello',666)
      }
      //返回一个对象（常用）
      return{
        person,
        showInfo,
        update,
        addSex,
        deleteSex,
        test
      }
  
    }
  
  }
  </script>
  
  <style>
  
  </style>
  