<!-- eslint-disable vue/multi-word-component-names -->

<template>
<div>



<transition name="fade">
  <Modal :clicked = 'clicked' :products='products' :modalOpen='modalOpen' @closeModal="modalOpen=false"/>
</transition>

  <div class="menu">
    <a v-for="작명 in menus" :key="작명">{{작명}}</a>
  </div>

<Discount />


<button @click="priceSort">가격순 정렬</button>
<button @click="sortBack">되돌리기</button>


 <Card @openModal="modalOpen=true; clicked=$event" :products='products' :modalOpen='modalOpen'/>

 

</div>

</template>

<script>
import Discount from './Discount.vue'
import Card from './Card.vue'
import Modal from './Modal.vue'
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
      originalProducts : [...data],
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
    },
    priceSort(){
      this.products.sort(function(a, b){
        return a.price - b.price
      })
    },
    sortBack(){
      this.products = [...this.originalProducts];
    }
  },
  components: {
    Discount : Discount,
    Modal : Modal,
    Card : Card,
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

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}
.start{
  opacity: 0;
  transition: all 1s;
}
.end{
  opacity: 1;
}


.fade-enter-from{
  opacity: 0;
}
.fade-enter-active{
  transition: all 1s;
}
.fade-enter-to{
  opacity: 1;
}
</style>
