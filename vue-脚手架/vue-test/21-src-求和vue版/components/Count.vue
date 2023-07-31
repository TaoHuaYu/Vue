<template>
  <div>
    <h1>当前的和为：{{sum}}</h1>
    <h1>{{ number }}</h1>
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
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Count',
    data() {
        return {
          number:1,
          sum:0,
        }
    },
    methods:{
      add(){
        this.sum +=this.number;
      },
      subtraction(){
        this.sum -=this.number;
      },
      addOdd(){
        if(this.sum%2){
          this.sum +=this.number;
        }else{
          alert("和需要为奇数")
        }
      },
      waitAdd(){
        setTimeout(()=>{
          this.sum +=this.number;
        },500)
      }
    }

}
</script>

<style>
button{
  margin-left: 5px;
}
</style>