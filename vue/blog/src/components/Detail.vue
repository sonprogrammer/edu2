<template>
  <div>
    <!-- 아래는 url에 있는 정보를 가져오고 그중 id값을 가져온다 -->
    {{$route.params.id}} 
    <!-- url에 http://localhost:8080/detail/2이렇게 입력하면 위 값은 2가 나온다 -->

    <div>
        <h3>{{blog[$route.params.id].title}}</h3>
        <p>{{blog[$route.params.id].content}}</p>
        <p>{{blog[$route.params.id].date}}</p>
        <router-view></router-view>
    </div>
    
  </div>
</template>

<script>
export default {
    name: "Detail",
    props:{
        blog: Array
    }

}
</script>

<style>

</style>