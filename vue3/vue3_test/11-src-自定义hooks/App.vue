<template>
 <demo v-if="isShow"></demo><br/>
 <button type="button" @click="Show()">展示/隐藏</button>
 <test></test>
</template>

<script>
import { ref } from 'vue'
import Demo from './components/Demo.vue'
import Test from './components/Test.vue'

export default {
  components: { Demo, Test },
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
