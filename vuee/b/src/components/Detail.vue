<template>

  <div>
    <div>
        <h3>detail page</h3>
        <h4>{{data[$route.params.id].title}}</h4>
        <p>{{data[$route.params.id].content}}</p>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
    name: 'Detail',
    props :{
        data: Array
    }

}
</script>

<style>

</style>