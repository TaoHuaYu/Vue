<template>
  <div>
    <h1>当前的和为：{{ sum }}</h1>
    <h1>放大十倍的值：{{ bigNumber }}</h1>
    <h1>学校为：{{school}}</h1>
    <h1>专业为：{{ subject }}</h1> 
    <h1>人数：{{ personList.length}}</h1>

    <select v-model="number">
      <option :value="1">1</option>
      <option :value="2">2</option>
      <option :value="3">3</option>
    </select>
    <button type="button" @click="add(number)">+</button>
    <button type="button" @click="subtraction(number)">-</button>
    <button type="button" @click="addOdd(number)">当前求和为奇书在相加</button>
    <button type="button" @click="waitAdd(number)">稍等一下在进行相加</button>

  </div>
</template>

<script>
import { mapState,mapGetters,mapMutations,mapActions} from 'vuex';
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Count',
    data() {
        return {
          number:1,
        }
      },
    methods:{
      // add(){
      //  this.$store.commit("ADD",this.number);
      // },
      // subtraction(){
      //  this.$store.commit('SUBTRACION',this.number);
      // },

      ...mapMutations('countAbout',{add:"ADD",subtraction:"SUBTRACTION"}),


      // addOdd(){
      //   this.$store.dispatch("addOdd",this.number);
      // },
      // waitAdd(){
      //  this.$store.dispatch('waitAdd',this.number);
      // }
      ...mapActions('countAbout',{addOdd:'addOdd',waitAdd:'waitAdd'})
    },
    computed:{
      //借助mapState生成计算属性，从state中读取数据（对象写法）
      // ...mapState({sum:'sum',school:'school',subject:'subject'})
      ...mapState('countAbout',['sum','school','subject']),  //数组写法
      ...mapState('personAbout',['personList']),  //数组写法

      //借助mapGetters生成计算属性，从getters中读取数据（对象写法） 
      //...mapGetters({bigNumber:'bigNumber'})
      ...mapGetters('countAbout',['bigNumber']),
      
    },
}
</script>

<style>
button {
  margin-left: 5px;
}
</style>