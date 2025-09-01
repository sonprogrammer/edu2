// function solution(answers) {
//     var answer = [];

//     const patterns = [
//         [1,2,3,4,5], //5
//         [2,1,2,3,2,4,2,5], //8
//         [3,3,1,1,2,2,4,4,5,5] //10
//     ]
//     //[1,3,2,4,2] 
//     const scores = [0, 0, 0]

//     answer.forEach((a, idx) => {
//         patterns.forEach((pattern, i)=> {
//             if(a === pattern[idx % pattern.length]){
//                 scores[i]++
//             }
//         })
//     })

//     const maxScore = Math.max(...scores)


//     return scores.map((s,i) => (s === maxScore ? i+1 : null)).filter(num => num !== null);
// }


function solution(n,m,section){
    let answer = 0
    let painted = 0//5

    for(let s of section){
        if(painted < s){
            answer++
            painted = s + m -1
        }
    }
    return answer 
}
console.log(solution(8, 4, [2, 3, 6]))


