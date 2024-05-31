import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            name: 'son', //state보관하고 싶으면 여기에
        }
    }
})

export default store