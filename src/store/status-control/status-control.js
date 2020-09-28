export default {
    namespaced:true,
    state: {
        modeling:0
    },
    getters:{
        shouldModel(state){
            return state.modeling == 0
        }
    },
    mutations: {
        intoModel(state){
            state.modeling+=1
            console.log("+1")
        },
        exitModel(state){
            state.modeling-=1
            console.log("-1")
        }
    },
    actions: {
    },
    modules: {
    }
}