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

// function solution(myS){
//     return myS.split('').filter(v => !isNaN(v)).map(v => Number(v)).sort((a, b) => a - b)
// }

// function solution(cipher, code){
//     let res = ''
//     for(let i = code-1; i < cipher.length; i += code){
//         res += cipher[i]
//     }
//     return res
// }

// function solution(box, n){
//     return Math.floor(box[0] / n) * Math.floor(box[1] / n) * Math.floor(box[2] / n)
// }

// function solution(n, arr){
//     return arr.filter(v => v % n == 0)
// }

// function solution(n){
//     return Math.ceil(n / 7)
// }

// function solution(n){
//     function gcd(a, b){
//         while(b !== 0){
//             let temp = b
//             b = a % b
//             a = temp
//         }
//         return a 
//     }
//     function lcm(a, b){
//         return (a * b) / gcd(a, b)
//     }
//     return lcm(6, n) / 6
// }


// function solution(n){
//     let peice = 6

//     while(true){
//         if(peice % n === 0){
//             break;
//         }
//         peice += 6
//     }
//     return peice / 6
// }

// function solution(age){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'

//     let arr = age.toString().split('')
//     return arr.map(v => Number(v)).map(v => alphabet[v]).join('')
// }


// function solution(numbers, direction){
//     if(direction === 'right'){
//         let last = numbers[numbers.length - 1];
//         numbers.unshift(numbers.pop())
//     }else if(direction === 'left'){
//         let first = numbers[0]
//         numbers.push(numbers.shift())
//     }
//     return numbers
// }


// function solution(order){
//     let count = 0
//     let arr = order.toString()
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 3 || arr[i] == 6 || arr[i] == 9){
//             count++;
//         }
//     }
//     return count
// }


// function solution(num, k){
//     let st = num.toString()
//     for(let i = 0; i < st.length; i++){
//         if(Number(st[i]) == k){
//             return i+1
//         }
//     }
//     return -1
// }

// function solution(myS){
//     return myS.toLowerCase().split('').sort().join('')
// }

// function solution(n){
//     let count = 0;
//     for(let i = 4; i <= n; i++){
//         let nom = 0
//         for(let j = 1; j <= i; j++){
//             if(i % j == 0){
//                 nom++
//             }
//         }
//         if(nom >= 3){
//             count++
//         }
//     }
//     return count
// }

// function solution(letter){
//     let res = ''
//     morse = { 
//         '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//         '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//         '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//         '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//         '-.--':'y','--..':'z'
//     }

//     return letter.split(' ').map(v => morse[v]).join('')

// }


// console.log(solution(".... . .-.. .-.. ---"))


// function solution(numArr, n){
//     let result = [];

//     for(let i = 0; i < numArr.length; i+=n) {
//         result.push(numArr.slice(i,  i + n))
//     }
//         return result
// }


// function solution(myS){
//     let result= ''

//     for(let i = 0; i < myS.length; i++) {
//         if(!result.includes(myS[i])){
//             result += myS[i]
//         }
//     }
//     return result
// }


// function solution(myS){
//     return [...new Set(myS)]
// }

// function solution(i, j, k){
//     let count = 0;

//     for(let x = i; x <= j; x++) {
//         let numStr = x.toString()
//         for(let num of numStr){
//             console.log(num)
//             if(num.includes(k)){
//                 count++
//             }
//         }
//     }
//     return count
// }


// function solution(emergy){
//     let a = [...emergy].sort((a, b) => b - a) // 내림차순으로 만듦
//     console.log(a)//[ 76, 24, 3 ]
//     return emergy.map(v => console.log(a.indexOf(v)))

// }


// function solution(n){
//     let i = 1
//     let fa = 1
//     while(fa <= n){
//         i++
//         fa *= i
//         console.log(fa)
//     }
//     return i -1 
// }


// function solution(s){
//     let numArr = []

//     for(let i = 0; i < s.length; i++){
//         if(!isNaN(s[i]) && !isNaN(s[i+1])){
//             numArr.push(s.slice(i, i + 2))
//             i++
//             continue;
//         }
//         else if(!isNaN(s[i])){
//             numArr.push(s[i])
//         }
//     }
//     return numArr.map(v=> Number(v)).reduce((acc , cur) => acc + cur, 0)

// }

// function solution(s){
//     let numArr = []
//     let i = 0;

//     while(i < s.length){
//         if(!isNaN(s[i]) && !isNaN(s[i+1])){
//             numArr.push(s.slice(i, i + 2))
//             i++
//         }
//         else if(!isNaN(s[i])){
//             numArr.push(s[i])
//             i++
//         }else{
//             i++
//         }
//     }
//     return numArr.map(v=> Number(v)).reduce((acc , cur) => acc + cur, 0)
// }

// function solution(s){
//     let answer = ''
//     for(let i =0; i < s.length; i++){
//         if(Number.isInteger(+s[i])){
//             answer += s[i]
//         }else{
//             answer += " "
//         }
//     }
//     console.log(answer)
//     return answer.split(' ').reduce((acc, cur) => acc += +cur, 0)
// }


// function solution(s){
//     let res = ''
//     for(let i = 0; i < s.length; i++){
//         if(Number.isInteger(+s[i])){
//             res += s[i]
//         }else{
//             res += " "
//         }
//     }
//     return res.split(' ').reduce((acc, cur) => acc += +cur, 0)
// }

// function solution(arr, n){
//     let res =  arr.sort((a, b) => Math.abs(n-a) - Math.abs(n-b) || a -b)
//     console.log(res)
// }


// function solution(s){
//     let res = [];
//     for (let c of s) if (s.indexOf(c) === s.lastIndexOf(c)){
//         console.log(s.indexOf(c))
//         res.push(c);  
    
//     } 
//     console.log(res)
//     return res.sort().join('');

// }

// function solution(arr){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         let str = arr[i].toString()
//         for(let j = 0; j < str.length; j++){
//             if(str[j] === '7'){
//                 count++
//             }
//         }
//         }
//         return count
//     }


// function solution(before, after){
//     let sortedBefore = before.split('').sort().join('');
//     console.log(sortedBefore)
//     let sortedAfter = after.split('').sort().join('');
//     console.log(sortedAfter)

//     return sortedBefore === sortedAfter ? 1 : 0
// }


function solution(s){
    let count = 0;
    let arr = s.split(' ')
    console.log(+arr[0])

    for(let i = 0; i < arr.length; i++){
        if(arr[i] === 'Z'){
            count -= (+arr[i-1])
        }else{
            count += (+arr[i])
        }
    }
    return count
}


console.log(solution("1 2 Z 3"))
