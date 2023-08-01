export default{
    namespaced:true,
    actions:{ // add(context, value) {
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
        }
    },
    mutations:{
        ADD(state, value) {
            state.sum += value;
        },
        SUBTRACTION(state, value) {
            state.sum -= value;
        },
    },
    state:{
        sum: 0,
        school:'科文学院',
        subject:'软件工程',
    },
    getters:{
        bigNumber(state) {
            return state.sum * 10;
        }
    }
}