// console.log('Hello World')

// // 표준 입력에서 데이터를 읽어옴
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n')






// console.log(input)
// const input = fs.readFileSync('./input.txt').toString().trim()
// // 입력 값을 정수로 변환
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);

// // a - b의 결과를 출력
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(Math.floor(a / b));
// console.log(a % b);

// let a = input[0] //first line
// let b = input[1] //second line

// x1 = b[2]
// x2 = b[1]
// x3 = b[0]

// console.log(Number(a) * Number(x1))
// console.log(Number(a) * Number(x2))
// console.log(Number(a) * Number(x3))
// console.log(Number(a) * Number(b))

// a = Number(input[0])

// if(a >= 90){
//     console.log('A')
// }else if(a >= 80){
//     console.log('B')
// }else if(a >= 70){
//     console.log('C')
// }else if(a >= 60){
//     console.log('D')
// }else{
//     console.log('F')
// }

// console.log(input)

// let hour = Number(input[0].split(' ')[0])
// let minute = Number(input[0].split(' ')[1])

// if(minute < 45){
//     hour -= 1;
//     minute += 15;
//     if(hour < 0) hour = 23;
// }

// else minute -= 45;

// console.log(hour + ' ' + minute)

// let [a, b] = input[0].split(' ').map(Number)
// let c = Number(input[1])

// let totalMinute = a * 60 + b + c

// totalMinute %= 1440;

// let hour = parseInt(totalMinute / 60) 
// let minute = totalMinute % 60

// console.log(hour + ' ' + minute)


// let a = Number(input[0].split(' ')[0])
// let b = Number(input[0].split(' ')[1])
// let c = Number(input[0].split(' ')[2])

// if(a == b && b == c) console.log(10000 + a * 1000)
// else if(a == b) console.log(1000 + a * 100)
// else if(a == c) console.log(1000 + a * 100)
// else if(c == b) console.log(1000 + b * 100)
// else console.log(Math.max(a, b, c) * 100)

// let a = Number(input[0])

// let sum = 0
// for(let i = 0; i < a; i++){
//     sum += i
// }
// console.log(sum)


// let a = Number(input[0])
// for(let i = 1; i <= 9; i++){
//     console.log(a + ' * ' + i + ' = '+ a*i)
// }


// let a = Number(input[0])

// let result = ''
// for(let i = 0; i < a; i++) {
//     for(let j = 0; j <= i; j++) {
//         result += '*'
//     }
//     result += '\n'
// }

// console.log(result)

// let testCase = Number(input[0])
// let answer = ''

// for (let i = 0; i <= testCase; i++) {
//     let data = input[i].split(' ')
//     let a = Number(data[0])
//     let b = Number(data[1])
//     answer += a + b + '\n'
// }

// console.log(answer)

// let count = Number(input[0])

// let arr = input[1].split(' ').map(Number)

// let min = 1000000
// let max = -1000000

// for(let i = 0; i < count; i++){
//     if(min > arr[i]) min = arr[i]
//     if(max < arr[i]) max = arr[i]
// }

// console.log(min, max)

// let max = 0
// let maxIndex = 0;

// for(let i = 0; i < 9; i++){
//     let data = Number(input[i])
//     if(max < data) {
//        max = data
//        maxIndex = i
//     }
// }

// console.log(max, maxIndex+1)


// let data = input.map(Number)
// let mySet = new Set();

// for(let i =0; i< 10; i++){
//     mySet.add(input[i] % 42)
// }
// console.log(mySet.size)

// let testCase = Number(input[0])

// for(let i = 1; i <= testCase; i++){
//     let data = input[t].split(' ').map(Number)
//     let n = data[0]
//     let summary = 0;
//     for(let j = 1; j <= n; j++){
//         summary += data[j]
//     }
//     let average = summary / n;
//     let cnt = 0;
//     for(let a = 1; a <= n; a++){
//         if(data[a] > average){
//             cnt += 1;
//         }
//     }
//     console.log(`${(cnt / n * 100).toFixed(3)}%`)
// }

// let n = Number(input[0])
// let score = input[1].split(' ').map(Number)
// let m = score.reduce((a, b) => Math.max(a, b))
// console.log(m)
// let updated = []

// for(let i = 0; i < n; i++){
//    updated.push(score[i] / m * 100)

// }

// console.log(updated.reduce((a, b) => a + b) / n)

// let n = Number(input[0])

// let b = input[1].split('').map(Number)

// let result = 0
// for(let i =0; i< n; i++) {
//     result += b[i]
// }

// console.log(result)

// let n = Number(input[0])

// for(let i = 1; i<= n; i++){
//     let [r, s] = input[i].split(' ')
//     console.log(r, s)
//     let result = ''
//     for(let j = 0; j <= s.length; j++){
//         result += s.charAt(j).repeat(r)
//     }
//     console.log(result)
// }

// let [a, b] = input[0].split(' ')

// let newa= a.split('').reverse().join('')
// let newb= b.split('').reverse().join('')
// console.log(Math.max(newa,newb))


// let n = Number(input[0])
// let summary = 0

// function check(data){
//     let setData = new Set(data[0])
//     for(let i = 0; i < data.length; i++){
//         if(data[i] != data[i+1]){
//             if(setData.has(data[i+1])){
//                 return false
//             }else{
//                 setData.add(data[i+1])
//             }
//         }
//     }
//     return true
// }

// for(let i = 1; i<= n; i++){
//     let data = input[i]
//     if(check(data)) summary += 1
// }
// console.log(summary)

// let data = input[0].trim().split(' ')
// console.log(data)

// if(data == ''){
//     console.log(0)
// }else{
//     console.log(data.length)
// }


// let a = Number(input[0].split(' ')[0])
// let b = Number(input[0].split(' ')[1])

// if(a < b){
//     console.log('<')
// }else if(a > b){
//     console.log('>')
// }else{
//     console.log('==')
// }

// let a = Number(input[0].split(' ')[0])
// let b = Number(input[0].split(' ')[1])
// let c = Number(input[0].split(' ')[2])

// console.log(a+b+c)

// let year = Number(input[0])

// if((year % 4 == 0 && year % 100 != 0) || year % 400 == 0){
//     console.log(1)
// }else{
//     console.log(0)
// }

// let x = Number(input[0])
// let y = Number(input[1])

// if(x > 0 && y > 0){
//     console.log(1)
// }else if(x < 0 && y > 0){
//     console.log(2)
// }else if(x < 0 && y < 0){
//     console.log(3)
// }else{
//     console.log(4)
// }

// let totalPrice = Number(input[0])
// console.log('totalPrice', totalPrice)

// let num = Number(input[1])
// console.log('num', num)
// let sum = 0

// for(let i = 2; i <= num+1; i++){
//     let [price, amount] = input[i].split(' ').map(Number)
//     sum += (price * amount)
// }
// if(sum == totalPrice){
//     console.log('Yes')
// }else{
//     console.log('No')
// }


// let n = Number(input[0])

// for(let i =1; i <= n; i++){
//     let space = ' '.repeat(n - i)
//     let stars = '*'.repeat(i)
//     console.log(space + stars)
// }

// let num = Number(input[0])

// let a = input[1].split(' ').map(Number)
// let b = Number(input[2])
// let result = []

// for(let i = 0; i < a.length; i++){
//     if(b == a[i]){
//         result.push(a[i])
//     }
// }
// console.log(result.length)

// let word = input[0]
// let n = Number(input[1])

// console.log(word[n-1])

// let word = input[0]

// console.log(word.length)

// let testCase = Number(input[0])

// for(let i = 1; i <= testCase; i++){
//     let word = input[i]
//     if(word.length <= 1){
//         console.log(word[0].repeat(2))
//     }else{

//         console.log(word[0]+word[word.length-1])
//     }
// }

// let n = Number(input[0])
// let count = input[1].split('').map(Number)

// let sum = count.reduce((a, b) => a + b)
// console.log(sum)


// let result = ''

// for(let i = 1; i<= n; i++) {
//     let [count, word] = input[i].split(' ')
//     count = Number(count)
//     for(let j = 0; j < word.length; j++) {
//         result += word[j].repeat(count)
//     }
//     console.log(result)
// }


// let n = Number(input[0])

// for(let i = 1; i<= n; i++) {
//     let [count, word] = input[i].split(' ')
//     count = Number(count)
//     let result = ''
//     for(let j = 0; j < word.length; j++) {
//         result += word[j].repeat(count)
//     }
//     console.log(result)
// }

// let s = input[0]

// let result = s.trim().split(' ')

// console.log(result.length)

// let words = input[0].trim().split(' ')

// if(words == ''){
//     console.log(0)
// }else{
//     console.log(words.length)
// }

// let a = input[0].split(' ')[0]
// let b = input[0].split(' ')[1]

// let newa = a.split('').reverse().join('')
// let newb = b.split('').reverse().join('')

// if(newa > newb) {
//     console.log(newa)
// }else{
//     console.log(newb)
// }

// input.forEach(line => console.log(line))

// let data = [1, 2,3, 4, 5]

// let result = data.forEach(twice => console.log(twice*2))

// let n = input[0].split(' ').map(Number)


// let result = n.reduce((a, b) => {
//     console.log(a +b)
//     return a + b
// })

// let word = input[0]

// let r = word.split('').reverse().join('')

// if(r === word){
//     console.log(1)
// }else{
//     console.log(0)
// }

// let n = Number(input[0]);

// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }
// for (let i = n - 1; i >= 1; i--) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += ' ';
//     }
//     for (let k = 1; k <= 2 * i - 1; k++) {
//         row += '*';
//     }
//     console.log(row);
// }

// let a = Number(input[0])
// let b = Number(input[1])
// let c = Number(input[2])

// let result = a * b * c
// let counts = Array(10).fill(0);

// while (result > 0) {
//     let digit = result % 10;
//     counts[digit]++;
//     result = Math.floor(result / 10);
// }

// for (let i = 0; i < 10; i++) {
//     console.log(`${i}: ${counts[i]}`);
// }

// let a = [1, 2, 3, 4, 5]
// let b = [...a]

// a[5] = 6
// console.log(a)
// console.log(b)
// console.log('hi')

// function solution(n, k) {
//     var answer = [];
//     for(let i = 1; i <= n; i++){
//         if(i % k == 0){
//             answer.push(i)
//         }
//     }
//     return answer;
// }
// console.log(solution(15, 5))

// function solution(my_string, is_prefix) {
//     var answer = 0;
//     if(my_string.startsWith(is_prefix)){
//         answer = 1
//     }else{
//         answer = 0
//     }

//     return answer;
// }

// function solution(my_string, n) {
//     var answer = '';
//     answer = my_string.slice(0, n)
//     return answer;
// }

// function solution(my_string, is_suffix) {
//     var answer = 0;
//     if(my_string.endsWith(is_suffix)){
//         answer = 1
//     }else{
//         answer = 0
//     }
//     return answer;
// }

