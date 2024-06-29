// function solution(p){
//     let arr = p.split(' + ')
//     let xNum = arr.filter(n => n.includes('x'))
//                   .map(n => n.replace('x', '') || '1') //값이 그냥 빈문자열이면 false를 반환하여 || 논리연산자로 1이 나온다
//                   .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
//     console.log(xNum)
//     let num = arr.filter(n => !isNaN(n))
//                  .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    
//     let answer = []
//     if(xNum) answer.push(`${xNum === 1 ? '' : xNum}x`)
//     if(num) answer.push(num)
//     return answer.join(' + ')
// }


// function solution(array) {
//     let m = new Map();
//     for (let n of array){
//          m.set(n, (m.get(n) || 0)+1)
//         //  console.log(m.get(n))
//         };
//     m = [...m].sort((a,b)=>b[1]-a[1]);
//     return m.length === 1 || m[0][1] > m[1][1] ? m[0][0] : -1;
// }

// function solution(quiz){
//     let answer = []
//     quiz.forEach((val) => {
//         const [x, sign, y, , z] = val.split(' ')
//         console.log(val)
//         let sum = 0
//         if(sign === '+'){
//             sum = Number(x) + Number(y)
//             console.log(sum)
//         }else{
//             sum = Number(x) - Number(y)
//         }
//         sum === Number(z) ? answer.push('O') : answer.push('X')
//     })
//     return answer
// }


function solution(common){
    if((common[1] - common[0]) == (common[2] - common[1])){
        console.log(common.pop())
        return common.pop() + common[1] - common[0]
    }else{
        return common.pop()*common[1]/common[0]
    }
}

console.log(solution([1, 2, 3, 4]))
