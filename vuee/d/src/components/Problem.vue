<template>
  <div class="problem">
    <h1>
        {{ problem.id }}번 문제
    </h1> 
    <img :src="problem.image" alt="이미지" class="image">
    <input type="text" class="input" v-model="answer" @keydown.enter="check">
    <div v-if="answerCheck == false" class="check" @click="check()" @keydown.enter="check()">정답확인</div>
    <div v-if="answerCheck == true">
      <p v-if="marking()">정답입니다</p>
      <p v-if="!marking()">틀렸습니다</p>
      <p>{{problem.answer}}</p>
      <div class="next" @click="nextProblem"  @keydown.enter="nextProblem"  tabindex="0">다음 문제</div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      answer: '',
    }
  },
  props: {
    problem: Object,
    nextProblem: Function,
    answerCheck: Boolean
  },
  methods:{
    check(){
      this.$emit('showAnswer')
      this.marking()
    },
    marking(){
      return this.answer === this.problem.answer
    }

  }
  
  }

</script>

<style>

.problem{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

.image{
  width: 90%;
}

.input{
  padding: 10px;
}


.check{
  background-color: blue;
  padding: 10px 30px;
  border-radius: 20px;
  color: white;
}

.check:hover{
  cursor: pointer;
  opacity: 0.9;
}


.next{
  background-color: pink;
  padding: 10px 30px;
  border-radius: 20px;
  cursor: pointer;
}

.next:hover{
  cursor: pointer;
  opacity: 0.9;
}

.next:focus {
  outline: none; /* 기본 outline 제거 */
  border: 2px solid blue; /* 포커스 시 테두리 추가 */
}

</style>