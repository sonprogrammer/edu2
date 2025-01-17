// function solution(rsp){
//     let result = ''

//     for(let i = 0; i < rsp.length; i++) {
//         if(rsp[i] === '2'){
//             result += '0'
//         }else if(rsp[i] === '0'){
//             result += '5'
//         }else if(rsp[i] === '5'){
//             result += '2'
//         }
//     }
//     return result
// }


// function solution(rsp){
//     return rsp.split('').map(v => v === '2' ? '0' : (v === '0' ? '5' : '2')).join('')
// }

// function solution(myS){
//     return myS.split('').filter(v => !isNaN(v)).map(v=> Number(v)).reduce((acc, cur) => acc + cur, 0)
// }

// function solution(nums){
//     let n = nums.length;
//     nums.sort((a, b) => a - b)

//     return Math.max(
//         nums[n-1]*nums[n-2],
//         nums[0]* nums[1]
//     )
    
// }


// function solution(myS){
//     return myS.split('').map(v=> v=== v.toUpperCase() ? v.toLowerCase() : v.toUpperCase()).join('')
// }



// function solution(myS, num1, num2) {
//     let arr = myS.split('')
//     let a = arr[num1]
//     arr[num1] = arr[num2]
//     arr[num2] = a
//     return arr.join('')
// }

// function solution(myS, num1, num2) {
//     let arr = myS.split('');

//     [arr[num1], arr[num2]] = [arr[num2], arr[num1]]
//     return arr.join('')
// }


// function solution(myS, n1, n2){
//     let arr= myS.split('')

//     let temp = arr[n1]
//     arr[n1] = arr[n2]
//     arr[n2] = temp
// }

// function solution(n){
//     let res = [] 
//     for(let i = 1; i <= n; i++){
//         if(n % i == 0){
//             res.push(i)
//         }
//     }
//     return res
// }

// function solution(arr){
//     let res = [];
//     let max = 0
//     let index = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] < arr[i + 1]){
//             max = arr[i + 1]
//             index = i + 1
//         }
//     }
//     return [max, index]
// }


// function solution(arr){
//     const max = Math.max(...arr)
//     const index = arr.indexOf(max)
//     return [max, index]
// }


console.log(solution([9, 10, 11, 8]))

