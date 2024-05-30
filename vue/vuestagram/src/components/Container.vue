<template>
  <div>
    <Post :post="post[i]"  v-for="(a, i) in post" :key="i"/>
  </div>
</template>

<script>
import Post from "./Post.vue";

export default {
  name: "Container",
  props: {
    post: Array
  },
  components: {
    Post: Post,
  },
};
</script>

<style>
</style>