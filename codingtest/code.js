// function solution(my_string, n) {
//     var answer = '';
//     answer = my_string.slice(-n)

//     return answer;
// }


// function solution(my_string, index_list) {
//     var answer = '';
//     for(let i = 0; i < index_list.length; i++){
//         let j = index_list[i];
//         answer += my_string[j]

//     }
//     return answer;
// }

// function solution(start_num, end_num) {
//     var answer = [];
//     for(let i = start_num; i <= end_num; i++) {
//         answer.push(i)
//     }
//     return answer;
// }

// function solution(n, control) {
//     var answer = 0;
//     for(let i = 0; i< control.length; i++) {
//         if(control[i] == "w"){
//             n += 1
//         }else if(control[i] == "s"){
//             n -= 1
//         }else if(control[i] == "d"){
//             n += 10
//         }else if(control[i] == "a"){
//             n -= 10
//         }
//          answer = n
//     }
//     return answer;
// }

// function solution(num_list) {
//     var answer = num_list;

//     let leng = num_list.length
//     if(num_list[leng - 1] > num_list[leng - 2]){
//         answer.push(num_list[leng -1] -1)
//     }else if(num_list[leng - 1] < num_list[leng - 2]){
//         answer.push(num_list[leng -1] * 2)
//     }
//     return answer;
// }

// function solution(num_list) {
//     var answer = 0;
//     let even = ''
//     let odd = ''
//     for(let i = 0; i < num_list.length; i++) {
//         if(num_list[i] % 2 == 0){
//             even += num_list[i]
//         }else{
//             odd += num_list[i]
//         }
//     }
//     // let NumEven = Number(even)
//     // let NumOdd = Number(odd)
//     // answer = NumEven + NumOdd

//     return +even + +odd;
// }


// function solution(num_list) {
//     var answer = 0;
//     let multiple = 1
//     let sum = 0
//     for(let i = 0; i < num_list.length; i++){
//         multiple *= num_list[i]
//         sum += num_list[i]
//     }
//     let sumSquare = sum * sum
//     if(multiple < sumSquare){
//         return 1
//     }else{
//         return 0
//     }
// }



// function solution(num_list) {
//     let accMul = 1
//     let accSum = 0
//     for (const num of num_list) {
//         accMul *= num
//         accSum += num
//     }
//     return accMul < accSum ** 2 ? 1 : 0
// }



// function solution(a, b, flag) {
//     var answer = 0;
//     if(flag == true){
//         return a + b
//     }else{
//         return a - b
//     }
//     return answer;
// }

// function solution(n) {
//     var answer = 0;
//         if(n % 2 == 0){ //짝수
//             for(let j = 1; j <=n; j++) {
//                 if(j % 2 == 0){
//                     answer += j*j
//                 }
//             }
//         }else{
//             for(let j = 1; j <= n; j++) {
//                 if(j % 2 != 0){
//                     answer += j
//                 }
//             }
//         }
//     return answer;
// }


// function solution(number, n, m) {
//     var answer = 0;
//     if(number % n == 0 && number % m == 0){
//         answer = 1
//     }else{
//         answer = 0
//     }
//     return answer;
// }


// function solution(num, n) {
//     var answer = 0;
//     if(num % n == 0){
//         answer = 1;
//     }else{
//         answer = 0;
//     }
//     return answer;
// }

// function solution(a, b) {
//     var answer = 0;
//     let num = Number(a.toString() + b.toString());
//     let multiple = 2*a*b
//     if(num > multiple){
//         answer = num
//     }else if(num < multiple){
//         answer = multiple
//     }else{
//         answer = num
//     }
//     return answer;
// }

// function solution(a, b){
//     let num1 = parseInt(a+""+b+"")
//     console.log(a+""+b+"")
//     let num2 = 2*a*b
//     return num1 > num2 ? num1 : num2
// }




// function solution(a, b) {
//     let num1 = parseInt(a+""+b+"")
//     let num2 = parseInt(b+""+a+"")
//     return num1 > num2 ? num1 : num2
// }

// function solution(my_string, k) {
//     var answer = '';
//     for(let i = 0; i < k; i++) {
//         answer += my_string
//     }
//     return answer;
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
//     n = Number(input[0]);
    
//     if(n % 2 == 0){
//         console.log(`${n} is even`)
//     }else{
//         console.log(`${n} is odd`)
//     }
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
//     str1 = input[0];
//     str2 = input[1];
//     console.log(str1 + str2);
// });


// function solution(a, b) {
//     var answer = 0;
//     if(a % 2 != 0 && b % 2 != 0) {
//         answer = a**2 + b**2
//     }else if(a % 2 != 0 && b % 2 == 0 || a % 2 == 0 && b % 2 != 0) {
//         answer = 2*(a+b)
//     }else{
//         answer =  Math.abs(a-b)
//     }
//     return answer;
//     const isAOdd = a % 2 === 1
//     const isBOdd = b % 2 === 1

//     if(isAOdd && isBOdd) {
//         return a**2 + b**2
//     }else if(!isAOdd && !isBOdd) {
//         return Math.abs(a - b)
//     }else{
//         2*(a+b)
//     }

// }


// function solution(str_list, ex) {
//     let str = str_list.filter(str => !str.includes(ex))
//     return str.join('')
// }

// function solution(n_str) {
//     var answer = '';
//     for(let i = 0; i < n_str.length; i++) {
        
//     }
//     return answer;
// }



// const solution = (str) => String(Number(str))

// function solution(strArr) {
//     var answer = [];
//     for(let i = 0; i < strArr.length; i++) {
//         let include = strArr[i].includes('ad')
//         if(!include){
//             answer.push(strArr[i])
//         }
//     }
//     return answer;
// }

// const solution = strArr => strArr.filter(v => !v.includes('ad'))



// function solution(num_str) {
//     var answer = 0;
//     let numArr = num_str.split('')
//     for(let i = 0; i < numArr.length; i++) {
//         answer += Number(numArr[i])
//     }
//     return answer;
// }


// function solution(num_str) {
//     return [...num_str].reduce((a, c) => a + +c, 0)
// }

// const solution = n => String(n)
// const solution = String


// function solution(arr, k){
//     let answer = []
//     for(let i = 0; i < arr.length; i++){
//         if(k % 2 != 0){
//             answer.push(arr[i]*k)
//         }else{
//             answer.push(arr[i]+k)
//         }
//     }
//     return answer
// }


// const solution = (arr, k) => arr.map(v => k % 2 ? v*k : v +k)

// function solution(num_list){
    // const a = num_list.sort((a, b) => a-b).slice(5)
    // return a.sort((a,b) => a - b)
//     return a
// }


// const solution =  Number


// function solution(arr, n) {
//     const result = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (arr.length % 2 !== 0 && i % 2 === 0) {
//             result.push(arr[i] + n);
//         }
//         else if (arr.length % 2 === 0 && i % 2 !== 0) {
//             result.push(arr[i] + n);
//         }
//         else {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }


// const solution = (arr, n) => arr.map((num, i) => (arr.length % 2 !== i %2 ? num +n : num))

// function solution(myString, pat){
//     let arr = []
//     let abArr = [...myString]
//     console.log(abArr)
//     for(let i = 0; i < abArr.length; i++){
//         if(abArr[i] === 'A'){
//             arr.push('B')
//         }else{
//             arr.push('A')
//         }
//     }
//     console.log(arr.join(''))
//     return arr.join('').includes(pat) ? 1 : 0
// }


// function solution(myString, pat){
//     const newPat = [...pat].reduce((acc, cur) => {
//         if(cur === "A"){
//             acc += "B"
//         }else{
//             acc += "A"
//         }
//         return acc
//     }, '')
//     return myString.includes(newPat) ? 1 : 0;
// }

// function solution(arr1, arr2) {
//     const sum1 = arr1.reduce((acc, curr) => acc + curr, 0);
//     const sum2 = arr2.reduce((acc, curr) => acc + curr, 0);
    
//     if (arr1.length !== arr2.length) {
//         return arr1.length > arr2.length ? 1 : -1;
//     } else {
//         return sum1 === sum2 ? 0 : sum1 > sum2 ? 1 : -1;
//     }
// }

// function solution(arr){

// }

// function solution(arr){
//     let answer = [];
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i]; j++){
//             answer.push(arr[i])
//         }
//     }
//     return answer
// }

// function solution(rny_string){
//     let answer =[]
//     let arr = [...rny_string]
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] == 'm'){
//             answer.push('rn')
//         }else{
//             answer.push(arr[i])
//         }
//     }
//     return answer.join('')
// }

const solution=r=>r.replaceAll('m','rn')



console.log(solution("masterpiece"	))

/*
⣇⣿⠘⣿⣿⣿⡿⡿⣟⣟⢟⢟⢝⠵⡝⣿⡿⢂⣼⣿⣷⣌⠩⡫⡻⣝⠹⢿⣿⣷
⡆⣿⣆⠱⣝⡵⣝⢅⠙⣿⢕⢕⢕⢕⢝⣥⢒⠅⣿⣿⣿⡿⣳⣌⠪⡪⣡⢑⢝⣇
⡆⣿⣿⣦⠹⣳⣳⣕⢅⠈⢗⢕⢕⢕⢕⢕⢈⢆⠟⠋⠉⠁⠉⠉⠁⠈⠼⢐⢕⢽
⡗⢰⣶⣶⣦⣝⢝⢕⢕⠅⡆⢕⢕⢕⢕⢕⣴⠏⣠⡶⠛⡉⡉⡛⢶⣦⡀⠐⣕⢕
⡝⡄⢻⢟⣿⣿⣷⣕⣕⣅⣿⣔⣕⣵⣵⣿⣿⢠⣿⢠⣮⡈⣌⠨⠅⠹⣷⡀⢱⢕
⡝⡵⠟⠈⢀⣀⣀⡀⠉⢿⣿⣿⣿⣿⣿⣿⣿⣼⣿⢈⡋⠴⢿⡟⣡⡇⣿⡇⡀⢕
⡝⠁⣠⣾⠟⡉⡉⡉⠻⣦⣻⣿⣿⣿⣿⣿⣿⣿⣿⣧⠸⣿⣦⣥⣿⡇⡿⣰⢗⢄
⠁⢰⣿⡏⣴⣌⠈⣌⠡⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣬⣉⣉⣁⣄⢖⢕⢕⢕
⡀⢻⣿⡇⢙⠁⠴⢿⡟⣡⡆⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣵⣵⣿
⡻⣄⣻⣿⣌⠘⢿⣷⣥⣿⠇⣿⣿⣿⣿⣿⣿⠛⠻⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
⣷⢄⠻⣿⣟⠿⠦⠍⠉⣡⣾⣿⣿⣿⣿⣿⣿⢸⣿⣦⠙⣿⣿⣿⣿⣿⣿⣿⣿⠟
⡕⡑⣑⣈⣻⢗⢟⢞⢝⣻⣿⣿⣿⣿⣿⣿⣿⠸⣿⠿⠃⣿⣿⣿⣿⣿⣿⡿⠁⣠
⡝⡵⡈⢟⢕⢕⢕⢕⣵⣿⣿⣿⣿⣿⣿⣿⣿⣿⣶⣶⣿⣿⣿⣿⣿⠿⠋⣀⣈⠙
⡝⡵⡕⡀⠑⠳⠿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠿⠛⢉⡠⡲⡫⡪⡪⡣
*/
