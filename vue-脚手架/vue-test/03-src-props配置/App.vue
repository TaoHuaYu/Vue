<template>
  <div>
    <student  name="科文" address="徐州" :age="22"></student>
  </div>
</template>

<script>
import Student from './components/Student.vue'

export default {
    name:'App',
  components: { Student },
  
}
</script>

<style>

</style>