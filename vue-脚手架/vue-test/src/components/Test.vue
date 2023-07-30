<template lang="html">
    <div >
        <input v-model="id"/>
       <button type="button" @click="getUserInfo()">获取用户</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Test',
    data() {
        return {
            id:"1"
        }
    },
    methods:{
        getUserInfo(){
            axios.get("http://localhost:8081/test/select?id="+this.id).then(
                require=>{
                const a=require.data;
                console.log(a);
            },
            error=>{
                console.log("发送失败",error.data);
            })
        }
    }
    
}
</script>
<style >

</style>