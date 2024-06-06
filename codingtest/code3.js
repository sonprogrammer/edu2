// function solution(date1, date2) {
//     // 연도 비교
//     if (date1[0] < date2[0]) {
//         return 1;
//     } else if (date1[0] > date2[0]) {
//         return 0;
//     }

//     // 연도가 같은 경우 월 비교
//     if (date1[1] < date2[1]) {
//         return 1;
//     } else if (date1[1] > date2[1]) {
//         return 0;
//     }

//     // 연도와 월이 같은 경우 날짜 비교
//     if (date1[2] < date2[2]) {
//         return 1;
//     } else {
//         return 0;
//     }
// }


// const solution = (data1, date2) => new Date(data1) < new Date(date2) ? 1 : 0

// const day = [2024, 6, 5]
// console.log('day', new Date(day))




// function solution(arr, flag){
//     let answer = []
//     for(let i = 0; i < arr.length; i++){
//         if(flag[i] == true){
//             answer.push(...Array(arr[i]*2).fill(arr[i]))
//         }else{
//             answer.splice(-arr[i], arr[i])
//         }
//     }
//     return answer
// }

// function solution(my_string, indices){
//     let res = ''
//     for(let i = 0; i < my_string.length; i++){
//         if(!indices.includes(i)){
//             res += my_string[i]
//         }
//     }
//     return res
// }

// function solution(my_string, s, e){
//     let str = my_string.slice(s, e+1).split('').reverse(). join('')
//     console.log(str)
//     return my_string.slice(0, s) + str + my_string.slice(e + 1)

// }


// function solution(intStrs, k, s, l){
//     let res = []
//     for(let i = 0; i < intStrs.length; i++){
//         let sub = intStrs[i].substring(s, s+l)
//         let num = parseInt(sub, 10)

//         if(num > k){
//             res.push(num)
//         }
//     }
//     return res
// }


// function solution(intStrs, k, s, l){
//     return intStrs.map(v => v.slice(s, s+l)).filter(v => v > k)
// }



// function solution(str1, str2){
//     let answer = '';
//     for(let i = 0; i < str1.length; i++){
//         if(i < str1.length){
//             answer += str1[i];
//         }
//         if(i < str2.length){
//             answer += str2[i];
//         }
//     }
//     return answer;
// }


// function solution(str1, str2){
//     return [...str1].map((x, idx) => x+str2[idx]).join('')
// }

// function solution(myString, pat){
//     let maxLength = 0
//     let sub = ''

//     for(let i = 0; i < myString.length; i++){
//         for(let j = 0; j <= myString.length; j++){
//             let substring = myString.substring(i, j)
//             if(substring.endsWith(pat) && substring.length > maxLength){
//                 maxLength = substring.length
//                 sub = substring
//             }
//         }
//     }
//     return sub
// }

// const solution = (str, pat) => str.substring(0, str.lastIndexOf(pat)) + pat

// function solution(arr){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         while(arr[i] > 1){
//             if(arr[i] % 2 == 0){
//                 arr[i] /= 2
//             }else{
//                 arr[i] = (arr[i]-1)/2
//             }
//             count++
//         }
//     }
//     return count
// }


// function solution(arr){
//     return arr.map(v => v.toString(2).length - 1).reduce((a, c) => a + c)
// }

// function solution(x1, x2, x3, x4){
//     let a = false
//     let b = false
//     let result = false

//     if(x1 === x2 === true){
//         a = true
//     }else{
//         a = false
//     }
//      if(x3 === x4 === true){
//         b = true
//     }else{
//         b = false
//     }
//     if(a == b == true){
//         return true
//     }

// }


// function solution(myStr) {
//     let result = []
//     let current = ''

//     for (let char of myStr) {
//         if (char === "a" || char === "b" || char === "c") {
//             if (current !== "") {
//                 result.push(current);
//                 current = ""; // current 초기화
//             }
//         } else {
//             current += char; // 현재 문자열에 문자 추가
//         }
//     }
//     if (current !== "") {
//         result.push(current);
//     }
//     if (result.length === 0) {
//         return ["EMPTY"];
//     }
//         return result
//     }


// function solution(myStr){
//     const tmp1 = myStr.split('a').join('b')
//     const tmp2 = tmp1.split('b').join('c')
//     const tmp3 = tmp2.split('c').filter(x => x)
//     if(tmp3.length === 0) return ["EMPTY"];
//     return tmp3
// }

// function solution(myString, pat){
//     let count = 0
//     let index = myString.indexOf(pat)

//     while(index !== -1){
//         count++
//         index = myString.indexOf(pat, index + 1)
//     }
//     return count
// }


// function solution(strArr){
//     strArr.sort((a, b) => a.length - b.length)

//     let group = 1
//     let current = 1

//     for(let i = 1; i < strArr.length; i++){
//         if(strArr[i].length === strArr[i -1].length){
//             current++
//         }else{
//             group = Math.max(group, current)
//             current = 1
//         }
//     }
//     return Math.max(group, current)
// }

// function solution(arr){
//     let result = arr.slice(arr.indexOf(2), arr.lastIndexOf(2)+1)
//     if(!result.includes(2)){
//         return [-1]
//     }
//     return result
// }


// function solution(n, slicer, num_list){
//     let [a, b, c] = slicer
//     if(n == 1){
//         return num_list.slice(0, b+1)
//     }else if(n == 2){
//         return num_list.slice(a)
//     }else if(n == 3){
//         return num_list.slice(a, b+1)
//     }else if(n == 4){
//         return num_list.slice(a, b+1).filter((_, i) => i % c == 0)
//     }
// }

// const readline = require('readline');
// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// let input = [];

// rl.on('line', function (line) {
//     input = line.split(' ');
// }).on('close', function () {
//     str = input[0];
//     n = Number(input[1]);
//     console.log(str.repeat(n))
// });


// function solution(order){
//     let a = 'americano'
//     let c = 'cafelatte'
//     let result = 0

//     for(let i = 0; i < order.length; i++){
//         if(order[i].includes(c)){
//             result += 5000
//         }else{
//             result += 4500
//         }
//     }
//     return result

// }

// function solution(arr, query) {
//     for (let i = 0; i < query.length; i++) {
//         if (i % 2 === 0) {
//             arr = arr.slice(0, query[i] + 1);
//         } else {
//             arr = arr.slice(query[i]);
//         }
//     }
//     return arr;
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
//     console.log(str);
// });


// function solution(a, b, c, d) {
//     let dice = [a, b, c, d];
//     dice.sort((x, y) => x - y);

//     if (dice[0] === dice[3]) {
//         return 1111 * dice[0];
//     }

//     if (dice[0] === dice[2] || dice[1] === dice[3]) {
//         let p = (dice[0] === dice[2]) ? dice[0] : dice[3];
//         let q = (dice[0] === dice[2]) ? dice[3] : dice[0];
//         return (10 * p + q) ** 2;
//     }

//     if (dice[0] === dice[1] && dice[2] === dice[3]) {
//         let p = dice[0];
//         let q = dice[2];
//         return (p + q) * Math.abs(p - q);
//     }

//     if (dice[0] === dice[1] || dice[1] === dice[2] || dice[2] === dice[3]) {
//         let p, q, r;
//         if (dice[0] === dice[1]) {
//             p = dice[0];
//             q = dice[2];
//             r = dice[3];
//         } else if (dice[1] === dice[2]) {
//             p = dice[1];
//             q = dice[0];
//             r = dice[3];
//         } else {
//             p = dice[2];
//             q = dice[0];
//             r = dice[1];
//         }
//         return q * r;
//     }

//     return dice[0];
// }


// function solution(a, b, c, d){
//     if(a == b && a == c && a == d) return 1111*a

//     if (a === b && a === c) return (10 * a + d) ** 2
//     if (a === b && a === d) return (10 * a + c) ** 2
//     if (a === c && a === d) return (10 * a + b) ** 2
//     if (b === c && b === d) return (10 * b + a) ** 2

//     if (a === b && c === d) return (a + c) * Math.abs(a - c)
//     if (a === c && b === d) return (a + b) * Math.abs(a - b)
//     if (a === d && b === c) return (a + b) * Math.abs(a - b)

//     if (a === b) return c * d
//     if (a === c) return b * d
//     if (a === d) return b * c
//     if (b === c) return a * d
//     if (b === d) return a * c
//     if (c === d) return a * b

//     return Math.min(a, b, c, d)
// }



function solution(n){
    const a = Array.from({length : n}, () => Array(n).fill(0))   

    let num = 1
    let top = 0, bottom = n -1
    let left = 0, right = n - 1

    while(num < n * n){
        for(let i = left; i <= right; i++){
            a[top][i]
        }
    }
}


console.log(solution(["cafelatte", "americanoice", "hotcafelatte", "anything"]))