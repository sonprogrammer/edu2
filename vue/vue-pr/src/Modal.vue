<template>
   <div class="black-bg" v-if="modalOpen == true">
    <div class="white-bg">
      <img :src="products[clicked].image" style="width:100%">
      <h4>{{products[clicked].title}}</h4>
      <p>{{products[clicked].content}}</p>
      <p>{{products[clicked].price}} 원</p>
      <Discount />
      <!-- <button @click="modalOpen=false">close</button> -->
    </div>
  </div>
</template>

<script>
export default {
    name: 'Modal',
    props: {
        products : Array,
        modalOpen : Boolean,
        clicked : Number
    }
}
</script>

<style>

</style>