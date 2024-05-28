<template>
<div>

  <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <h4>{{products[clicked].title}}</h4>
      <p>{{products[clicked].content}}</p>
      <button @click="modalOpen=false">close</button>
    </div>
  </div>




  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{작명}}</a>
  </div>

 <div>
    <div v-for="(a, i) in products" :key="i">
      <img :src="products[i].image" class="room-img">
      <h4 @click="modalOpen=true; clicked= i">{{ products[i].title }}</h4>
      <p>{{ products[i].price}} 원</p>
    </div>
  </div>

 

</div>

</template>

<script>

import data from './assets/room'

export default {
  name: 'App',
  data(){ //데이터 보관함
    return{
      clicked: 0,
      modalOpen : false,
      price1 : 50,
      price2: 70,
      products : data,
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
body{
  margin: 0;
}
div{
  box-sizing: border-box;
}
.black-bg{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  padding: 20px;
}
.white-bg{
  width: 100%;
  background: white;
  border-radius: 18px;
  padding: 20px;
}

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
