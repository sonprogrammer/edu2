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

const solution = s => s.split(' ')

console.log(solution("appl e"))