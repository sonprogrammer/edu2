<template>
  <div>
    <h2>버튼을 {{ count }}번 클릭했습니다.</h2>
    <h3>{{ getMessage() }}</h3>
    <button @click="increment">클릭!</button>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const count = ref(0);

    // 호출할 때마다 메시지 계산
    function getMessage() {
      console.log('Methods 실행');
      return count.value >= 5
        ? '클릭을 너무 많이 했어요!'
        : '조금 더 클릭해보세요!';
    }

    function increment() {
      count.value++;
    }

    return { count, getMessage, increment };
  },
};
</script>
