<template>
  <div>
    <div v-if="step == 1" style="width: 100%;">
        <Problem :problem="currentProblem" :nextProblem="nextProblem" :answerCheck="answerCheck" @showAnswer="answerCheck = true"  @score="totalScore++"/>
    </div>
    <div v-if="step == 2">
        <div class="count">{{ totalScore }}개 정답!</div>
        <div @click="$emit('gotoFisrtPage')" class="homeBtn">HOME으로 가기</div>
    </div>
  </div>
</template>

<script>
import Problem from './Problem.vue'

export default {
    data(){
        return{
            currentIndex: 0,
            answerCheck: false,
            totalScore: 0,
        }
    },
    props:{
        problems: Array,
        step: Number
    },
    computed:{
        currentProblem(){
            return this.problems[this.currentIndex]
        },
        isLastProblem(){
            return this.currentIndex == this.problems.length - 1 
        }
    },
    methods:{
        nextProblem(){
            if(!this.isLastProblem){
                this.currentIndex++
                this.answerCheck = false
            }else{
                this.$emit('gotoScorePage')
                this.currentIndex = 0
                this.answerCheck = false
            }
        },

    },
    components:{
        Problem
    }

}
</script>

<style>

.count{
    font-size: 37px;
    margin-bottom: 24px;
    text-align: center;
}

.homeBtn{
    font-size: 27px;
    color: rgb(172, 18, 172);
    text-align: center;
}

.homeBtn:hover{
    cursor: pointer;
}


</style>