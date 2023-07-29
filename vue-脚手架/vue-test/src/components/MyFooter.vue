<template>
  <div class="todo-footer" v-show="totalNum != 0">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->
      <input type="checkbox" v-model="isAll" />
    </label>
    <span>
      <span>已完成{{ finishNumber }}</span>
      / 全部{{ totalNum }}
    </span>
    <button class="btn btn-danger" @click="delTodo()">清除已完成任务</button>
  </div>
</template>

<script>
export default {
  props: ["todos"],
  computed: {
    finishNumber() {
      return this.todos.filter((todo) => todo.done == true).length;
    },
    totalNum() {
      return this.todos.length;
    },
    isAll: {
      get() {
        return this.finishNumber == this.totalNum && this.finishNumber > 0;
      },
      set(value) {
        this.$emit('updateDone1',value);
      },
    },
  },
  methods: {
    delTodo() {
      this.$emit('delItem1')
    },
  },
};
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>