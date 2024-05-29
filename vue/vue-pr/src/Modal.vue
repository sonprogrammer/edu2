<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->

<template>
   <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="products[clicked].image" style="width:100%">
      <h4>{{products[clicked].title}}</h4>
      <p>{{products[clicked].content}}</p>
      <!-- <input @input="month = $event.target.value"/> -->
      <input v-model.number="month">
      <p>{{ month }}개월 선택함 : {{month*products[clicked].price}} 원</p>
      <button @click="$emit('closeModal')">close</button>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    data(){ 
        return {
            month: 1,
        }
    },
    watch: {
        month(a){
            if(isNaN(a)){
                alert('글자는 입력 못함')
                this.month = 1
            }
        }
    },
    props: {
        products : Array,
        modalOpen : Boolean,
        clicked : Number,
    }
}
</script>

<style>

</style>