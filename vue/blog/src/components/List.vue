<!-- eslint-disable vue/multi-word-component-names -->
<!-- eslint-disable vue/no-mutating-props -->

<template>

<div>

  <div v-for="(a, i) in blog" :key="i">
    <h4 @click="$router.push(`/detail/${i}`)">{{blog[i].title}}</h4>
    <p>{{blog[i].date}}</p>
  </div>

</div>

</template>

<script>
export default {
    name: 'List',
    props:{
        blog: Array
    }

}
</script>

<style>

</style>