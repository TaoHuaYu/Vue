<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
   <slot>我是一个默认值，当使用者没有传递结构的时候，默认展示</slot>

  </div>
</template>

<script>
    export default {
        // eslint-disable-next-line vue/multi-word-component-names
        name:'Category',
        props:["title"],
        data() {
            return {
                
            }
        },

    }
</script>

<style>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
	background-color: orange;

}
video{
		width: 100%;
	}
	img{
		width: 100%;
	}
</style>