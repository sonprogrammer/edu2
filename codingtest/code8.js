// function solution(absolutes, sign){
//     let sum = 0
//     for(let i = 0; i < absolutes.length; i++){
//         if(sign[i]){
//             sum += absolutes[i]
//         }else{
//             sum -= absolutes[i]
//         }
//     }
//     return sum
// }

// function solution(numbers){
//     let sum = 0;
    
//     let check = Array.from({ length : 10}, (_, i) => i)
//     for(let num of numbers) {
//         check[num] = -1
//     }
//     for(let num of check){
//         if(num >= 0){
//             sum += num
//         }
//     }
//     return sum
// }


// function solution(numbers){
//     let answer = 0

//     for(let i = 0; i <= 9; i++){
//         if(!numbers.includes(i)){
//             answer += i
//         }
//     }
//     return answer
// }


// function solution(arr, divisor){
//     let answer = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % divisor == 0){
//             answer.push(arr[i]);
//         }
//     }
//     if(answer.length == 0){
//         answer.push(-1)
//     }
//     return answer.sort((a, b) => a -b)
// }


// function solution(arr, divisor){
//     let answer = arr.filter(v => v%divisor == 0)
//     return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
// }


// function solution(arr){
//     let answer = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > arr[i+1]) answer.push(arr[i]);
//      }
//      if(answer.length === 0) answer.push(-1);
//      return answer
// }


// function solution(arr){
//     if(arr.length <= 1){
//         return arr.length === 1 ? [-1] : []
//     }
//     let min = arr.indexOf(Math.min(...arr))
//     let answer = arr.filter((_, index) => index !== min)
//     return answer
// }


function solution(arr){
    const min = Math.min(...arr);
    return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
}

console.log(solution([4, 3, 2, 1]))