export const mixin1={
    methods:{
        delTodo(id) {
            this.$bus.$emit('deltodo',id);
          },

    }
  
}