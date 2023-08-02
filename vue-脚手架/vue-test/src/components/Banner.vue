<template>
   <div class="col-xs-offset-2 col-xs-8">
        <div class="page-header"><h2>Vue Router Demo</h2></div>
        <button type="button" @click="back()">back</button>
        <button type="button" @click="forward()">forback</button>
    </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Banner',
    data() {
        return {
            
        }
    },
    methods:{
        back(){
            this.$router.back();
        },
        forward(){
            this.$router.forward();
        }
    }

}
</script>

<style>

</style>