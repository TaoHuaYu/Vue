<template>
 <div class="row">
		<!-- 展示用户列表 -->
		<div  class="card" v-for="user in info.users" :key="user.id">
			<a :href="user.html_url" target="_blank">
				<img :src="user.avatar_url" style='width: 100px'/>
			</a>
			<p class="card-text" >{{ user.login }}</p>
		</div>
        <h1 v-show="info.isFirst">欢迎使用</h1>
        <h1 v-show="info.isLoading">加载中。。。</h1>
        <h1 v-show="info.error">加载失败，请重试-------{{ info.error }}</h1>
	
	</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'List',
    data() {
        return {
            info:{
                isFirst:true,
                isLoading:false,
                error:'',
                users:[]
            }
            
        }
    },
    mounted(){
        this.$bus.$on('getUsers',object=>this.info=object)
    }

}
</script>

<style>
.album {
		min-height: 50rem; /* Can be removed; just added for demo purposes */
		padding-top: 3rem;
		padding-bottom: 3rem;
		background-color: #f7f7f7;
	}

	.card {
		float: left;
		width: 33.333%;
		padding: .75rem;
		margin-bottom: 2rem;
		border: 1px solid #efefef;
		text-align: center;
	}

	.card > img {
		margin-bottom: .75rem;
		border-radius: 100px;
	}

	.card-text {
		font-size: 85%;
	}
</style>