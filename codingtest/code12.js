// function solution(people, limit){
//     // let tube = [a, b]
//     let num = 0
//     for(let i = 0; i < people.length; i++){
//         people.slice(0, i) + people.slice(i + 1, people.length)
//         console.log(people)
//         for(let j =0; j < people.length; j++){
//             if(limit - people[i] < people[j]){
//                 num++
//             }
//         }
//     }
//     return num
// }


// function solution(people, limit){
//     people.sort((a, b) => a - b)
//     let start = 0
//     let end = people.length - 1 //4
//     let num = 0

//     while(start <= end){
//         if(people[start] + people[end] <= limit){
//             start++
//         }
//         end--
//         num++
//     }
//     return num
// }

// function solution(cards1, cards2, goal) {
//     let res = []
//     for(let i = 0; i < cards1.length; i++){
//         if(cards1[i] === goal[i]){
//             res.push(cards1[i])
//         }else{
//             for(let j = 0; j < cards2.length; j++){
//                 if(cards2[j] === goal[i]){
//                     res.push(cards2[j])
//                 }else{
//                     continue
//                 }
//             }
            
//         }
//     }
//     return res
// }


// function solution(cards1, cards2, goal) {
//     let res = []
//     let i = 0, j = 0

//     for(let k = 0; k < goal.length; k++){
//         if(i < cards1.length && cards1[i] === goal[k]){
//             res.push(cards1[i])
//             i++
//         }else if(j < cards2.length && cards2[j] === goal[k]){
//             res.push(cards2[j])
//             j++
//         }else{
//             return "No"
//         }
//     }
//     return "Yes"
// }

// function solution(arr){
//     arr.sort((a, b) => a - b)
//     let last = arr.length - 1
//     let i = 0
//     arr[last]

//     return arr
// }


//최대 공약수 구하는 공식
// function gcd(a, b) {
//     while (b !== 0) {
//         let temp = b;
//         b = a % b;
//         a = temp;
//     }
//     return a;
// }

// //최소공배수 구하는 공식
// function lcm(a, b) {
//     return (a * b) / gcd(a, b);
// }

// function solution(arr) {
//     return arr.reduce((acc, curr) => lcm(acc, curr), 1);
// }

//최대공약수 하는 함수
function gcd(){

}

// 최소공배수 구하는 함수
function lcm(a, b) {
    return a * b /gcd(a, b)
}

function solution(arr){
    

}

console.log(solution([1,2,3]));