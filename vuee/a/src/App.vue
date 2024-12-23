<template>
  <div>

    <!-- modal -->
    <div class="black-bg" v-if="modalOpend == true" @click="modalOpend = false">
      <div class="white-bg" @click.stop>
        <h4>{{rooms[clicked].title}}</h4>
        <p>{{rooms[clicked].content}}</p>
        <p class="close" @click="modalOpend = close">X</p>
      </div>
    </div>

    <div class="menu">
      <a v-for="a in menus" :key="a" :href="a">{{ a }}</a>
    </div>

    
  <div v-for="(a,i) in rooms" :key="a">
    <img :src="`https://codingapple1.github.io/vue/room${i}.jpg`" alt="image" class="room-img" @click="modalOpendF(i)">
    <h4 >{{a.title}}</h4>
    <p>{{a.price}} Won</p>
    <button @click="increase(i)">허위매물신고</button>
    <span>신고수 : {{ a.report }}</span>
  </div>

  </div>
</template>

<script>
import data from './assets/room'

export default {
  name: 'App',
  data(){
    return{
      menus: ['Home', 'Shop', 'About'],
      modalOpend: false,
      rooms: data,
      clicked: 0
    }
  },
  methods: {
    increase(i){
      this.rooms[i].report++;
    },
    modalOpendF(i){
      this.modalOpend = true;
      this.clicked = i;
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

.room-img{
  width: 80%;
  margin-top: 40px;
}

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
  border-radius: 8px;
  padding: 20px;
  position: relative;
}

.close{
  position: absolute;
  right: 10px;
  top: 10px;
  cursor: pointer;
  width: 20px; 
  height: 20px; 
  padding: 5px; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  transform: translate(-10px, -10px);
}
.close:hover{
  background-color: black;
  border-radius: 50%;
  color: white;
  }

</style>
