// function solution(answers) {
//     var answer = [];

//     const patterns = [
//         [1,2,3,4,5], //5
//         [2,1,2,3,2,4,2,5], //8
//         [3,3,1,1,2,2,4,4,5,5] //10
//     ]
//     //[1,3,2,4,2]
//     const scores = [0, 0, 0]

//     answer.forEach((a, idx) => {
//         patterns.forEach((pattern, i)=> {
//             if(a === pattern[idx % pattern.length]){
//                 scores[i]++
//             }
//         })
//     })

//     const maxScore = Math.max(...scores)

//     return scores.map((s,i) => (s === maxScore ? i+1 : null)).filter(num => num !== null);
// }

// function solution(n,m,section){
//     let answer = 0
//     let painted = 0//5

//     for(let s of section){
//         if(painted < s){
//             answer++
//             painted = s + m -1
//         }
//     }
//     return answer
// }

// function solution(k, m, score){
//     let answer = 0;
//     score.sort((a, b) => b - a)
//     for(let i = m-1; i < score.length; i+=m){
//         answer += score[i] * m
//     }

//     return answer

// }

// function isPrime(n) {
//     if(n< 2) return false
//     for(let i = 2; i <= Math.sqrt(n); i++){
//         if(n%i === 0)return false
//     }
//     return true
// }

// function solution(nums) {
//   let answer = 0;
//   for (let i = 0; i < nums.length; i++) {
//     for(let j = i+1; j < nums.length; j++){
//         for(let k = j+1; k < nums.length; k++){
//             const sum = nums[i] + nums[j] + nums[k]
//             if(isPrime(sum)){
//                 answer++
//             }
//         }
//     }
//   }
//   return answer;
// }

// function solution(n){
//     let asnwer = 0
//     const s = new Set()
//     for(let i = 1; i <=n; i+=2){
//         s.add(i)
//     }
//     s.delete(1)
//     s.add(2)
//     for(let j=3; j<Math.sqrt(n); j++){
//         if(s.has(j)){
//              for(let k=j*2; k<=n; k+=j){
//                 s.delete(k);
//              }
//         }
//     }

//     return s.size
// }

// function solution(babbling) {
//     const speak = ["aya", "ye", "woo", "ma"];

//     return babbling.filter(word=> {
//         let prev = ''
//         let temp = word

//         while(temp){
//             const matched = speak.find(s => temp.startsWith(s))
//             console.log('ma', matched)
//             if(!matched || matched === prev) return false
//             prev = matched
//             temp = temp.slice(matched.length)
//         }
//         return true
//     }).length
// }

// function solution(s) {
//   let answer = 0;
//   let i = 0
  
//   while(i < s.length){
//     const x = s[i]
//     let xCount = 0
//     let yCount = 0

//     for(let j = i; j < s.length; j++){
//         if(s[j] === x) xCount++
//         else yCount++

//         if(xCount === yCount){
//             i = j+1
//             answer++
//             break
//         }

//         if(j ===s.length -1){
//             i = s.length
//             answer++
//         }
//     }
//   }
  
//   return answer;
// }


// function solution(s, skip, index) {
//     var answer = '';
//     return answer;
// }


// function solution(n, control) {
//     let res = 0
   
//     for(let i =0; i< control.length; i++){
//         if(control[i] ==='w'){
//             res+=1
//         }else if(control[i] === 's'){
//             res -= 1
//         }else if(control[i] === 'd'){
//             res += 10   
//         }else{
//             res -= 10
//         }
//     }


    
//     return res
// }


console.log(solution(0, "wsdawsdassw"));
