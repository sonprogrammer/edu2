<template>
    <div class="discount">
      <h4>지금 결제하면 {{second}}%할인</h4>
    </div>
</template>

<script>
export default {
    name: 'Discount',
    data(){
      return{
        second : 5
      }
    },
    mounted() {
      setInterval(() => {
        this.second -= 1;
        if(this.second < 0){
          this.second = 0;
        }
      }, 1000);
    },
    
}
</script>

<style>

.discount{
  background: #eee;
  padding: 10px;
  margin: 10px;
  border-radius: 5px;
}

</style>