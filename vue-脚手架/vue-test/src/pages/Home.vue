<template>
  <div>
    <h1>Home页面</h1>
  <router-link class="list-group-item " active-class="active" to="/home/new">New</router-link>
  <router-link class="list-group-item " active-class="active" to="/home/message">Message</router-link>
  <router-view></router-view>
</div>
</template>

<script>
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Home',
    data() {
        return {
            
        }
    },

}
</script>

<style>

</style>