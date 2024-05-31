import axios from 'axios'
import { createStore } from 'vuex'

const store = createStore({
    state(){
        return{
            name: 'son', //state보관하고 싶으면 여기에
            age: 28,
            likes : 37,
            clicked: false,
            more: {},
        }
    },
    mutations:{ //state 수정방법 정의하는 곳
        changeName(state){ //여기 안에들어가는 state는 위에 있는 State값들을 가리킨다
            state.name = 'park'
        },
        addAge(state, data){
            state.age += data
        },
        like(state){
            if(state.clicked == false){
                state.likes++
                state.clicked = true
            }else{
                state.likes--
                state.clicked = false
            }
        },
        setMore(state, data){
            state.more = data
        }
    },
    actions:{
        getData(context){
            axios.get('https://codingapple1.github.io/vue/more0.json').then((a) => {
                console.log(a.data)
                context.commit('setMore', a.data)
        })
        }
    }
})

export default store