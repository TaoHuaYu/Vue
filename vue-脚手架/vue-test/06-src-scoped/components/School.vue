<template>
  <div class="demo">
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
          name:'kewen',
          address:'xuzhou',
          age:22
           
        }
    },
    
   
}
</script>

<style scoped>
.demo{
  background-color: greenyellow;
}

</style>