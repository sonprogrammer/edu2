<template>
  <div
    @click="fire"
    :class="a"
    class="filter-item"
    :style="`background-image: url(${imageUrl})`"
  >
   <button @click="fire">button</button> 
  </div>
</template>

<script>
export default {
  name: "FilterBox",
  props: {
    imageUrl: String,
    a: String,
  },
  methods: {
    fire(){
        this.emitter.emit('boxClick',this.a)
    }
  },
};
</script>

<style>
.filter-item {
    width: 100px;
    height: 100px;
    margin: 10px 10px 10px auto;
    padding: 8px;
    display: inline-block;
    color: white;
    background-size: cover;
    background-position: center;
}

</style>