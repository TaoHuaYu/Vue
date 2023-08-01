<template>
  <div>
    <ul>
        <li v-for="(item,index) in list" :key="index">{{ item }}</li>
    </ul>

  </div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Message',
    data() {
        return {
            list:[1,2,3,4]
            
        }
    },

}
</script>

<style>

</style>