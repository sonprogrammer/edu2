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


// function solution(arr){
//     const min = Math.min(...arr);
//     return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }


// function solution(phone_number){
//     return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
// }

// function solution(s){
//     let midIndex = Math.floor(s.length / 2)
//     if(s.length % 2 === 0){
//         return s[midIndex - 1] + s[midIndex]
//     }else{
//         return s[midIndex]
//     }
// }


// function solution(n){
//     let answer = ''
//     for(let i = 0; i < n; i++) {
//         if(i % 2 === 0){
//             answer += '수'
//         }else{
//             answer += '박'
//         }
//     }
//     return answer
// }

// function solution(a, b){
//     let result = 0
//     for(let i = 0; i < a.length; i++) {
//         result += a[i]*b[i]
//     }
//     return result
// }

// function solution(s){
//     let arr = s.split('')
//     arr.sort((a, b) => {
//         if(a.toLowerCase() === b.toLowerCase()){
//             return a > b ? -1 : 1
//         }else{
//             return a.toLowerCase() > b.toLowerCase() ? -1 : 1
//         }
//     })
//     return arr.join('')
// }

// function solution(s) {
//     return s.split('').sort((a, b) => {
//         if (a < b) return 1;
//         if (a > b) return -1;
//         return 0;
//     }).join('');
// }

// function solution(left, right) {
//     let result = 0
//     for(let i = left; i <= right; i++) {
//         if(Number.isInteger(Math.sqrt(i))){
//             result -= i
//         }else{
//             result +=i
//         }
//     }
//     return result
// }

// function solution(price, money, count){
//     let result = 0;
//     for(let i = 1; i <= count; i++) {
//         result += price * i
//     }
//     return result - money
// }

// function solution(s){
//     if(s.length !== 4 && s.length !== 6){
//         return false
//     }
//     for(let i = 0; i < s.length; i++) {
//         if(isNaN(s[i]) || s[i] === ' '){
//             return false
//         }
//     }
//     return true
// }

// function solution(arr1, arr2){
//     let arr = []
//     for(let i = 0; i < arr1.length; i++){
//         let row = []
//         for(let j = 0; j < arr1[i].length; j++){
//             row.push(arr1[i][j] + arr2[i][j])
//         }
//         arr.push(row)
//     }
//     return arr
// }

// function solution(a, b){
//     let r;
//     for(let ab = a*b; r = a % b; a =b, b=r){}
//     return [b, ab/b]

// }


// function solution(arr){
//     let answer = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i-1]){
//             answer.push(arr[i]);
//         }
//     }
//     return answer;
// }

// function solution(arr){
//     return arr.filter((val, i) => val != arr[i+1])
// }

// function solution(d, budget){
//     d.sort((a, b) => a - b)
//     let count = 0
//     for(let i = 0; i < d.length; i++){
//         if(budget >= d[i]){
//             budget -= d[i]
//             count++
//         }else{
//             break
//         }
//     }
//     return count
// }

// function solution(n){
//     let three = n.toString(3)

//     let reverseThreee = three.split('').reverse().join('')

//     return parseInt(reverseThreee, 3)
// }

// function solution(s){
//     let arr = s.split(' ')
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if(j % 2 === 0){
//                 result.push(arr[i][j].toUpperCase())
//             }else{
//                 result.push(arr[i][j])
//             }
//         }
//     }
//     return result.join('')
// }


// function solution(s){
//     return s.split(' ').map(word =>{
//         return word.split('').map((char, i) =>{
//             if(i % 2 == 0){
//                 return char.toUpperCase()
//             }else{
//                 return char.toLowerCase()
//             }
//         }).join('')
//     }).join(' ')
// }



console.log(solution("try hello world"))