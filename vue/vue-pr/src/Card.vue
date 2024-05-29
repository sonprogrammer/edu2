<template>
   <div>
    <div v-for="(a, i) in products" :key="i">
      <img :src="products[i].image" class="room-img">
      <!-- <h4 @click="modalOpen=true; clicked= i">{{ products[i].title }}</h4> -->
      <p>{{ products[i].price}} 원</p>
    </div>
  </div>

</template>

<script>

export default {
    name: 'Card',
    props: {
        products: Array,
        modalOpen: Number
    }
}
</script>

<style>

</style>