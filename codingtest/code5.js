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

function solution(n){
    let answer = [];
    for(let i = 0; i<= n; i++){
        if(i % 2 != 0){
            answer.push(i);
        }
    }
    return answer
}

console.log(solution(10))