export default {
    namespaced:true,
    state: {
        modeling:false
    },
    mutations: {
        intoModel(state){
            state.modeling = true
        },
        exitModel(state){
            state.modeling = false
        }
    },
    actions: {
    },
    modules: {
    }
}