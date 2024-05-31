<!-- eslint-disable vue/multi-word-component-names -->

<template>

  <div>


    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="published">발행</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

    <p>{{ $store.state.more }}</p>
    <button @click="$store.dispatch('getData')">더보기</button>

    <Container :step="step" :post="post" :image="image" @write="postWrite=$event"/>
    <button @click="more">더보기</button>

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

{{ name }}

  </div>
</template>

<script>
/*eslint-disable*/ 
import Container from "./components/Container.vue";
import Post from "./components/Post.vue";
import data from './assets/data'
import axios from 'axios'
import { mapState } from 'vuex'

const result = axios.get('https://codingapple1.github.io/vue/more0.json')

export default {
  name: "App",
  data(){
    return {
      step: 0,
      post: data,
      plus: 0,
      image : '',
      postWrite : '',
      selected: ''
    }
  },
  components: {
    Container: Container,
    Post: Post,
  },
  computed:{
    name(){
      return this.$store.state.name
    },
    ...mapState(['age', 'likes' ])
  },
  methods: {
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.plus}.json`)
      .then((result) => {
        this.post = [...this.post, result.data]
        this.plus++
      })
    },
    upload(e){
      let file = e.target.files //e.target.files하면 사용자가 업로드한게 다 담겨있다
      console.log(file)
      let url = URL.createObjectURL(file[0])
      console.log(url)
      this.image = url
      this.step++
    },
    published(){
      let my = {     
        name: "Kim Hyun",
        userImage: "https://picsum.photos/100?random=3",
        postImage: this.image,
        likes: 36,
        date: "May 15",
        liked: false,
        content: this.postWrite,
        filter: this.selected
       }
       console.log('my', my)
      this.post.unshift(my)
      this.step = 0
    }
  },
   mounted() {
    this.emitter.on('clicked', (a) =>{
      this.selected = a
    })
  },
};
</script>

<style>
body {
  margin: 0;
}
ul {
  padding: 5px;
  list-style-type: none;
}
.logo {
  width: 22px;
  margin: auto;
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 13px;
}
.header {
  width: 100%;
  height: 40px;
  background-color: white;
  padding-bottom: 8px;
  position: sticky;
  top: 0;
}
.header-button-left {
  color: skyblue;
  float: left;
  width: 50px;
  padding-left: 20px;
  cursor: pointer;
  margin-top: 10px;
}
.header-button-right {
  color: skyblue;
  float: right;
  width: 50px;
  cursor: pointer;
  margin-top: 10px;
}
.footer {
  width: 100%;
  position: sticky;
  bottom: 0;
  padding-bottom: 10px;
  background-color: white;
}
.footer-button-plus {
  width: 80px;
  margin: auto;
  text-align: center;
  cursor: pointer;
  font-size: 24px;
  padding-top: 12px;
}
.sample-box {
  width: 100%;
  height: 600px;
  background-color: bisque;
}
.inputfile {
  display: none;
}
.input-plus {
  cursor: pointer;
}
</style>
