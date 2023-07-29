<template>
  <li>
    <label>
      <input
        type="checkbox"
        :checked="todo.done"
        @click="updateStatus(todo.id)"
      />
      <!-- 如下代码也能实现功能，但是不太推荐，因为有点违反原则，因为修改了props -->
      <!-- <input type="checkbox" v-model="todo.done"/> -->
      <span v-show="!todo.isEdit">{{ todo.title }}</span>
      <input
        v-show="todo.isEdit"
        type="text"
        :value="todo.title"
        @blur="handleBlur(todo,$event)"
        ref="inputTitle"
      />
    </label>
    <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
    <button class="btn btn-edit" @click="handleEdit(todo)" v-show="!todo.isEdit">编辑</button>
  </li>
</template>

<script>
import { mixin1 } from "../mixin";
export default {
  data() {
    return {
      newTitle:''
    };
  },
  methods: {
    updateStatus(id) {
      this.$bus.$emit("updateDone", id);
    },
    handleEdit(todo) {
      this.$set(todo, "isEdit", true);
      this.$nextTick(()=>this.$refs.inputTitle.focus());
    },
    handleBlur(todo,e) {
      todo.isEdit = false;
      if(!e.target.value.trim()) return alert("输入不能为空")
      this.$bus.$emit("editInfo",todo.id,e.target.value);
    },
  },
  props: ["todo"],
  mixins: [mixin1],
};
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}

li label {
  float: left;
  cursor: pointer;
}

li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}

li button {
  float: right;
  display: none;
  margin-top: 3px;
}

li:before {
  content: initial;
}

li:last-child {
  border-bottom: none;
}

li:hover {
  background-color: #ddd;
}

li:hover button {
  display: block;
}
</style>