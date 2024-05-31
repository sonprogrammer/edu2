<template>
  <div>
    <div style="padding: 10px">
      <h4>팔로워</h4>
      <input placeholder="🔍"  @input="search($event.target.value)"/>
      <div class="post-header" v-for="(a,i) in follower" :key="i"> 
        <div class="profile" :style="`background-image:url(${a.image})`"></div>
        <span class="profile-name">{{ a.name }}</span>
      </div>
    </div>
  </div>
</template>

<script>
/*eslint-disable*/
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "mypage",
  setup() {
    //컴포넌트 만들기전에 setup부터 실행시킴
    let follower = ref([]); //데이터는 ref()에 담는다
    function search(검색어){
        let newFollower = follower.value.filter((a) => {
            return a.name.indexOf(검색어) != -1
        })
        follower.value = [...newFollower]
    }

    onMounted(() => {
      //장착되고나서 실행할 코드
      axios.get("/follower.json").then((a) => {
        follower.value = a.data; // folower라는 데이터를 조작하려면 뒤에 value를 써줘야한다
      });
    });

    return { follower,search }; //이렇게 해줘야 위에서  사용가능하다
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>