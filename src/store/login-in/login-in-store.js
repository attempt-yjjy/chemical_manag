export default {
    namespaced:true,
    state: {
        isLogined: false,
        identity_type:-1,
        name:""
    },
    mutations: {
        loginSuccess(state) {
            state.isLogined = true
        },
        setIdentityType(state,value){
            state.identity_type = value
        },
        setName(state,value){
            state.name = value
        }
    },
    actions: {
    },
    modules: {
    }
}