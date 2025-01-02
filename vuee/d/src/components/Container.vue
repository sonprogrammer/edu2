<template>
  <div>
    <div v-if="step == 1" style="width: 100%;">
        <Problem :problem="currentProblem" :nextProblem="nextProblem" :answerCheck="answerCheck" @showAnswer="answerCheck = true"/>
    </div>
  </div>
</template>

<script>
import Problem from './Problem.vue'

export default {
    data(){
        return{
            currentIndex: 0,
            answerCheck: false
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
                alert('cool')
                this.$emit('gotoFisrtPage')
                this.currentIndex = 0
            }
        },
    },
    components:{
        Problem
    }

}
</script>

<style>


</style>