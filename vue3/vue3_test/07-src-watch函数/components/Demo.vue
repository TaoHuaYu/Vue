 <template>
  <h1>{{ sum }}</h1>
  <button type="button" @click="sum++">++</button>
  <h1>{{ msg }}</h1>
  <button type="button" @click="update()">更新信息</button>
  <h1>{{ person.name }}</h1>
  <h1>{{ person.age }}</h1>
  <button type="button" @click="person.name += '!'">updatePerson</button>
  <button type="button" @click="person.age++">age++</button>
  <button type="button" @click="person.job.j1.salary++">salary++</button>
</template>

  <script>
import { reactive, ref, watch } from "vue";
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Demo",
  setup() {
    const sum = ref(0);
    const msg = ref("hello");
    const person = reactive({
      name: "Taohuayu",
      age: 22,
      job: {
        j1: {
          salary: 20,
        },
      },
    });
    function update() {
      msg.value += "!";
    }
    //第一种形式，监视ref所定义的一个响应式数据
    // watch(sum,(newValue,oldValue)=>{
    //   console.log('sum变了:'+newValue,oldValue);
    // },{immediate:true})

    //第二种形式，监视ref所定义的多个响应式数据
    // watch([sum,msg],(newValue,oldValue)=>{
    //   console.log('msg和sum发生了改变:',newValue,oldValue);
    // },{immediate:true})

    //第三种形式，监视reactive所定义的一个响应式数据的全部属性
    //注意此处无法获取正确的oldValue
    //强制开启深度监视（deep配置无效）
    // watch(person,(newValue,oldValue)=>{
    //   console.log('person中的name或者age改变',newValue,oldValue)
    // })

    //第四种形式，监视reactive所定义的一个响应式数据的某个属性
    // watch(
    //   () => person.name,
    //   (newValue, oldValue) => {
    //     console.log("person中的name或者age改变", newValue, oldValue);
    //   }
    // );

    //第五种形式，监视reactive所定义的一个响应式对象的某些指
    // watch([()=>person.name,()=>person.age],(newValue,oldValue)=>{
    //   console.log('person中的name或者age改变',newValue,oldValue)
    // })

    //特殊情况监视reactive所定义的对象中的某个对象属性
    watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person中的name或者age改变',newValue,oldValue)
    },{deep:true})

    return {
      sum,
      msg,
      person,
      update,
    };
  },
};
</script>
  
  <style>
</style>
  