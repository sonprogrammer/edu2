// function solution(num_list) {
//     return num_list.sort((a,b) => a-b).slice(0, 5)
// }

// function solution(my_string) {
//     return my_string.split(' ').filter(word => word)
// }

// function solution(flo){
//     return Math.floor(flo)
// }

// function solution(my_string, alp){
//     let answer = ''
//     for(let i=0; i < my_string.length; i++){
//         if(my_string[i] == alp){
//             answer += my_string[i].toUpperCase()
//         }else{
//             answer += my_string[i]
//         }
//     }    
//     return answer
// }

// const solution = (s, a) => s.replaceAll(a, a.toUpperCase()) //첫매개변수를 두번째 매개변수로 바꾸자

// function solution(arr, delete_list){
//     return arr.filter(res => !delete_list.includes(res))
// }

// function solution(myString){
//     return myString.toLowerCase()
// }

// const solution = (s) => s.toLowerCase();

// function solution(todo_list, finished){
//     let answer = []
//     for(let i = 0; i < todo_list.length; i++){
//         if(!finished[i]){
//             answer.push(todo_list[i]);
//         }
//     }
//     return answer
// }

// const solution= (todo_list, finished) => todo_list.filter((e, i) => !finished[i])

// function solution(strArr){
//     let answer = []
//     for(let i=0; i< strArr.length; i++) {
//         if(i % 2 == 0) {
//             answer.push(strArr[i].toLowerCase())
//         }else{
//             answer.push(strArr[i].toUpperCase())
//         }
//     }
//     return answer
// }

// const solution = (strArr) => strArr.map((v, i) => i % 2 === 0 ? v.toLowerCase() : v.toUpperCase())

// const solution = (myString) => myString.split('').map((v) => v < 'l' ? 'l' : v).join('')

// const solution = (string) => [...string].map(v => v.toUpperCase()).join('')

// const solution = s => s.toUpperCase()

// const solution = s => s.split(' ')

// function solution(list){
//     let answer = list.length > 10 ? 0 : 1
//     for(let i = 0; i < list.length; i++){
//     if(list.length > 10){
//             answer += list[i]
//         }else if(list.length <= 10){
//             answer *= list[i]
//         }
//     }
//     return answer
// }

// const solution = list => list.reduce((a , v) => list.length > 10 ? a+v : a*v)

// function solution(s){
//     const splits = s.split('x')
//     return splits.map((res) => res.length)
// }


// const solution = s => s.split('x').map(v => v.length)

// const st = 'xabcxdefxghi'
// console.log(st.split('x'))


// function solution(string, parts){
//     let answer = ''
//     for(let i = 0; i < string.length; i++){
//         const [start, end] = parts[i]
//         const substring = string[i].substring(start, end+1)
//         answer += substring
//     }
//     return answer
// }

// function solution(string, parts){
//     return parts.map(([s, e], i) => {
//         return string[i].slice(s, e+1)
//     } ).join('');
// }

// function solution(numbers, n){
//     let answer = 0
//     for(let i = 0; i < numbers.length; i++){
//             answer += numbers[i]
//             if(answer > n){
//                 return answer - numbers[i]

//             }
//     }
//     return answer
// }

// function solution(numbers, n){
//     let answer = 0;
//     let i = 0;
//     while(answer < n){
//         answer += numbers[i++];
//     }
//     return answer
// }


// function solution(numbers, n){
//     return numbers.reduce((a, c, i, t) => (a<n) ? a+c : a)
// }



// function solution(num_list, n){
//     let result = [];
//     for(let i = 0; i < num_list.length; i+=n){
//         result.push(num_list[i]);
//     }
//     return result;
// }



// const solution = (num_list, n) => num_list.filter((_, i) => !(i % n))

// function solution(string, pat){
//     const lowerStrng = string.toLowerCase();
//     const lowerPat = pat.toLowerCase();
//     if(lowerStrng.includes(lowerPat)){
//         return 1
//     }else{
//         return 0
//     }
// }



// function solution(my_string, pat){
//     return my_string.toUpperCase().includes(pat.toUpperCase()) ? 1 : 0
// }



// function solution(num_list, n){
//     let a = num_list.slice(n)
//     let b = num_list.slice(0, n)
//     return a.concat(b)
// }

// function solution(num_list ,n){
//     num_list.push(...num_list.splice(0, n))
//     // console.log(...num_list.splice(0, n))
//     return num_list
// }
// function solution(names){
//     let res = []
//     for(let i = 0; i < names.length; i++){
//         res.push(names.slice(i, i+5)[0])
//     }
//     return res
// }


// function solution(names){
//     return names.filter((a, i) => i % 5 == 0 ) 
// }

// function solution(names) {
//     var answer = [];
//     for(let i = 0; i < names.length; i += 5){
//         answer.push(names[i])
//     }
//     return answer;
// }



// function solution(arr){
//     let answer = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > 50 && arr[i] % 2 == 0){
//             answer.push(arr[i] / 2)
//         }else if(arr[i] < 50 && arr[i] % 2 !== 0){
//             answer.push(arr[i] * 2)
//         }else{
//             answer.push(arr[i])
//         }
//     }
//     return answer;
// }



// const solution = arr => arr.map(a => a>=50&&a%2==0 ? a/2 : a<50&&a%2!=0 ? a*2 : a)
// const solution=a=>a.map(v=>v>=50&&v%2==0?v/2:v<50&&v%2==1?v*2:v)


// function solution(string){
//     return [...string].map(res => res == "a" ? "A" : res == "A" ? res : res.toLowerCase()).join("")
// }

// const solution = s => s.toLowerCase().replaceAll("a", "A")

// function solution(list, n){
//     return list.slice(0, n)
// }

// function solution(n){
//     let arr = Array.from({ length : n }, () => Array(n).fill(0))

//     for(let i = 0; i < n; i++){
//         arr[i][i] = 1
//     }
//     return arr
// }

// function solution(strNum){
//     let answer = 0;
//     let [ a, c ,b ] = strNum.split(' ')
//     // a = Number(a)
//     // b = Number(b)

//     switch(c){
//         case '+': return +a + +b;
//         case '-': return +a - +b;
//         case '*': return +a * +b;
//     }
// }

// function solution(arr, interval){

//     let [ a1, b1 ] = interval[0]
//     let [ a2, b2 ] = interval[1]

//     let res1 = arr.slice(a1, b1+1)
//     let res2 = arr.slice(a2, b2+1)

//     return res1.concat(res2)

// }

// function solution(str){
//     let answer = []
//     for(let i = 0; i < str.length; i++) {
//         answer.push(str.substring(i))
//     }
//     answer.sort()
//     return answer
// }


// function solution(n) {
//     let answer = []
//     while(n !== 1){
//         answer.push(n)
//         if(n % 2 == 0){
//             n = n/2
//         }else{
//             n = 3 * n + 1
//         }
//     }
//     answer.push(1)
//     return answer
// }

// function solution(n){
//     let sum = 0
//     for(let i = 0; i < n.length; i++){
//         sum += +n[i]

//     }

//     return sum % 9
// }



// function solution(numLog) {
//     let result = "";
//     let currentNum = 0; 

//     for (let i = 1; i < numLog.length; i++) {
//         const diff = numLog[i] - numLog[i - 1];

//         if (diff === 1) {
//             result += "w";
//             currentNum += 1;
//         } else if (diff === -1) {
//             result += "s";
//             currentNum -= 1;
//         } else if (diff === 10) {
//             result += "d";
//             currentNum += 10;
//         } else if (diff === -10) {
//             result += "a";
//             currentNum -= 10;
//         }
//     }

//     return result;
// }


// function solution(numLog){
//     const convert = {
//         '1' : 'w', '-1' : 's', '10' : 'd', '-10' : 'a'
//     }
//     return numLog.slice(1).map((v, i) => {
//         return convert[v - numLog[i]]
//     }).join('');
// }


// function solution(a, b, c){
//     if(a !== b && b !== c && c !== a){
//         return a + b + c
//     }else if((a == b && b != c) || (a==c && a != b) || (b == c && a !=c)){
//         return (a+b+c) * (a**2 + b**2 + c**2)
//     }else{
//         return (a+b+c) * (a**2 + b**2 + c**2) * (a**3 + b**3 + c**3)
//     }
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = [line];
// }).on('close',function(){
//     str = input[0];
//     console.log(str.split('').join('\n'))
// });

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     console.log(Number(input[0]) + " + " + Number(input[1]) + " = " + (Number(input[0]) + Number(input[1])));
// });


// function solution(arr){
//     return arr.join('')
// }



// function solution(arr){
//     let n = arr.length;
//     for(let i = 0; i < n; i++) {
//         for(let j = i + 1; j < n; j++) {
//             if(arr[i][j] !== arr[j][i]){
//                 return 0
//             }
//         }
//     }
//     return 1
// }


// function solution(arr, idx) {
//     let minIndex = Infinity;
//     for (let i = idx + 1; i < arr.length; i++) {
//         if (arr[i] === 1 && i < minIndex) {
//             minIndex = i;
//         }
//     }
//     return minIndex === Infinity ? -1 : minIndex;
// }


// function solution(num_list){
//     let even = 0
//     let odd = 0
//     for(let i = 0; i < num_list.length; i++) {
//         if(i % 2 == 0){
//             even += num_list[i]
//         }else{
//             odd += num_list[i]
//         }
//     }

//     return Math.max(odd, even);
// }



// function solution(my_string, m, c){
//     let result = ''

//     for(let i = c - 1; i < my_string.length; i+=m){
//         result += my_string[i]
//     }
    
//     return result
// }

// function solution(my_string, m, c){
//     return [...my_string].filter((_, i) => i % m === c - 1).join('')
// }

// function solution(a, d, included) {
//     let sum = 0;
//     for (let i = 0; i < included.length; i++) {
//         if (included[i]) {
//             sum += a + i * d;
//         }
//     }
//     return sum;
// }

// function solution(board, k) {
//     let sum = 0;
//     for (let i = 0; i < board.length; i++) {
//         for (let j = 0; j < board[i].length; j++) {
//             if (i + j <= k) {
//                 sum += board[i][j];
//             }
//         }
//     }
//     return sum;
// }

function solution(myString){
    let answer = myString.split('x').filter(s => s !='')
    answer.sort()
    return answer

}


console.log(solution("dxccxbbbxaaaa"))