<template>
  <div>
    <ul>
        <li v-for="item in list" :key="item.id">
          <!-- 跳转路由并携带query参数，to的字符串写法 -->
          <!-- <router-link :to="`/home/message/detail?id=${item.id}&title=${item.title}`"> {{ item.title }}</router-link>  -->
          
          <!-- 跳转路由并携带query参数，to的对象写法 -->
          <router-link :to="{
            name:'Detail',
            params:{
              id:item.id,
              title:item.title
            }
          }"> 
          {{ item.title }}
        </router-link> 
        <button type="button" @click="pushShow(item)">pushShow</button>
        <button type="button" @click="replaceShow(item)">replaceShow</button>
        </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Message',
    data() {
        return {
            list:[
              {id:'001',title:"111111111"},
              {id:'002',title:"222222222"},
              {id:'003',title:"333333333"},
            ]
        }
    },
    methods:{
      pushShow(item){
        this.$router.push({
          name:'Detail',
          params:{
            id:item.id,
            title:item.title
          }
        })
      },
      replaceShow(item){
        this.$router.replace({
          name:'Detail',
          params:{
            id:item.id,
            title:item.title
          }
        })
      }
    }
}
</script>

<style>

</style>