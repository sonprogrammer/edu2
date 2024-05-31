<template>
  <div class="filter-item"  :style="`background-image:url(${image})`"></div>
</template>

<script>
/*eslint-disable*/
export default {
    name: 'filterbox',
    props: {
        image: String
    }
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