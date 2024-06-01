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




function solution(a, b) {
    let num1 = parseInt(a+""+b+"")
    let num2 = parseInt(b+""+a+"")
    return num1 > num2 ? num1 : num2
}

console.log(solution(89, 8))