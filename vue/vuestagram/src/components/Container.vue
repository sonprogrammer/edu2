<template>
  <div>
    <div v-if="step == 0">
      <Post :post="post[i]" v-for="(a, i) in post" :key="i" />
    </div>

    <div v-if="step == 1">
      <!-- 필터선택페이지 -->
      <div class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="filters">
        <FilterBox v-for="a in filter" :key="a" :image="image" :filter="filter"></FilterBox>
      </div>
    </div>

    <div v-if="step == 2">
      <!-- 글작성페이지 -->
      <div class="upload-image" :style="`background-image:url(${image})`"></div>
      <div class="write">
        <textarea
          @input="$emit('write', $event.target.value)"
          class="write-box"
        >
write!</textarea
        >
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import Post from "./Post.vue";
import FilterBox from "./FilterBox.vue";
import filter from '../assets/filter'

export default {
  name: "Container",
  data() {
    return{
      filter : filter
    }
  },
  props: {
    post: Array,
    step: Number,
    image: String,
    write: String,
  },
  components: {
    Post: Post,
    FilterBox: FilterBox,
  },
  methods: {
    change(e) {
      let a = e.target.value;
      this.write = a;
    },
  },
};
</script>

<style>
.upload-image {
  width: 100%;
  height: 450px;
  background: cornflowerblue;
  background-size: cover;
}
.filters {
  overflow-x: scroll;
  white-space: nowrap;
}
.filter-1 {
  width: 100px;
  height: 100px;
  background-color: cornflowerblue;
  margin: 10px 10px 10px auto;
  padding: 8px;
  display: inline-block;
  color: white;
  background-size: cover;
}
.filters::-webkit-scrollbar {
  height: 5px;
}
.filters::-webkit-scrollbar-track {
  background: #f1f1f1;
}
.filters::-webkit-scrollbar-thumb {
  background: #888;
  border-radius: 5px;
}
.filters::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.write-box {
  border: none;
  width: 90%;
  height: 100px;
  padding: 15px;
  margin: auto;
  display: block;
  outline: none;
}
</style>