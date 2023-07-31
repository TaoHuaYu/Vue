//该文件用于创建vuex中最为核心的store

//引入vuex
import Vuex from 'vuex';
//引入vue
import Vue from 'vue';
import { nanoid } from 'nanoid';
//应用vuex
Vue.use(Vuex)

//准备actions用于响应组件中的动作
const actions = {
    // add(context, value) {
    //     context.commit('ADD', value);
    // },
    // subtracion(context, value) {
    //     context.commit("SUBTRACION", value);
    // },
    addOdd(context, value) {
        if (context.state.sum % 2) {
            context.commit("ADD", value);
        } else {
            alert("和不为奇数");
        }
    },
    waitAdd(context, value) {
        setTimeout(() => {
            context.commit('ADD', value);
        }, 500);
    },
    addPerson(context,value){
        const person={
            id:nanoid(),
            name:value
        }
        context.commit('ADDPERSON',person)
    }
}
//准备mutation用于操作数据（state）
const mutations = {
    ADD(state, value) {
        state.sum += value;
    },
    SUBTRACTION(state, value) {
        state.sum -= value;
    },
    ADDPERSON(state,value){
        state.personList.unshift(value);
    }
}
//准备state用于存储数据
const state = {
    sum: 0,
    school:'科文学院',
    subject:'软件工程',
    personList:[{id:'001',name:'张三'}]
}
const getters = {
    bigNumber(state) {
        return state.sum * 10;
    }
}

//创建并暴露store
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})