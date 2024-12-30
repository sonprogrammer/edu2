<template>
  <div>
    <h2>상품 가격: ${{ price }}</h2>
    <h3>할인 가격: ${{ discountedPrice }}</h3>
    <input v-model="discount" placeholder="할인율을 입력하세요 (%)" />
  </div>
</template>

<script>
import { computed, ref } from 'vue';

export default {
  setup() {
    const price = ref(100); // 원래 가격
    const discount = ref(0); // 할인율

    // computed를 사용하여 할인된 가격 계산
    const discountedPrice = computed(() => {
      return price.value - (price.value * discount.value) / 100;
    });

    return {
      price,
      discount,
      discountedPrice,
    };
  },
};
</script>
