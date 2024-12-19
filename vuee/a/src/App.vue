<template>
  <div>

    <div class="menu">
      <a v-for="a in menus" :key="a" :href="a">{{ a }}</a>
    </div>
  <div v-for="a in products" :key="a">
    <h4>{{a}}</h4>
    <p>{{price2}}</p>
    <button @click="reports++">허위매물신고</button>
    <span>신고수 : {{ reports }}</span>
  </div>

  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      price1 : 10,
      price2 : 20,
      products : ['역삼동 원룸', '천호동 원룸', '마포구 원룸'],
      menus: ['Home', 'Shop', 'About'],
      reports: 0
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
  color: #090909;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.menu{
  background: darkslateblue;
  padding: 15px;
  border-radius: 5px;
}
.menu a{ 
  color: white;
  padding: 10px;
  text-decoration: none;
}
</style>
