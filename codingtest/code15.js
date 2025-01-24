// function solution(quiz){
//     let res = []

//     for(let i = 0; i < quiz.length; i++){
//         let wordArr = quiz[i].split(' ')
//         console.log(wordArr)
//             if(wordArr[1] === '+'){
//                 const answer = Number(wordArr[0]) + Number(wordArr[2])
//                 console.log(answer)
//                 if(answer == wordArr[4]){
//                     res.push('O')
//                 }else{
//                     res.push('X')
//                 }
//             }else{
//                 const answer = Number(wordArr[0]) - Number(wordArr[2])
//                 console.log(answer)
//                 if(answer == wordArr[4]){
//                     res.push('O')
//                 }else{
//                     res.push('X')
//                 }
//             }
//     }
//     return res
// }


// function solution(quiz){
//     let res = [];
//     quiz.forEach(v => {
//         const [x, sign, y, equal ,answer] = v.split(' ')
//         let sum = 0
//         if(sign === '+'){
//             sum = Number(x) + Number(y)
//         }else{
//             sum = Number(x) - Number(y)
//         }
//         sum === Number(answer) ? res.push('O') : res.push('X')
//     })
//     return res
// }


// function solution(common){
//     if((common[1] - common[0]) === (common[2] - common[1])){
//         return common.pop() + (common[1] -common[0])
//     }else{
//         return common.pop() * (common[1] / common[0])
//     }
// }

// function solution(num, total){
//     const start = (total - ((num - 1) * num) / 2) /num

//     const result = []
//     for(let i = 0; i < num; i++){
//         result.push(start + i)
//     }
//     return result
// }

// function solution(n1, d1, n2, d2){
//     let 분자 = n1 * d2 + n2 * d1
//     let 분모 = d1 * d2

//     let 분수 = 분자 / 분모

//     let 최대공약수 = gcd(분자, 분모)

//     분자 /= 최대공약수
//     분모 /= 최대공약수
    
//     function gcd(a, b){
//         while(b !== 0){
//             let temp = b
//             b = a % b
//             a = temp
//         }
//         return a
//     }
//     return [분자, 분모]
// }

function solution(b){
    let df = ["aya", "ye", "woo", "ma"]

    let count = 0
    b.forEach(word => {
        let tempWord = word
        let isValid = true

        df.forEach(sound =>{
            tempWord = tempWord.split(sound).join('')
        })

        if(tempWord === ''){
            count++
        }
    })
    return count
}

function solution(babbling) {
    return ['aya','ye','woo','ma'].
    reduce((a,c)=>a.map(e=>e.replaceAll(c,' ')),babbling).map(e=>e.split(' ').join('')).filter(e=>!e).length;
    }


console.log(solution(["aya", "yee", "u", "maa", "wyeoo"]))