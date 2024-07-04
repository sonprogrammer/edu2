// function solution(p){
//     let arr = p.split(' + ')
//     let xNum = arr.filter(n => n.includes('x'))
//                   .map(n => n.replace('x', '') || '1') //값이 그냥 빈문자열이면 false를 반환하여 || 논리연산자로 1이 나온다
//                   .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
//     console.log(xNum)
//     let num = arr.filter(n => !isNaN(n))
//                  .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    
//     let answer = []
//     if(xNum) answer.push(`${xNum === 1 ? '' : xNum}x`)
//     if(num) answer.push(num)
//     return answer.join(' + ')
// }


// function solution(array) {
//     let m = new Map();
//     for (let n of array){
//          m.set(n, (m.get(n) || 0)+1)
//         //  console.log(m.get(n))
//         };
//     m = [...m].sort((a,b)=>b[1]-a[1]);
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }

// function solution(quiz){
//     let answer = []
//     quiz.forEach((val) => {
//         const [x, sign, y, , z] = val.split(' ')
//         console.log(val)
//         let sum = 0
//         if(sign === '+'){
//             sum = Number(x) + Number(y)
//             console.log(sum)
//         }else{
//             sum = Number(x) - Number(y)
//         }
//         sum === Number(z) ? answer.push('O') : answer.push('X')
//     })
//     return answer
// }


// function solution(common){
//     if((common[1] - common[0]) == (common[2] - common[1])){
//         console.log(common.pop())
//         return common.pop() + common[1] - common[0]
//     }else{
//         return common.pop()*common[1]/common[0]
//     }
// }


// function solution(num, total){
//     let min = Math.ceil(total/num - Math.floor(num/2))
//     let max = Math.floor(total/num + Math.floor(num/2));
//     return new Array(max-min+1).fill(0).map((el,i)=> {return i+min})
// }

// function solution(n1, d1, n2, d2){
//     let a = n1/d1
//     let b = n2/d2
//     return a + b
// }

// function solution(babbling){
//     let count = 0
//     for(let i = 0; i< babbling.length; i++){
//         if(babbling[i].includes("aya") || babbling[i].includes('yet') || babbling[i].includes('woo') || babbling[i].includes('ma')){
//             count++
//         }
//     }
//     return count
// }

// function solution(t, p){
//     let count = 0;
//     for(let i = 0; i <= t.length - p.length; i++){
//         let val = t.slice(i, i+p.length)
//         if(+p >= +val) count++
//     }
//     return count
// }


// const solution = (s) =>
//   [...s].map((char, i) => {
//     const count = s.slice(0, i).lastIndexOf(char);
//     return count < 0 ? count : i - count;
//   });



// function solution(number){
    
// }



// function solution(s){
//     let arr = s.split('')
//     let pCount = 0
//     let yCount = 0
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 'p' || arr[i] =='P'){
//             pCount++;
//         }else if(arr[i] == 'y' || arr[i] == 'Y'){
//             yCount++;
//         }
//     }
//     if(pCount == yCount){
//         return true
//     }else{
//         return false
//     }
// }

// function solution(s){
//     return +s
// }

// function solution(n){
//     let result = 0
//     let arr = n.toString().split('')
//     for(let i = 0; i < arr.length; i++){
//         result+= +arr[i]
//     }
//     return result
// }


// function solution(n){
//     return (n+'').split('').reduce((acc, cur) => acc + +cur, 0)
// }

// function solution(n){
//     return n.toString().split('').reverse().map(a => +a)
// }

// function solution(n){
//     return +(n.toString().split('').sort((a,b) => b - a).join(''))
// }

// function solution(n){
//     let a = Math.sqrt(n)
//     if(a % 1 === 0){
//         return (a+1) ** 2
//     }else{
//         return -1
//     }
// }


// function solution(n){
//     if(n % 2 === 0){
//         return "Even"
//     }else{
//         return "Odd"
//     }
// }

// function solution(a, b){
//     let result = 0
//     if(a <= b){
//         for(let i = a; i <= b; i++){
//             result += i
//         }
//     }else{
//         for(let i = b; i <= a; i++){
//             result += i
//         }
//     }
//     return result

// }
// function solution(a,b){
//     let result = 0;
//     return (a+b) * (Math.abs(a-b)+1)/2
// }


// function solution(a, b){
//     let result = 0;
//     for(let i = Math.min(a, b); i <= Math.max(a, b); i++){
//         result += i
//     }
//     return result
// }

// function solution(n){
//     let result = 0;
//     for(let i = 1; i <= n; i++) {
//         if(n %i === 0){
//             result += i
//         }
//     }
//     return result;
// }

// function solution(arr){
//     let result = 0
//     for(let i = 0; i < arr.length; i++) {
//         result += arr[i]
//     }
//     return result/arr.length
// }

// function solution(arr){
//     return arr.reduce((a,b) => a+b)
// }

// function solution(x){
//     let arr = x.toString().split('').map(a => parseInt(a))
//     console.log(arr)
//     let n = 0
//     for(let i = 0; i< arr.length; i++) {
//         n += arr[i]
//     }
//     if(x % n === 0){
//         return true
//     }else{
//         return false
//     }
// }





// function solution(x, n){
//     let answer = []
//     for(let i = 0; i < n; i++) {
//         answer.push(x*(i+1))
//     }
//     return answer
// }

// function solution(x, n){
//     return Array(n).fill(x).map((v, i) => (i+1) * v)
// }

// function solution(n){
//     let result = []
//     for(let i = 0; i < n; i++) {
//         if(n % i == 1){
//             result.push(i)
//         }
//     }
//     return result[0]
// }

// function solution(seoul){
//     let index = seoul.indexOf('Kim')
//     return `김서방은 ${index}에 있다`
// }


function solution(n){
    let cnt = 0
    while(n !== 1){
        if(cnt >= 500){
            return -1
        }
        if(n % 2 === 0){
            n /= 2
        }else{
            n = n * 3 + 1
        }
        cnt++
    }
    return cnt
}


console.log(solution(6))

