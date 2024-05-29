<!-- eslint-disable vue/multi-word-component-names -->

<template>
   <div>
    <div v-for="(a, i) in products" :key="i">
      <img :src="products[i].image" class="room-img">
      <h4 @click="$emit('openModal', i)">{{ products[i].title }}</h4>
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
    },
    methods: {
        
    }
}
</script>

<style>

</style>