import { nanoid } from 'nanoid';
export default{
    namespaced:true,
    actions:{
        addPerson(context,value){
            const person={
                id:nanoid(),
                name:value
            }
            context.commit('ADDPERSON',person)
        }
    },
    mutations:{
        ADDPERSON(state,value){
            state.personList.unshift(value);
        }
    },
    state:{
        personList:[{id:'001',name:'张三'}]
    },
    getters:{}
}