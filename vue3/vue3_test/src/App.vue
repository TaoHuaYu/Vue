<template>
 <demo v-if="isShow"></demo><br/>
 <button type="button" @click="Show()">展示/隐藏</button>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'

export default {
  components: { Demo},
  name: 'App',
 setup(){
  let isShow=ref(true) 

  function Show(){
    isShow.value=!isShow.value
  }
  return{
    isShow,
    Show,
   
  }
 }

}
</script>

<style>

</style>
