
<template>
  <div class="problem">
    <h1>
        {{ problem.id }}번 문제
    </h1> 
    <img :src="problem.image" alt="이미지" class="image">
    <input v-if="answerCheck == false" type="text" class="input" v-model="answer" @keyup.enter="check()">
    <p v-if="answerCheck == true">내 정답 : {{answer}}</p>
    <div v-if="answerCheck == false" class="check" @click="check()">정답확인</div>
    <div v-if="answerCheck == true">
      <p v-if="marking()" class="right">정답입니다</p>
      <p v-if="!marking()" class="wrong">틀렸습니다</p>
      <p class="answer">정답 : {{problem.answer}}</p>
      <button class="next" @click="nextProblemAndResetInput()" @keyup.enter="nextProblemAndResetInput()">다음 문제</button>
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
    answerCheck: Boolean,
  },
  methods:{
    check(){
       if (!this.answerCheck) {  
        this.$emit('showAnswer');  
        const isCorrect = this.marking();
        console.log('isCorrect', isCorrect)
        if (isCorrect) {
          this.$emit('score');  
        }
      }
    },
    marking(){
      return this.answer === this.problem.answer
    },
    nextProblemAndResetInput(){
      this.nextProblem()
      this.answer = ''
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

.right{
  color: blue;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.wrong{
  color: red;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

.answer{
  text-align: center;
  margin-bottom: 20px;
}

.none{
  display: none;
}

</style>