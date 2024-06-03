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

const solution= (todo_list, finished) => todo_list.filter((e, i) => !finished[i])

console.log(solution(["problemsolving", "practiceguitar", "swim", "studygraph"], [true, false, true, false]	))