import store from '../../../store/index'
export default {
    intoModel(){
        store.commit("statusControl/intoModel")
    },
    successOutModel(){
        store.commit("statusControl/exitModel")
    },
    errorOutModel(callback){
        store.commit("statusControl/exitModel")
        callback()
    }
}