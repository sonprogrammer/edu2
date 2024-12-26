<template>
   <div class="black-bg" v-if="modalOpend == true" @click="closedModal">
      <div class="white-bg" @click.stop>
        <h4>{{rooms.title}}</h4>
        <p>{{rooms.content}}</p>
        <img :src="rooms.image" alt="image">
        <p>{{rooms.id}}</p>
        <p>hi</p>
        <input v-model="month">
        <p>{{month}}개월 선택함 : {{rooms.price * month}} Won</p>
        <p class="close" @click="closedModal">X</p>
      </div>
    </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){
      return{
        month: 1,
      }
    },
    // watch: {
    //   month(a, b){
    //     if(a >= 13){
    //       alert('no 13개월')
    //     }
    //     if(isNaN(a) === true){
    //       alert('use number')
    //       this.month=1
    //     }
    //   }
    // },
    beforeUpdate() {
      if(this.month <= 2){
        alert('3개월 부터 팝니다')
        this.month = 3
      }
    },
    props: {
        rooms: Array,
        clicked: Number,
        modalOpend: Boolean,
    },
    methods: {
      closedModal(){
        this.$emit('modalClosed')
      }
    },

}
</script>

<style>

</style>