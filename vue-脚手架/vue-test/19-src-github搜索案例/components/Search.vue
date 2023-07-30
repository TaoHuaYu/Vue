<template>
  <div>
    <section class="jumbotron">
		<h3 class="jumbotron-heading">Search Github Users</h3>
		<div>
			<input type="text" placeholder="enter the name you search" v-model="keyword"/>&nbsp;
			<button @click="search()">Search</button>
		</div>
	</section>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Search',
    data() {
        return {
            keyword:'',
        }
    },
    methods:{
        search(){
            this.$bus.$emit("getUsers",{isfirst:false,isLoading:true,error:'',users:[]})
            axios.get("https://api.github.com/search/users?q="+this.keyword).then(
                resqonse=>{
                    const u=resqonse.data.items
                    this.$bus.$emit('getUsers',{isLoading:false,error:'',users:u})
                },
                error=>{
                    this.$bus.$emit('getUsers',{isLoading:false,error:error.data,users:[]})
                }
            )
        }
    }



}
</script>

<style>

</style>