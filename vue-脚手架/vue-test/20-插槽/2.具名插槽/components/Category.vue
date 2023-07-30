<template>
  <div class="category">
    <h3>{{ title }}分类</h3>
   <slot name="center">默认值1</slot>
    <slot name="footer">默认值2</slot>
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