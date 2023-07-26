<template>
  <div class="demo">
    <h1>学生姓名：{{name}}</h1>
    <h1>学生年龄：{{age}}</h1>

  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Student',
    data(){
        return{
            name:'thy',
            age:22
        }
    }

}
</script>

<style>
.demo{
    background-color: rebeccapurple;
}

</style>