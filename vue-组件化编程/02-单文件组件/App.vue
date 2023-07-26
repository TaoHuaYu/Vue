<template>
  <div>
    <school></school>
    <hr />
    <student></student>
  </div>
</template>

<script>
import School from "./School.vue";
import Student from "./student.vue";
export default {
  name: "App",
  template: `<App/>`,
  components: { School, Student },
};
</script>

<style>
</style>