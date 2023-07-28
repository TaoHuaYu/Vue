<template>
  <div>
    <h1>学校名称：{{name}}</h1>
    <h1>学校地址：{{address}}</h1>
    <h1>学校历时：{{age}}</h1>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
        return{
           
        }
    },
    //简单声明接收
    //props:["name","address","age"]

    //申明的同时对数据类型进行限制
    // props:{
    //   name:String,
    //   address:String,
    //   age:Number
    // }

    //申明的同时对数据进行类型限制、默认值、必要性限制
    props:{
      name:{
        type:String,
        require:true
      },
      address:{
        type:String,
        require:true
      },
      age:{
        type:Number,
        default:100
      }
    }

}
</script>

<style>

</style>