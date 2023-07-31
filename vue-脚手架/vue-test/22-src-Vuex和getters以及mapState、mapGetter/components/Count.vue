<template>
  <div>
    <h1>当前的和为：{{ sum }}</h1>
    <h1>放大十倍的值：{{ bigNumber }}</h1>
    <h1>学校为：{{school}}</h1>
    <h1>专业为：{{ subject }}</h1> 

    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button type="button" @click="add()">+</button>
    <button type="button" @click="subtraction()">-</button>
    <button type="button" @click="addOdd()">当前求和为奇书在相加</button>
    <button type="button" @click="waitAdd()">稍等一下在进行相加</button>
  </div>
</template>

<script>
import { mapState,mapGetters} from 'vuex';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Count',
    data() {
        return {
          number:1,
        }
      },
    methods:{
      add(){
       this.$store.commit("ADD",this.number);
      },
      subtraction(){
       this.$store.commit('SUBTRACION',this.number);
      },
      addOdd(){
        this.$store.dispatch("addOdd",this.number);
      },
      waitAdd(){
       this.$store.dispatch('waitAdd',this.number);
      }
    },
    computed:{
      //借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sum:'sum',school:'school',subject:'subject'})
      ...mapState(['sum','school','subject']),  //数组写法

      //借助mapGetters生成计算属性，从getters中读取数据（对象写法） 
      //...mapGetters({bigNumber:'bigNumber'})
      ...mapGetters(['bigNumber'])
    },
    mounted(){
    
    }

}
</script>

<style>
button {
  margin-left: 5px;
}
</style>