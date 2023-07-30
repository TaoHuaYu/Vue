<template lang="html">
    <div >
        <transition appear name="hello">
            <h1 class="show" v-show="isShow" >hello world!!!!</h1>
        </transition>
        <button type="button" @click="isShow=!isShow">显示/隐藏</button>
    </div>
</template>
<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Test',
    data() {
        return {
            isShow:true
        }
    },
    
}
</script>
<style >
.show{
    background-color: skyblue;
}
.hello-enter-active{
    animation: tao  1s ;
}
.hello-leave-active{
    animation: tao 1s reverse;

}
@keyframes tao {
    from{
        transform: translateX(-100%);
    }
    to{
        transform: translateX(0px);
    }
}
</style>