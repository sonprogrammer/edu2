<template>
  <div>
    <h2>Computed vs Methods (반복 호출)</h2>
    <!-- Count 값을 변경하는 버튼 -->
    <button @click="increment">Count 증가</button>
    <p>현재 Count: {{ count }}</p>

    <h3>Computed 사용</h3>
    <!-- 동일한 computed property를 여러 번 사용 -->
    <p>{{ computedResult }}</p>
    <p>{{ computedResult }}</p>

    <h3>Method 사용</h3>
    <!-- 동일한 method를 여러 번 호출 -->
    <p>{{ methodResult() }}</p>
    <p>{{ methodResult() }}</p>
  </div>
</template>

<script>
import { ref, computed } from 'vue';

export default {
  setup() {
    const count = ref(0);

    const computedResult = computed(() => {
      console.log("Computed 실행");
      return `Computed 값: ${count.value * 2}`;
    });

    const methodResult = () => {
      console.log("Method 실행");
      return `Method 값: ${count.value * 2}`;
    };

    const increment = () => {
      count.value++;
    };

    return { count, computedResult, methodResult, increment };
  },
};
</script>
