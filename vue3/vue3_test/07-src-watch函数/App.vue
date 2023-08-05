<template>
 <demo ></demo>
</template>

<script>
import Demo from './components/Demo.vue'

export default {
  components: { Demo },
  name: 'App',
 setup(){
  function showInfo(value){
    alert("value:"+value)
  }
  return{
    showInfo
  }
 }

}
</script>

<style>

</style>
