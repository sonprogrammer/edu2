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

function solution(s){
    let res = 0
    let arr = s.split(' ') 
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === 'Z'){
            res -= Number(arr[i-1])
        }
        else{
            res += Number(arr[i])
        }
    }
    return res
}

console.log(solution("1 2 Z 3"))