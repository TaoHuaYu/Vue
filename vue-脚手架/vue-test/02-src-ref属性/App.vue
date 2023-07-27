<template>
  <div>
    <h1 id="h1">hhhhhhhhhhhhhh1</h1>
    <student id="student" ref="stu"></student>
    <button type="button" @click="showDom()">点击获取dom</button>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name:'App',
  components: { Student },
  data(){
    return{

    }

  },
  methods:{
    showDom(){
        //真实dom
        console.log(document.getElementById('h1'));
        //真实dom
        console.log(document.getElementById('student'));
        //student组件的实例对象（vc)
        console.log(this.$refs.stu)

    }
  }
 


}
</script>

<style>

</style>