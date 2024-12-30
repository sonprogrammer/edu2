import { createStore } from 'vuex'
import data from './assets/data'
import axios from 'axios'

const store = createStore({
  state(){
    return {
      name: 'son youngjin',
      age: 28,
      clicked: false,
      data,
      more: {}
    }
  },
  mutations: {
    likes(state, data){
        const posts = state.data.find(post => post.id === data)
        posts.likes++
        
    },
    setMore(state, one){
        state.data.unshift(one)
    }
  },
  actions: {
    async getData(context){
        let res = await axios.get(`https://codingapple1.github.io/vue/more0.json`)
        context.commit('setMore', res.data)
    }
  }
})

export default store