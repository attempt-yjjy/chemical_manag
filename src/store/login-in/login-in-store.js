export default {
    namespaced:true,
    state: {
        isLogined: false
    },
    mutations: {
        loginSuccess(state) {
            state.isLogined = true
        }
    },
    actions: {
    },
    modules: {
    }
}