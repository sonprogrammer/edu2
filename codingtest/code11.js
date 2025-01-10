// function sol(n, arr1, arr2){
//     let arrOne = []
//     let arrTwo = []
//     for(let i = 0; i < arr1.length; i++){
//         let binaryOne =  arr1[i].toString(2)
//         if(binaryOne.length !== n){
//             let newOne = '0' + binaryOne
//             console.log('newOne', newOne)
//             arrOne.push(Number(newOne))
//         }else{
//             arrOne.push(Number(binaryOne))
//         }

//     }

//     return arrOne
// }

// function sol(n, arr1, arr2){
//     const res = []

//     for(let i = 0; i < n; i++){
//         const line = (arr1[i] | arr2[i]).toString(2).padStart(n, '0')

//         let converted = ''
//         for(let char of line){
//             if(char === '0'){
//                 converted += ' '
//             }else{
//                 converted += '#'
//             }
//         }
//         res.push(converted)
//         // res.push(line.replace(/1/g, '#').replace(/0/g,' '))
//     }
//     return res
// }

// function sol(s){
//     let res = ''
//     let num = s.split(' ')

//     let max = Math.max(...num)
//     let min = Math.min(...num)

//     res = max + ' ' + min
    
//     return res
// }

// function sol(a, b){
//     let res = 0
//     a.sort((c, d) => c - d )
//     b.sort((c, d) => d - c) //뒤에있는게 커야함
//     for(let i = 0; i < a.length; i++){
//         res += a[i]*b[i]
//     }
//     return res
// }

// function sol(s){
//     let res = ''
//     let first = s[0]

//     if(lower(first)){
//         let upper = first.toUpperCase()
//         res = upper + s.slice(1)
//     } 

//     for(let i = 1; i < res.length; i++){
//         if(!lower(res[i])){ //대문자이면
//             res = res.slice(0, i) + res[i].toLowerCase() + res.slice(i+1)
//         }
//     }


//     function lower(v){
//         return v === v.toLowerCase()
//     }
//     return res     
// }

// function sol(s) {
//     let answer = ''
//     for(let i = 0; i < s.length; i++){
//         if(i === 0 || s[i-1] === ' '){
//             answer += (s[i].toUpperCase())
//         }else{
//             answer += s[i].toLowerCase()
//         }
//     }
//     return answer
// }

// function solution(s) {
//     let count = 0;
//     for (let char of s) {
//         if (char === '(') {
//             count++;
//         } else if (char === ')') {
//             count--;
//         }
//         if (count < 0) {
//             return false;
//         }
//     }
//     return count === 0;
// }


// function sol(s){
//     let count = 0;
//     let removedZero = 0

//     while(s !== '1'){
//         let currentRemovedZero = 0
//         let newOne = ''

//         for(let i = 0; i < s.length; i++){
//             if(s[i] === '0'){
//                 currentRemovedZero++
//             }else{
//                 newOne += s[i]
//             }
//         }
//         s = (newOne.length).toString(2)
//         removedZero += currentRemovedZero
//         count++
//     }
//     return [count, removedZero]
    
// }


// function sol(s){
//     let count = 0;
//     let removedZero = 0

//     while(s !== '1'){
//         let newOne =''
//         let currentRemovedZero = 0

//         for(let i = 0; i < s.length; i++){
//             if(s[i] === '0'){
//                 currentRemovedZero++
//             }else{
//                 newOne += s[i]
//             }
            
//         }
//         s = (newOne.length).toString(2)
//         removedZero += currentRemovedZero
//         count++
//     }
//     return [count, removedZero]
// }


// function solution(n) {
//     var answer = 0;
//     let  i = 0;
//     while(n > 0){
//         i++;
//        if(n % i  === 0)  answer++;
//         n -= i;
//     }
//     return answer;
// }


// function solution(n){
//     let answer = 0;
//     let i = 0;

//     while(n > 0){
//         i++;
//         console.log('i',i)
//         if(n % i === 0) answer++;
//         n = n - i;
//         console.log('n', n)
//     }
//     return answer;
// }





// function solution(s){
//     let answer = ''

//     for(let i = 0; i < s.length; i++) {
//         if(s[i] == s[i + 1]){
//             answer += s.slice(0, i)+s.slice(i + 2, s.length+1)
//             break;
//         }
//     }
//     console.log(answer)

//     while(answer.length !== 0){
//         let option = answer          
//         for(let i = 0; i < option.length; i++) {
//             if(option[i] == option[i + 1]){
//                 return 1
//             }else{
//                 return 0
//             }
//         }
//     }
//     return 0

// }

// function solution(s){
//     let stack = [];

//     for(let i = 0; i < s.length; i++){
//         if(stack.length > 0 && stack[stack.length - 1] == s[i]){
//             stack.pop()
//         }else{
//             stack.push(s[i])
//         }
//     }
//     return stack.length === 0 ? 1 : 0
// }

// function solution(brown, yellow){
//     let total = brown + yellow

//     for(let x = 0; x < Math.sqrt(total); x++){
//         if(total % x === 0){
//             let y = total / x
//             if((x-2) * (y-2) === yellow){
//                 return [y , x]
//             }
//         }
//     }
// }


function solution(n){
    let countOne = num => num.toString(2).split('1').length - 1

    let nCount = countOne(n)
    console.log(nCount)

    let nextNumber = n + 1
    while(nextNumber > n){
        if(countOne(nextNumber) == nCount){
            return nextNumber
        }else{
            nextNumber++
        }
    }
}

function solution(n){
    const countOne = num => num.toString(2).split('1').length - 1

    const tOne = countOne(n)
    let nextNumber = n + 1
    while(countOne(nextNumber) !== tOne){
        nextNumber++
    }
    return nextNumber
}


console.log(solution(15))

// console.log('baabaa'.slice(0, 2))
