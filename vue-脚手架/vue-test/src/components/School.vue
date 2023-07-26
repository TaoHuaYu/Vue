<template>
    <div class="demo">
        <h1>学校名字：{{name}}</h1>
        <h1>学校地址：{{address}}</h1>
        <button type="button" @click="showName()"></button>
    </div>
</template>
<script>
export default{
    // eslint-disable-next-line vue/multi-word-component-names
    name:'School',
    data(){
        return{
            name:'kewen',
            address:'xuzhou'

        }
    },
    methods: {
        showName(){
            alert(this.name);
        }
    },
}
</script>
<style scoped>
.demo{
    background-color: greenyellow;
}

</style>
