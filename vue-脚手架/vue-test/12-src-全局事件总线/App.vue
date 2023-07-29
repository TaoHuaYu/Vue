<template>
  <div class="root">
    <h1>{{ msg }}</h1>
    <School ></School>
    <Student ></Student>
 
  </div>
</template>

<script>
import Student from './components/Student';
import School from './components/School';

export default {
    name: "App",
    components: { School, Student },
    data() {
        return {
            msg: 'nihao'
        };
    },
};
</script>

<style>
.root{
  background-color: blue;
  padding: 5px;
}
</style>