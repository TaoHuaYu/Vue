<template>
  <div>
    <h1>人员列表</h1>
    <h1>count组件中的sum：{{sum}}</h1>
    <input type="text" placeholder="请输入姓名" v-model="name"/>
    <button type="button" @click="addPerson(name)">添加人员</button>
    <ul>
        <li v-for="person in personList" :key="person.id">{{ person.name }}</li>
    </ul>

  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name:'Person',
    data() {
        return {
            name:''
        }
    },
    computed:{
        ...mapState(['personList','sum'])
    },
    methods:{
        ...mapActions({addPerson:'addPerson'})
    }

}
</script>

<style>

</style>