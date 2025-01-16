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
// function gcd(a, b){
//     while(b !== 0){
//         let temp = b;
//         b = a % b
//         a = temp
//     }
//     return a
// }

// // 최소공배수 구하는 함수
// function lcm(a, b) {
//     return a * b /gcd(a, b)
// }

// function solution(arr){
//     return arr.reduce((acc, curr) => lcm(acc, curr), 1 )
// }


//가장 먼저 탈락하는 사람의 번호와 그 사람이 자신의 몇 번째 차례에 탈락하는지를 구해서 return
// function solution(n, word){
//     let result = [] 
//     for(let i = 0; i < word.length; i += n){
//         result.push(word.slice(i, i + n))
//     }
//     if()

//     return result
// }

// function solution(n, word){
//     const usedWords = new Set()
//     usedWords.add(word[0])

//     for(let i = 1; i < word.length; i++){
//         const currentWord = word[i]
//         const previousWord = word[i - 1]

//         if(
//             usedWords.has(currentWord) ||
//             previousWord[previousWord.length - 1] !== currentWord[0]
//         ){
//             const person = (i % n) + 1
//             const turn = Math.floor(i / n) + 1
//             return [person, turn]
//         }
//         usedWords.add(currentWord)
//     }
//     return [0 ,0 ]
// }


// function solution(n, word){
//     let firstWord = new Set()
//     firstWord.add(word[0])

//     for(let i = 1; i < word.length; i ++){
//         const currentWord = word[i]
//         const previousWord = word[i - 1]

//         //같은단어가 나오거나 끝말잇기가 아닐시
//         if(
//             firstWord.has(word[i]) ||
//             previousWord[previousWord.length - 1] !== currentWord[0]
//         ){
//             const person = (i % n) + 1 //몇번째 사람인지
//             const turn = Math.floor(i / n) + 1 //그 사람이 몇번째 턴인지
//             console.log(firstWord)
//             return [person, turn]
//         }
        
//         firstWord.add(currentWord)
//     }
//     console.log(firstWord)
//     return [0, 0]
// }


// console.log(solution(3, ["tank", "kick", "know", "wheel", "oand", "dream"]));

// function solution(k, tan){
//     let count = new Set()

//     const sizeCount = {}
//     tan.forEach(size => {
//         sizeCount[size] = (sizeCount[size] || 0) + 1
//     })

//     const counts = Object.values(sizeCount).sort((a, b) => b - a)
//     console.log(counts)

//     let selectedCount = 0
//     let types = 0

//     for(let count of counts){
//         selectedCount += count
//         types++

//         if(selectedCount >= k){
//             break;
//         }
//     }
//     return types

// }

// function solution(k, tan){
//     let sizeCount = {}
//     tan.forEach(size => {
//         sizeCount[size] = (sizeCount[size] || 0) + 1
//     })

//     let counts = Object.values(sizeCount).sort((a, b) => b - a)

//     let selectedCount = 0
//     let key = 0

//     for(let count of counts){
//         selectedCount += count
//         key++
//         if(selectedCount >= k){
//             break;
//         }
//     }

    
//     return key
    
// }

function solution(n, a, b){
    let round = 0

    while(a !== b){
        a = Math.ceil(a /2 )
        b = Math.ceil(b / 2)
        round++
    }
    return round
}


console.log(solution(8, 4, 7))
