<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <my-header @addList="addList"></my-header>
        <my-list
          :todos="todos"
        ></my-list>
        <my-footer
          :todos="todos"
          @delItem1="delItem1"
          @updateDone1="updateDone1"
        ></my-footer>
      </div>
    </div>
  </div>
</template>

<script>
import MyFooter from "./components/MyFooter.vue";
import MyHeader from "./components/MyHeader.vue";
import MyList from "./components/MyList.vue";

export default {
  components: { MyHeader, MyList, MyFooter },
  name: "App",
  data() {
    return {
      todos: JSON.parse(localStorage.getItem('todos')) || [],
    };
  },
  methods: {
    addList(e) {
      this.todos.unshift(e);
    },
    updateDone(id) {
      this.todos.forEach((todo) => {
        if (todo.id == id) {
          todo.done = !todo.done;
        }
      });
    },
    delItem(e) {
      this.todos = this.todos.filter((todo) => {
        return todo.id != e;
      });
    },
    delItem1() {
      this.todos = this.todos.filter((todo) => {
        return !todo.done;
      });
    },
    updateDone1(e) {
      this.todos.forEach((todo) => (todo.done = e));
    },
  },
  watch:{
    todos:{
      handler(value){
        localStorage.setItem('todos',JSON.stringify(value));
      }
    }
  },
  mounted(){
    this.$bus.$on('updateDone',this.updateDone);
    this.$bus.$on('deltodo',this.delItem)
  },
  beforeDestroy(){
    this.$bus.$off('updateDone')
    this.$bus.$off('deltodo')
  }
};
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>