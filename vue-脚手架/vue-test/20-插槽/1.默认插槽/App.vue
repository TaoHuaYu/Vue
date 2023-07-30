<template>
  <div class="demo">
    <category title="美食">
      <img src="../src/assets/phone/a.jpg" >
    </category>
    <category title="游戏" >
      <ul>
        <li v-for="(item,index) in games" :key="index">{{ item }}</li>
      </ul>
    </category>
    <category title="电影" :DataList="films">
      <video controls src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"></video>
    </category>
  </div>
</template>

<script>
import Category from './components/Category.vue';

export default {
  components: { Category },
  name: "App",
  data() {
    return {
      foods:['火锅','烧烤','小龙虾','牛排'],
      games:['红色警戒','穿越火线','劲舞团','超级玛丽'],
      films:['《教父》','《拆弹专家》','《你好，李焕英》','《尚硅谷》']

    };
  },
}
</script>

<style>
.demo{
  display: flex;
	justify-content: space-around;
}

</style>