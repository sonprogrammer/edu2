<template>
  <div class="discount">
    <h4>지금 결제하면 {{discount}}% 할인</h4>
  </div>
</template>

<script>
export default {
    name: "Discount",
    props: {
      discount: Number
    }
}
</script>

<style>

</style>