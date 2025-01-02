<template>
  <div class="container">
    <router-link to="/" class="title">
      <h1 class="fixed-title title"  style="border-bottom: 2px solid; width: full">지능 테스트</h1>
    </router-link>
    <div class="box">
      <Container :problems="problems" :step="step" @gotoFisrtPage="step=0"/>
      <!-- <router-view :problem="problem"></router-view> -->
      <div v-if="isHome" class="start" @click="nextPage()">시작하기</div>
    </div>
  </div>
</template>


<script>
import problems from './assets/problem'
import Container from './components/Container.vue'


export default {
  name: 'App',
  data() {
    return{
      problems,
      step: 0
    }
  },
  methods:{
    nextPage(){
      this.step++
      console.log(this.step)
    }
  },
  computed: {
    isHome(){
      return this.step == 0
    },
    nextProblem(){
      return parseInt(this.$route.params.id) <= this.problems.length;
    },
  },
  components: {
    Container
  }
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box; 
}
html, body {
  height: 100%;  /* 전체 높이를 채움 */
  background-color: lightblue; /* 바깥쪽 배경색을 원하는 색으로 설정 */
}

#app {
  height: 100vh;
  max-width: 383px;
  border: 2px solid black;
  margin-left: 0;
  margin-right: 0;
  margin: auto;
  background-color: skyblue;
}

.container{
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title{
  background-color: red;
  text-decoration: none;
}

.box{
  height: 100%;
  background-color: orange;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start{
  font-size: 72px;
  border: 3px solid blue;
  border-radius: 20px;
  background-color: brown;
  padding: 10px;
  transition: transform 0.7s ease;
  color: white;
}

.start:hover{
  transform: scale(0.8);
}

.fixed-title{
  padding: 24px;
  width: 100%;
  text-align: center;
}
</style>
