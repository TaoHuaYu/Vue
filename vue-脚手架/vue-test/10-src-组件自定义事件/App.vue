<template>
  <div class="root">
    <h1>{{ msg }}</h1>
    <!-- 通过父组件给子组件传递函数类型的props实现：子给父传递数据 -->
    <School :getSchoolName="getSchoolName"></School>

    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给父传递数据（第一种写法，使用@或者v-on） -->
    <!-- <student @getName="getStudentName"></student> -->
    
    <!-- 通过父组件给子组件绑定一个自定义事件实现：子给付传递参数（第二种写方法，使用ref） -->
    <Student ref="student"></Student>
 
  </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School';

export default {
    name: "App",
    components: { School, Student },
    data() {
        return {
            msg: 'nihao'
        };
    },
    methods:{
      getSchoolName(e){
        console.log("学校名称:"+e);

      },
      getStudentName(b){
        console.log("学生名字："+b);
      },
    },
    mounted(){
      this.$refs.student.$on('getName',this.getStudentName);
    }
    
};
</script>

<style>
.root{
  background-color: blue;
  padding: 5px;
}
</style>