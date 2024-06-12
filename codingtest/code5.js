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

function solution(n){
    let result = [];
    for(let i = 0; i <= n; i++) {
        if(n % i == 0){
            result.push(i)
        }
    }
    return result
}

console.log(solution(24));