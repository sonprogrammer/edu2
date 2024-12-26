<template>
  <div>
    <Post :a="a" v-for="(a, i) in data" :key="i" />
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  components: {
    Post,
  },
  props: {
    data: Array,
  },
};
</script>

<style>
</style>