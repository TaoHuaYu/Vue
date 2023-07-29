<template>
  <ul class="todo-main">
    <my-item
      v-for="item in todos"
      :key="item.id"
      :todo="item"
      :delItem="delItem"
      :updateDone="updateDone"
    ></my-item>
  </ul>
</template>

<script>
import MyItem from "./MyItem.vue";
export default {
  components: { MyItem },
  props: ["todos", "updateDone", "delItem"],
  dta() {
    return {};
  },
  methods: {},
};
</script> 

<style scoped>
/*main*/
.todo-main {
  margin-left: 0px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 0px;
}

.todo-empty {
  height: 40px;
  line-height: 40px;
  border: 1px solid #ddd;
  border-radius: 2px;
  padding-left: 5px;
  margin-top: 10px;
}
</style>