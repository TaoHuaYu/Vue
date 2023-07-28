<template>
  <div class="demo">
    <h1>学生名称：{{name}}</h1>
    <h1>学生地址：{{address}}</h1>
    <h1>学生年龄：{{age}}</h1>
  </div>
</template>

<script>

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

    
}
</script>

<style scoped>
.demo{
  background-color: skyblue;
}

</style>