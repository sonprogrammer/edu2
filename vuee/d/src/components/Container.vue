<template>
  <div>
    <div v-if="step == 0">
        <router-link to="/problem/1" class="start">시작하기</router-link>

    </div>
    
    <div v-if="step == 2">
        <router-view :problems="problems"></router-view>
        <router-link :to="'/problem/' + (parseInt($route.params.id) + 1)" v-if="nextProblem" class="fixed-title" style="border-top: 2px solid; width: full">다음 문제</router-link>
    </div>
  </div>
</template>

<script>
export default {
    data(){
        return{

        }
    },
    props:{
        problems: Array,
        step: Number
    }

}
</script>

<style>

</style>