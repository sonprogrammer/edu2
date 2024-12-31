<template>
  <div>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">만세</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-link active" aria-current="page" href="#">
              <router-link to="/">home</router-link>
            </a>
            <a class="nav-link" href="#">
              <router-link to="/list">list</router-link>
            </a>
            <a class="nav-link" href="#">
              <router-link to="/detail">detail</router-link>
            </a>
          </div>
        </div>
      </div>
    </nav>

    
    
    <div class="mt-5">
      <router-view :data="data"></router-view>
    </div>




  </div>
</template>

<script>
import data from './assets/data'
// import List from './components/ListPage.vue'


export default {
  name: "App",
  data() {
    return{
      data
    }
  },
  components: {
  },
};
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
