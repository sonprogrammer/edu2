<!-- eslint-disable vue/multi-word-component-names -->

<template>

<div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#"><router-link to="/" >홈</router-link></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>

<router-link to="/" >홈</router-link>
<router-link to="/list">리스트페이지</router-link>

<div class="mt-4">
<router-view :blog="blog"></router-view>
</div>

<!-- <List :blog="blog"/> -->

</div>

</template>

<script>
import List from './components/List.vue'
import data from './assets/data'
import Home from './components/Home.vue'
import Detail from './components/Detail.vue'

export default {
  name: 'App',
  data(){
    return {
      blog : data
    }
  },
  components: {
    List: List,
    Home: Home,
    Detail: Detail
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
