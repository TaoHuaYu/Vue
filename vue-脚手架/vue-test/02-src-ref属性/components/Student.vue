<template>
  <div>
    <h1>学校名称：{{name}}</h1>
    <h1>学校地址：{{address}}</h1>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
        return{
            name:'kewen',
            address:'徐州'
        }
    }

}
</script>

<style>

</style>