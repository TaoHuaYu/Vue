<template>
  <div class="demo">
    <h1>学校名称：{{ name }}</h1>
    <h1>学校地址：{{ address }}</h1>
    <h1>学校历时：{{ age }}</h1>
    <h1>学生的姓名：{{ studentName }}</h1>
  </div>
</template>
  
  <script>
import pubsub from "pubsub-js";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "School",
  props: ["getSchoolName"],
  data() {
    return {
      name: "kewen",
      address: "xuzhou",
      age: 22,
      studentName: "",
    };
  },
  mounted() {
    pubsub.subscribe("getName", (msgName, data) => (this.studentName = data));
  },
  beforeDestroy() {},
};
</script>
  
  <style scoped>
.demo {
  background-color: greenyellow;
}
</style>