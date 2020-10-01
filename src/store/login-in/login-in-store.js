export default {
    namespaced:true,
    state: {
        isLogined: false,
        identity_type:-1,
        name:"",
        user_id:-1
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
        },
        setId(state,value){
            state.user_id = value
        }
    },
    actions: {
    },
    modules: {
    }
}