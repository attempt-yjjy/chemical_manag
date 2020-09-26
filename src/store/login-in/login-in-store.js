export default {
    namespaced:true,
    state: {
        isLogined: false,
        identity_type:-1
    },
    mutations: {
        loginSuccess(state) {
            state.isLogined = true
        },
        setIdentityType(state,value){
            state.identity_type = value
        }
    },
    actions: {
    },
    modules: {
    }
}