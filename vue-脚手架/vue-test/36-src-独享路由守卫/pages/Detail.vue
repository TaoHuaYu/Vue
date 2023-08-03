<template>
  <div>
    <h1>{{id}}</h1>
    <h1>{{title}}</h1>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Detail',
    props:['id','title'],
    data() {
        return {
            
        }
    },
    mounted(){
      console.log(this.$route)
    }

}
</script>

<style>

</style>