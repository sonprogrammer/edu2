<template>
  <div>
    <div class="header">
      <ul class="header-button-left">
        <li>Cancel</li>
      </ul>
      <ul class="header-button-right">
        <li v-if="step == 1" @click="step++">Next</li>
        <li v-if="step == 2" @click="publish">Upload</li>
      </ul>
      <img src="./assets/logo.png" class="logo" />
    </div>

  <!-- <p>{{ $store.state.more }}</p>
  <button @click="$store.dispatch('getData')">more</button> -->


    <!-- <p>{{now()}} {{counter}}</p>
    <button @click="counter++">button</button>

    <p>{{now2}} {{counter2}}</p>
    <button @click="counter2++">button</button> -->


    

    <Container :data='data' :step='step' :imageUrl='imageUrl' @write="content" :selectedFilter="selectedFilter"/>

    <!-- <button @click="more">더 보기</button> -->

    <div class="footer">
      <ul class="footer-button-plus">
        <input @change="upload" type="file" id="file" class="inputfile" />
        <label for="file" class="input-plus">+</label>
      </ul>
    </div>

    
  </div>
</template>

<script>
import Container from './components/Container.vue'
import data from './assets/data'
import axios from 'axios'
import {mapState, mapMutations} from 'vuex'

export default {
  name: "App",
  data() {
    return{
      data,
      plus: 0,
      step: 3,
      imageUrl :'',
      contents: '',
      selectedFilter: '',
      counter: 0,
      counter2: 0
    }
  },
  components: {
    Container
  },
  mounted() {
    this.emitter.on('boxClick', (a) => {
      this.selectedFilter = a
      console.log('a' ,a)
    })
  },
  computed:{
    now2(){
      console.log('computerd')
      return new Date()
    },
    name(){
      return this.$store.state.name
    },
    ...mapState(['name', 'age', 'data']),
    ...mapState({ 내이름 : 'name', 나이 : 'age'}),
  },
  methods: {
    ...mapMutations(['setMore','likes']),
    now(){
      console.log('method')
      return new Date()
    },
    more(){
      axios.get(`https://codingapple1.github.io/vue/more${this.plus}.json`)
        .then((res) =>{
          console.log('res', res)
          this.data.push(res.data)
          this.plus++
        })
    },
    upload(e){
      let file = e.target.files;
      let url = URL.createObjectURL(file[0])
      this.imageUrl = url
      this.step = 1
    },
    publish() {
      let myPost = {
      name: "Kim Hyun",
      userImage: "https://picsum.photos/100?random=3",
      postImage: this.imageUrl,
      likes: 36,
      date: "May 15",
      liked: false,
      content: this.contents,
      filter: this.selectedFilter
      
      } 
      console.log('myPost', myPost)
      this.data.unshift(myPost)
      this.step = 0
    },
    content(v) {
      this.contents = v
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

}

 
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
  z-index: 100;
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
#app {
  box-sizing: border-box;
  font-family: "consolas";
  margin-top: 60px;
  width: 100%;
  max-width: 460px;
  margin: auto;
  position: relative;
  border-right: 1px solid #eee;
  border-left: 1px solid #eee;
}
</style>
