// function solution(a, b){
//     return a - b
// }

// function solution(a, b){
//     return Math.floor(a / b)
// }

// function solution(a, b){
//     return a === b ? 1 : -1;
// }

// function solution(a, b){
//     return a % b
// }

// function solution(age){
//     return new Date().getFullYear() - age + 1
// }

// function solution(a, b){
//     return a + b
// }

// function solution(numbers){
//     return numbers.reduce((a, b) => a + b)/numbers.length
// }

// function solution(angle){
//     if(0 < angle && angle < 90){
//         return 1
//     }else if(angle === 90){
//         return 2
//     }else if(90 < angle && angle < 180){
//         return 3
//     }else if(angle === 180){
//         return 4
//     }
// }

// function solution(n){
//     let answer = 0
//     for(let i = 0; i <= n; i++) {
//         if(i % 2 == 0){
//             answer += i
//         }
//     }
//     return answer
// }

// function solution(a, b){
//     return Math.floor((a / b) * 1000)
// }

// function solution(arr, n){
//     let newArr = arr.join('');
//     let count = 0
//     for(let i = 0; i< arr.length; i++){
//         if(arr[i] ==n){
//             count ++
//         }
//     }
//     return count
// }


// function solution(arr, h){
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > h){
//             count++
//         }
//     }
//     return count
// }

// function solution(arr){

//     arr.sort((a, b) => a - b);

//     let length = arr.length

//     const middle = Math.floor(length / 2)
//     return arr[middle]
// }

// function solution(n){
//     let answer = [];
//     for(let i = 0; i<= n; i++){
//         if(i % 2 != 0){
//             answer.push(i);
//         }
//     }
//     return answer
// }

// function solution(n){
//     return Math.ceil(n / 7)

// }


// function solution(price) {
//     if (price >= 500000) {
//         return price * 0.8;
//     } else if (price >= 300000) {
//         return price * 0.9;
//     } else if (price >= 100000) {
//         return price * 0.95;
//     } else {
//         return price;
//     }
// }

// function solution(m){
//     let answer = [];
//     let c = Math.floor(m / 5500)
//     let t = m % 5500
//     return [c, t]
// }
// function solution(hp){
//     let a = Math.floor(hp / 5)
//     hp %= 5
//     let b = Math.floor(hp / 3)
//     hp %= 3
//     let answer = hp
//     return a + b + answer
// }


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

// function solution(my_string){
//     let answer = 0;
//     for(let i = 0; i < my_string.length; i++){
//         if(my_string[i] >= '0' && my_string[i] <= '9'){
//             answer += Number(my_string[i])
//         }
//     }
//     return answer
// }

// function solution(m){
//     return m.length*2
// }

// function solution(cipher, code){
//     let result = ''
//     for(let i = 0; i < cipher.length; i++){
//         if((i+1) % code == 0){
//             result += cipher[i]
//         }
//     }
//     return result
// }

// function solution(my_string){
//     let result = ''
//     for(let i = 0; i < my_string.length; i++) {
//         if(my_string[i] >= 'a' && my_string[i] <= 'z'){
//             result += my_string[i].toUpperCase()
//         }else{
//             result += my_string[i].toLowerCase()
//         }
//     }
//     return result
// }

// function solution(arr){
//     const max = Math.max(...arr)
//     const index = arr.indexOf(max)
//     return [max, index]
// }

// function solution(n, numList){
//     let result = [];
//     for(let i = 0; i < numList.length; i++){
//         if(numList[i] % n == 0){
//             result.push(numList[i])
//         }
//     }
//     return result
// }

// function solution(n, numList){
//     return numList.filter(num => num % n == 0)
// }

// function solution(n){
//     return n.map(a => a*2)
// }

// function solution(s){
//     s.sort((a, b) => a - b)

//     if(s[2] < s[0] + s[1]){
//         return 1
//     }else{
//         return 2
//     }
// }

// function solution(n){
//     n.sort((a, b) => a - b)

//     const a = n.length
//     const max = n[a -1]*n[a-2]
//     const max2 = n[0] * n[1]
//     return Math.max(max, max2)
// }


// function solution(dot){
//     let [a, b] = dot
//     if(a >0 && b > 0){
//         return 1
//     }else if(a < 0 && b > 0){
//         return 2
//     }else if(a < 0 && b < 0){
//         return 3
//     }else{
//         return 4
//     }
// }
// function solution(my_string){
//     return my_string.split('').reverse().join('')
// }

// function solution(strlist){
//     let answer = [];
//     for(let i = 0; i < strlist.length; i++){
//         answer.push(strlist[i].length)
//     }
//     return answer
// }

// function solution(s1, s2){
//     let set1 = new Set(s1)
//     let set2 = new Set(s2)

//     let a = new Set([...set1].filter(x => set2.has(x)))
//     return a.size
// }

// function solution(num_list){
//     return num_list.reverse()
// }

// function solution(slice, n){
//     let a = Math.ceil(n / slice)
//     return a
// }


// function solution(n, t){
//     let answer = n

//     for(let i = 0; i < t; i++){
//         answer *= 2
//     }
//     return answer
// }


// function solution(n){
//     let a = Math.sqrt(n)
//     if(Number.isInteger(a)){
//         return 1
//     }else{
//         return 2
//     }
// }


// function solution(n){
//     n.sort((a, b) => a -b)
//     let leng = n.length
//     return n[leng-1] * n[leng-2]
// }

// function solution(num_list){
//     let even = 0
//     let odd = 0
//     for(let i = 0; i < num_list.length; i++){
//         if(num_list[i] % 2 == 0){
//             even++
//         }else{
//             odd++
//         }
//     }
//     return [even, odd]
// }


// function solution(n){
//     let result = 0
//     let a = n.toString().split('')
//     for(let i = 0; i < a.length; i++){
//         result += Number(a[i])
//     }
//     return result
// }

// function solution(str1, str2){
//     if(str1.includes(str2)){
//         return 1
//     }else{
//         return 2
//     }
// }
// function solution(my_string){
//     let str = my_string.split('')
//     let result = []
//     for(let i = 0; i < str.length; i++){
//         if (!(str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')){
//             result.push(str[i])
//         }
//     }
//     return result.join('')
// }


// function solution(n, k){
//     let a = 12000
//     let b = 2000

//     let c = Math.floor(n / 10)

//     let d = k - c

//     let result = (a * n) + (b * d)
//     return result
// }

// function solution(my_string, n1, n2){
//     let arr = my_string.split('')

//     let temp = arr[n1]
//     arr[n1] = arr[n2] 
//     arr[n2] = temp

//     return arr.join('')
// }

// function solution(numbers, direction) {
//     if (direction === 'right') {
//         return [numbers[numbers.length - 1], ...numbers.slice(0, numbers.length - 1)];
//     } else if (direction === 'left') {
//         return [...numbers.slice(1), numbers[0]];
//     } else {
//         return numbers;
//     }
// }

// function solution(n){
//     let result = [];
//     for(let i = 0; i <= n; i++) {
//         if(n % i == 0){
//             result.push(i)
//         }
//     }
//     return result
// }

// function solution(n, k){
//     let str = n.toString()

//     let kStr = k.toString()

//     let a = str.indexOf(kStr)
//     return a === -1 ? -1 : a+1
// }


// function solution(my_string){
//     let lower = my_string.toLowerCase();
//     return lower.split('').sort().join('')
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
//     let height = Number(input[0]);
//     for(let i = 0; i < height; i++){
//         let row = ''
//         for(let j = 0; j <= i; j++){
//             row += '*'
//         }
//         console.log(row)
//     }
// });


// function solution(my_string){
//     let arr = my_string.split('')
//     let answer =  arr.filter(x => !isNaN(parseInt(x))).sort()
//     return answer.map(str => parseInt(str))
// }

// function solution(order){
//     let arr = order.toString()
//     console.log(arr)
//     let count = 0;
//     for(let i =0 ; i<arr.length; i++){
//         if(arr[i] == 3 || arr[i] == 6 || arr[i] == 9){
//             count++
//         }
//     }
//     return count
// }

// function solution(n){
//     let count = 0;
//     for(let i = 0; i <= n; i++) {
//         if(n % i == 0){
//             count++
//         }
//     }
//     return count
// }

// function solution(box, n) {
//     const [length, width, height] = box;
//     const maxCubes = Math.floor(length / n) * Math.floor(width / n) * Math.floor(height / n);
//     return maxCubes;
// }

// function solution(age) {

//     const ageMap = 'abcdefghij';

//     let ageString = age.toString();
    
//     let result = '';
//     for (let i = 0; i < ageString.length; i++) {
//         result += ageMap[parseInt(ageString[i])];
//     }
    
//     return result;
// }

// function solution(n) {
//     let dp = new Array(n+1).fill(1)
//     for(let i = 2 ; i <= n ; i++){
//         if(dp[i]){
//             for(let j = 2 ; i*j <= n ; j++){
//                 dp[i*j] = 0
//             }
//         }
//     }

//     return dp.filter(el => el === 0).length
// }

// function solution(n){
//     let peices = 6
//     while(true){
//         if(peices % n == 0){
//             break;
//         }
//         peices += 6
//     }
//     return peices / 6
// }
// function solution(str) {
//     let seen = new Set();
//     let result = '';

//     for (let char of str) {
//         if (!seen.has(char)) {
//             seen.add(char);
//             result += char;
//         }
//     }

//     return result;
// }

// function solution(my_string, letter){
//     let remove = new Set(letter)

//     let result = []

//     for(let char of my_string){
//         if(!remove.has(char)){
//             result.push(char)
//         }
//     }
//     return result.join('')
// }

// function solution(my_string, letter){
//     return my_string.split(letter).join('')
// }

// function solution(numbers, n1, n2){
//     return numbers.slice(n1, n2+1)
// }

// function solution(my_string, n){
//     let result = ''
//     for(let i = 0; i < my_string.length; i++){
//         result += my_string[i].repeat(n)
//     }
//     return result
// }

// function solution(num_list, n) {
//     let result = [];
//     for (let i = 0; i < num_list.length; i += n) {
//         result.push(num_list.slice(i, i + n));
//     }
//     return result;
// }

// function solution(letter){
//     morse = { 
//         '.-':'a','-...':'b','-.-.':'c','-..':'d','.':'e','..-.':'f',
//         '--.':'g','....':'h','..':'i','.---':'j','-.-':'k','.-..':'l',
//         '--':'m','-.':'n','---':'o','.--.':'p','--.-':'q','.-.':'r',
//         '...':'s','-':'t','..-':'u','...-':'v','.--':'w','-..-':'x',
//         '-.--':'y','--..':'z'
//     }
//     return letter.split(' ').map(a => morse[a]).join('')
    
// }

// function solution(n){
//     let i = 1
//     let factorial = 1

//     while(factorial <= n){
//         i++
//         factorial *= i
//     }
//     return i - 1
// }


// function solution(my_string) {
//     let sum = 0;
//     let currentNumber = 0;
//     let isNumber = false;

//     for (let char of my_string) {
//         if (!isNaN(char) && char !== ' ') {
//             currentNumber = currentNumber * 10 + Number(char);
//             isNumber = true;
//         } else {
//             if (isNumber) {
//                 sum += currentNumber;
//                 currentNumber = 0;
//                 isNumber = false;
//             }
//         }
//     }

//     if (isNumber) {
//         sum += currentNumber;
//     }

//     return sum;
// }


// function solution(before, after){
//     let sortedBefore = before.split('').sort().join('');
//     let sortedAfter = after.split('').sort().join('');

//     return sortedBefore === sortedAfter ? 1 : 0
// }


// function solution(i, j, k) {
//     let count = 0
//     k = k.toString()

//     for(let num = i; num <= j; num++) {
//         let numStr = num.toString()
//         for(let char of numStr) {
//             if(char === k){
//                 count++
//             }
//         }
//     }
//     return count
// }


// function solution(arr, n){
//     let closeNum = arr[0]
//     let a = Math.abs(arr[0] - n)

//     for(let i = 1; i < arr.length; i++) {
//         let b = Math.abs(arr[i] - n)

//         if(b < a){
//             b = a
//             closeNum = arr[i]
//         }else if( b === a){
//             if(arr[i] < closeNum){
//                 closeNum = arr[i]
//             }
//         }
//     }
//     return closeNum
// }


// function solution(array, n) {
//     array.sort((a,b) => Math.abs(n - a) - Math.abs(n - b) || a - b);

//     return array[0];
// }

// function solution(s) {
//     // 각 문자의 등장 횟수를 저장할 객체
//     let charCount = {};

//     // 문자열을 순회하며 각 문자의 등장 횟수를 기록
//     for (let char of s) {
//         if (charCount[char]) {
//             charCount[char]++;
//         } else {
//             charCount[char] = 1;
//         }
//     }

//     // 등장 횟수가 1인 문자를 배열에 저장
//     let uniqueChars = [];
//     for (let char in charCount) {
//         if (charCount[char] === 1) {
//             uniqueChars.push(char);
//         }
//     }

//     // 배열을 사전 순으로 정렬하고 문자열로 변환하여 반환
//     return uniqueChars.sort().join('');
// }


// function solution(s){
//     let res = [];
//     for(let c of s){
//         console.log(c);
//         if(s.indexOf(c) === s.lastIndexOf(c)){
//             res.push(c)
//         }
//     }
//     return res.sort().join('')
// }


// function solution(em){
//     let a = [...em].sort((a, b) => b - a)

//     return em.map(v => a.indexOf(v) + 1)
// }



console.log(solution([3, 76, 24]));