<template>
  <div id="app">
   <student></student>
   <hr>
   <school></school>
  </div>
</template>

<script>
import School from './components/School.vue'
import Student from './components/student.vue'

export default {
  name: 'App',
  components: {
    Student,
    School
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
