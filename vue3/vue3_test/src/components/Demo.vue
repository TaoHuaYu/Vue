 <template>
   <h1>{{ sum }}</h1>
   <button type="button" @click="sum++">++</button>
   <h1>{{ msg }}</h1>
   <button type="button" @click="update()">更新信息</button>
  </template>

  <script>
  import { ref, watch } from 'vue'
  export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name:'Demo',
  setup(){
    const sum=ref(0)
    const msg=ref('hello')
    function update(){
      msg.value +="!"
    }
    //第一种形式，监视ref所定义的一个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum变了:'+newValue,oldValue);
    // },{immediate:true})

    //第二种形式，监视ref所定义的多个响应式数据
    watch([sum,msg],(newValue,oldValue)=>{
      console.log('msg和sum发生了改变:',newValue,oldValue);
    },{immediate:true})
       
    return{
      sum,
      msg,
      update
    
    }
  }
}
  </script>
  
  <style>
  
  </style>
  