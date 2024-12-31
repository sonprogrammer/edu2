<template>
  <div style="padding: 10px">
    <h4>팔로워</h4>
    <input placeholder="🔍" @input="search($event.target.value)"/>
    <div class="post-header" v-for="a in filteredFollower()" :key="a">
      <div class="profile" :style="{backgroundImage: `url(${a.image})`}"></div>
      <span class="profile-name">{{a.name}}</span>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref } from 'vue'
import axios from 'axios'

export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "mypaeg",
    setup() {
        let follower = ref([])
        let searchTerm = ref('')
        let searchedFollower = computed(() => {
            console.log('computed 실행')
            return follower.value.filter(a => 
                a.name.toLowerCase().includes(searchTerm.value.toLowerCase())
            )
        })

         function filteredFollower() {
      console.log("methods 계산 실행");
      return follower.value.filter(a =>
        a.name.toLowerCase().includes(searchTerm.value.toLowerCase())
      );
    }

        function search(value){
            searchTerm.value = value
        }

        
        onMounted(()=>{
            axios.get('/follower.json').then(a => {
                follower.value = a.data
            })

        })
        


        return {follower, searchedFollower, search, filteredFollower}

    }
};
</script>

<style>
</style>