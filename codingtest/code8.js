// function solution(absolutes, sign){
//     let sum = 0
//     for(let i = 0; i < absolutes.length; i++){
//         if(sign[i]){
//             sum += absolutes[i]
//         }else{
//             sum -= absolutes[i]
//         }
//     }
//     return sum
// }

// function solution(numbers){
//     let sum = 0;
    
//     let check = Array.from({ length : 10}, (_, i) => i)
//     for(let num of numbers) {
//         check[num] = -1
//     }
//     for(let num of check){
//         if(num >= 0){
//             sum += num
//         }
//     }
//     return sum
// }


// function solution(numbers){
//     let answer = 0

//     for(let i = 0; i <= 9; i++){
//         if(!numbers.includes(i)){
//             answer += i
//         }
//     }
//     return answer
// }


// function solution(arr, divisor){
//     let answer = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % divisor == 0){
//             answer.push(arr[i]);
//         }
//     }
//     if(answer.length == 0){
//         answer.push(-1)
//     }
//     return answer.sort((a, b) => a -b)
// }


// function solution(arr, divisor){
//     let answer = arr.filter(v => v%divisor == 0)
//     return answer.length === 0 ? [-1] : answer.sort((a, b) => a - b)
// }


// function solution(arr){
//     let answer = [];
//     for(let i=0; i<arr.length; i++){
//         if(arr[i] > arr[i+1]) answer.push(arr[i]);
//      }
//      if(answer.length === 0) answer.push(-1);
//      return answer
// }


// function solution(arr){
//     if(arr.length <= 1){
//         return arr.length === 1 ? [-1] : []
//     }
//     let min = arr.indexOf(Math.min(...arr))
//     let answer = arr.filter((_, index) => index !== min)
//     return answer
// }


// function solution(arr){
//     const min = Math.min(...arr);
//     return arr.length !== 1 ? arr.filter(i => i !== min) : [-1]
// }


// function solution(phone_number){
//     return '*'.repeat(phone_number.length - 4) + phone_number.slice(-4)
// }

// function solution(s){
//     let midIndex = Math.floor(s.length / 2)
//     if(s.length % 2 === 0){
//         return s[midIndex - 1] + s[midIndex]
//     }else{
//         return s[midIndex]
//     }
// }


// function solution(n){
//     let answer = ''
//     for(let i = 0; i < n; i++) {
//         if(i % 2 === 0){
//             answer += '수'
//         }else{
//             answer += '박'
//         }
//     }
//     return answer
// }

// function solution(a, b){
//     let result = 0
//     for(let i = 0; i < a.length; i++) {
//         result += a[i]*b[i]
//     }
//     return result
// }

// function solution(s){
//     let arr = s.split('')
//     arr.sort((a, b) => {
//         if(a.toLowerCase() === b.toLowerCase()){
//             return a > b ? -1 : 1
//         }else{
//             return a.toLowerCase() > b.toLowerCase() ? -1 : 1
//         }
//     })
//     return arr.join('')
// }

// function solution(s) {
//     return s.split('').sort((a, b) => {
//         if (a < b) return 1;
//         if (a > b) return -1;
//         return 0;
//     }).join('');
// }

// function solution(left, right) {
//     let result = 0
//     for(let i = left; i <= right; i++) {
//         if(Number.isInteger(Math.sqrt(i))){
//             result -= i
//         }else{
//             result +=i
//         }
//     }
//     return result
// }

// function solution(price, money, count){
//     let result = 0;
//     for(let i = 1; i <= count; i++) {
//         result += price * i
//     }
//     return result - money
// }

// function solution(s){
//     if(s.length !== 4 && s.length !== 6){
//         return false
//     }
//     for(let i = 0; i < s.length; i++) {
//         if(isNaN(s[i]) || s[i] === ' '){
//             return false
//         }
//     }
//     return true
// }

// function solution(arr1, arr2){
//     let arr = []
//     for(let i = 0; i < arr1.length; i++){
//         let row = []
//         for(let j = 0; j < arr1[i].length; j++){
//             row.push(arr1[i][j] + arr2[i][j])
//         }
//         arr.push(row)
//     }
//     return arr
// }

// function solution(a, b){
//     let r;
//     for(let ab = a*b; r = a % b; a =b, b=r){}
//     return [b, ab/b]

// }


// function solution(arr){
//     let answer = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i-1]){
//             answer.push(arr[i]);
//         }
//     }
//     return answer;
// }

// function solution(arr){
//     return arr.filter((val, i) => val != arr[i+1])
// }

// function solution(d, budget){
//     d.sort((a, b) => a - b)
//     let count = 0
//     for(let i = 0; i < d.length; i++){
//         if(budget >= d[i]){
//             budget -= d[i]
//             count++
//         }else{
//             break
//         }
//     }
//     return count
// }

// function solution(n){
//     let three = n.toString(3)

//     let reverseThreee = three.split('').reverse().join('')

//     return parseInt(reverseThreee, 3)
// }

// function solution(s){
//     let arr = s.split(' ')
//     let result = []
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++){
//             if(j % 2 === 0){
//                 result.push(arr[i][j].toUpperCase())
//             }else{
//                 result.push(arr[i][j])
//             }
//         }
//     }
//     return result.join('')
// }


// function solution(s){
//     return s.split(' ').map(word =>{
//         return word.split('').map((char, i) =>{
//             if(i % 2 == 0){
//                 return char.toUpperCase()
//             }else{
//                 return char.toLowerCase()
//             }
//         }).join('')
//     }).join(' ')
// }

// function solution(sizes) {
//     let maxWidth = 0;
//     let maxHeight = 0;

//     sizes.forEach(([width, height]) => {
//         if (width < height) {
//             [width, height] = [height, width];
//         }
//         maxWidth = Math.max(maxWidth, width);
//         maxHeight = Math.max(maxHeight, height);
//     });

//     return maxWidth * maxHeight;
// }

// function solution(s, n){
//     let result = ''

//     for(let i = 0; i < s.length; i++){
//         let char = s[i];

//         if(char >= 'A' && char <= 'Z'){
//             result += String.fromCharCode((charCodeAt(0) - 'A'.charCodeAt())
//         }
//     }
// }


// function solution(numbers){
//     let result = []
//     for(let i = 0; i < numbers.length; i++){
//         for(let j = 0; j < numbers.length; j++){
//             result.push(numbers[i]+numbers[j]);
//         }
//     }
//     return Array.from(new Set(result)).sort()
// }
// const numWords = {
//     "zero": "0",
//     "one": "1",
//     "two": "2",
//     "three": "3",
//     "four": "4",
//     "five": "5",
//     "six": "6",
//     "seven": "7",
//     "eight": "8",
//     "nine": "9"
// };
// function solution(s){
//     for(const [word, num] of Object.entries(numWords)){
//         s = s.replaceAll(word, num)
//     }
//     return parseInt(s, 10)
// }

// function solution(s){
//     let answer = s
//     for(let i = 0; i < numWords.length; i++) {
//         let arr = answer.split(numWords[i])
//         answer = arr.join(i)
//     }
//     return Number(answer)
// }
// function solution(strings, n) {
//     strings.sort((a, b) => {
//         // 먼저 n번째 글자로 비교
//         if (a[n] > b[n]) return 1;
//         if (a[n] < b[n]) return -1;
//         // 만약 n번째 글자가 같으면 사전순으로 정렬
//         if (a > b) return 1;
//         if (a < b) return -1;
//         return 0;
//     });
//     return strings;
// }


// function solution(strings, n) {
//     return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]))
// }

// function solution(a, b, n) {
//     let totalColas = 0;

//     while (n >= a) {

//         let newColas = Math.floor(n / a) * b;
//         totalColas += newColas;
//         n = (n % a) + newColas;
//     }

//     return totalColas;
// }


// function solution(numbers){
//     let answer = 0

//     for(let i = 0; i <= 9; i++){
//         if(!numbers.includes(i)){
//             answer += i
//         }
//     }
//     return answer
// }


// function solution(s){
//     let arr = s.split('')
//     arr.sort((a, b) => {
//         if(a.toLowerCase() === b.toLowerCase()){
//             return a > b ? -1 : 1
//         }else{
//             return a.toLowerCase() > b.toLowerCase() ? -1 : 1
//         }
//     })
//     return arr.join('')
// }

// function solution(n){
//     let answer = ''
//     for(let i = 0; i < n; i++) {
//         if(i % 2 === 0){
//             answer += '수'
//         }else{
//             answer += '박'
//         }
//     }
//     return answer
// }



// function solution(a, b){
//     const daysOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"]

//     const daysInMonth = [0, 31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

//     let totalDays = 0;

//     for(let i = 1; i < a; i++){
//         totalDays += daysInMonth[i]
//     }
//     totalDays += b - 1

//     return daysOfWeek[totalDays % 7]
// }


// function solution(a, b){
//     let tempDate = new Date(2016, a-1, b)

//     return tempDate.toString().slice(0, 3).toUpperCase()
// }


// console.log(solution(5, 24))

// function solution(a){
//     console.log('hi my name is ' + a)
// }

// console.log(solution(["sun", "bed", "car"], 1))


// function solution(k, score) {
//     const hallOfFame = [];  
//     const result = [];      

//     for (let i = 0; i < score.length; i++) {
//         const currentScore = score[i];

//         if (hallOfFame.length < k) {
//             hallOfFame.push(currentScore);
//         } else {
//             if (currentScore > Math.min(...hallOfFame)) {
//                 hallOfFame.push(currentScore);
//                 hallOfFame.sort((a, b) => b - a);  
//                 hallOfFame.pop();  
//             }
//         }
//         result.push(Math.min(...hallOfFame));
//     }

//     return result;
// }

function solution(name, yearning, photo) {
    const yearningMap = {};
    for (let i = 0; i < name.length; i++) {
        yearningMap[name[i]] = yearning[i];
    }
    const result = photo.map(persons => {
        let score = 0;
        for (let person of persons) {
            if (yearningMap[person] !== undefined) {
                score += yearningMap[person];
            }
        }
        return score;
    });

    return result;
}

// const name = ["may", "kein", "kain", "kali", "mari", "don"];
// const yearning = [5, 10, 1, 11, 1, 55];
// const photo = [
//     ["may", "kein", "kain"],
//     ["kali", "mari", "don", "tony"]
// ];

