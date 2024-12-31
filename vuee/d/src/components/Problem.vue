<template>
  <div>
    <!-- {{$route.params.id}}  -->
    <h1>
        {{ problem.id }}번 문제
    </h1> 
    <img src="problem.image" alt="1">
    <p>{{ problem.answer}}</p>
  </div>
</template>

<script>
export default {
  props: {
    problem:Array
  },
  
  }

</script>

<style>

</style>