<template>
  <div>

    <transition name="fade">
      <Modal @modalClosed="modalClosed" :rooms="rooms.find(room => room.id === clicked)"  :modalOpend='modalOpend'/>
      <!-- <Modal @modalClosed="modalClosed" :rooms='rooms' :clicked='clicked' :modalOpend='modalOpend'/> -->
    </transition>


    <div class="menu">
      <a v-for="a in menus" :key="a" :href="a">{{ a }}</a>
    </div>


    <Discount v-if="showDiscount == true"/>

    
    <button @click="priceSort">가격순 정렬</button>
    <button @click="sortBack">되돌리기</button>


      <Card @increase="increase(i)" @click="id" @openModal="modalOpend = true; clicked = $event"  :rooms='rooms[i]' v-for="(a,i) in rooms" :key="a.id"/>

  </div>
</template>

<script> 
import data from './assets/room'
import Discount from './components/Discount.vue'
import Modal from './components/Modal.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  data(){
    return{
      showDiscount: true,
      originalRooms: [...data],
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
    },
    modalClosed(){
      this.modalOpend = false;
    },
    priceSort(){
      this.rooms.sort((a, b) => a.price - b.price)
    },
    sortBack(){
      this.rooms = [...this.originalRooms]
    },
    id(){
      console.log('id', this.clicked)
    },
  },
  // mounted() {
  //   setTimeout(() => {
  //     this.showDiscount = false
  //   }, 2000);
  // },
  components: {
    Discount,
    Modal,
    Card
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
  display: flex;
  justify-content: center;
  align-items: center;
}

.white-bg{
  width: 80%;
  background: white;
  border-radius: 8px;
  padding: 20px;
  position: relative;
}

.white-bg img{
  width: 100%;
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

  .start{
    opacity: 0;
    transition: all 0.5s ease-in-out;
  }

  .end{
    opacity: 1;
  }

  .fade-enter-from{
    opacity: 0;
  }

  .fade-enter-active{
    transition: all 0.5s;
  }

  .fade-enter-to{
    opacity: 1;
  }

  .fade-leave-enter{
    transform: translateY(-1000px);
  }
  .fade-leave-active{
    transition: all 0.5s;
  }
  .fade-leave-to{
    transform: translateY(1000px);
  }

</style>
