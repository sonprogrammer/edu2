<template>
  <div @click="fire" :class="a + ' filter-item'"  :style="`background-image:url(${image})`">
    <slot></slot>
  </div>

</template>

<script>

/*eslint-disable*/
export default {
    name: 'filterbox',
    props: {
        image: String,
        a: String
    },
    methods: {
        fire(){
            this.emitter.emit('clicked', this.a)//이벤트 쏴주는 법임
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
        color: black;
        background-size: cover;
        background-position: center;
    }
</style>