// function solution(arr){
//     let count = 0
//     for(let i = 0; i < arr.length; i++){
//         let str = arr[i].toString()

//         for(let j = 0; j < str.length; j++){
//             if(str[j] === '7'){
//                 count++
//             }
//         }
//     }
//     return count
// }

// function solution(n){
//     const factors = new Set()

//     for(let i = 2; i <= n; i++) {
//         while(n % i === 0){
//             factors.add(i)
//             n /= i
//         }
//     }
//     return Array.from(factors).sort((a, b) => a -b)
// }

// function solution(bin1, bin2){
//     return (parseInt(bin1, 2) + parseInt(bin2, 2)).toString(2)
// }

// function solution(my_str, n){
//     let res = []
//     for(let i = 0; i < my_str.length; i+= n){
//         res.push(my_str.slice(i, i+n))
//     }
//     return res
// }

// function solution(s){
//     let res = 0
//     let arr = s.split(' ') 
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] === 'Z'){
//             res -= Number(arr[i-1])
//         }
//         else{
//             res += Number(arr[i])
//         }
//     }
//     return res
// }

// function solution(my_string) {
//     let [a, b, c] = my_string.split(' ')
//     if(b ==='+'){
//         return +a + +c
//     }else{
//         return +a - +c
//     }
// }


// function solution(n, k){
//     const index = (2 * (k - 1)) % n.length;
//     return n[index];
// }


// function solution(n, k){
//     let index = (2 * (k - 1)) % n.length;
//     return n[index];
// }


// function solution(n){
//     const numberMap = {
//         "zero": 0,
//         "one": 1,
//         "two": 2,
//         "three": 3,
//         "four": 4,
//         "five": 5,
//         "six": 6,
//         "seven": 7,
//         "eight": 8,
//         "nine": 9
//     };

//     let result = ''
//     let currentString = ''

//     for(let char of n){
//         currentString += char

//         if(numberMap[currentString] !== undefined){
//             result += numberMap[currentString]
//             currentString = ""
//         }
//     }
//     return parseInt(result, 10)
// }

// function solution(n){
//     let number = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten']
//     for(let i = 0; i < number.length; i++){
//         n = n.split(number[i]).join(i)
//     }
//     return +n
// }

function solution(balls, share){
    function x(num){
        let result = 1;
        for(let i = 2; i <= num; i++){
            result *= i
        }
        return result
    }
    function combination(n, r){
        return x(n) / (x(r) * x(n - r))
    }
    return combination(balls, share)
}

console.log(solution(3, 2))