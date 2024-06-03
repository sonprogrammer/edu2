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

const solution = s => s.toLowerCase().replaceAll("a", "A")

console.log(solution("PrOgRaMmErS"))