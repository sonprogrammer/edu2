<template>

  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{작명}}</a>
  </div>
 <div>
    <div v-for="(a, i) in products" :key="i">
      <img :src="getImageSrc(i)" class="room-img">
      <h4>{{ a }}</h4>
      <p>XX 원</p>
      <button @click="신고수[i]++">허위매물 신고</button>
      <span>신고수 : {{ 신고수[i] }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){ //데이터 보관함
    return{
      price1 : 50,
      price2: 70,
      products : ['역삼동원룸', '천호동원룸', '마포구원룸'],
      menus: ['Home', 'Shop', 'About'],
      신고수: [0,0,0]
    }
  },
  methods : {
    increase(){
      this.신고수++;
    },
      getImageSrc(index) {
      return require(`./assets/room${index}.jpg`);
    }
  },
  components: {
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;

}
.menu a{
  color: white;
  padding: 10px;
}
.room-img{
  width: 100%;
  margin-top: 40px;
}
</style>
