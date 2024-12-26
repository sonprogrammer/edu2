<template>
  <div>
    <div v-for="(a, i) in data" :key="i" class="mt-5">
      <h3 @click="$router.push(`/detail/${i}`)">{{ a.title }}</h3>
      <p>{{ a.date }}</p>
    </div>
  </div>
</template>

<script>
export default {
    name: "ListPage",
    props: {
        data: Object
    }

}
</script>

<style>

</style>