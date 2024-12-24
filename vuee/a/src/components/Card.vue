<template>
  <div>
    <img :src="rooms.image" alt="image" class="room-img" @click="() => { $emit('openModal', rooms.id); check(); }">
    <h4>{{rooms.title}}</h4>
    <p>{{rooms.price}} Won</p>
    <p>{{rooms.id}}</p>
    <button @click="$emit('increase')">허위매물신고</button>
    <span>신고수 : {{ rooms.report }}</span>
  </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        rooms: Object
    },
    methods: {
        increase(i){
            this.$emit('increase', i)
        },
        check(){
          console.log('rooms.id', this.rooms.id)
        }
    },

}
</script>

<style>

</style>