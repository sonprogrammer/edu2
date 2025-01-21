// function solution(n){
//     let array = [];
//     for(let i = 2; i <= n; i++){
//         if(n % i === 0){
//             array.push(i);
//         }
//     }
//     array.sort((a,b) => a - b)
//     for(let i = 0; i < array.length; i++){
//         if(array[i]){

//         }
//     }
// }


// function solution(n){
//     let answer = [];

//     for(let i = 2; i <=n; i++){
//         while(n % i === 0){
//             n = n / i
//             answer.push(i)
//         }
//     }
//     console.log(answer)
//     return [...new Set(answer)];

// }

// function solution(bin1, bin2){
//     let plus = (parseInt(bin1, 2)+parseInt(bin2, 2))
//     return plus.toString(2)

// }

// function solution(myS, n){
//     let arr = [];

//     for(let i = 0; i < myS.length; i+=n){
//         let str = myS.slice(i, i+n)
//         arr.push(str)
//     }
//     return arr
// }

// function solution(myS){
   
//     return eval(myS)
    
// }

// function solution(sides){
//     let [a, b] = sides
//     let minSide = Math.abs(a - b) + 1
//     let maxSide = a + b - 1

//     let count = 0

//     for(let c = minSide; c <= maxSide; c++){
//         count++
//     }
//     return count
// }


// function solution(sides){
//     let [a, b] = sides
//     let minSide = Math.abs(a - b) + 1
//     let maxSide = a + b - 1
//     let count = 0

//     for(let c = minSide; c <= maxSide; c++){
//         count++
//     }
//     return count
// }

// function solution(nums){
//     const number = ["zero","one","two","three", "four", "five", "six", "seven", "eight", "nine"]

//     for(let i = 0; i < number.length; i++){
//         nums = nums.split(number[i]).join(i)
//     }

//     console.log(nums)
// }

// function solution(nums){
//     const numberMap = {
//         "zero": "0", "one": "1", "two": "2", "three": "3", "four": "4",
//         "five": "5", "six": "6", "seven": "7", "eight": "8", "nine": "9"
//     };

//     for(let word in numberMap){
//         nums = nums.split(word).join(numberMap[word])
//     }
//     return nums
// }

// function solution(keyinput, board){
//     let position = [0, 0]

//     let xLimit = Math.floor(board[0] / 2)
//     let yLimit = Math.floor(board[1] / 2)

//     keyinput.forEach(key => {
//         if(key === 'up' && position[1] < yLimit){
//             position[1] += 1
//         }else if(key === 'down' && position[1] > -yLimit){
//             position[1] -= 1
//         }else if(key === 'left' && position[0] > -xLimit){
//             position[0] -= 1
//         }else if(key === 'right' && position[0] < xLimit){
//             position[0] += 1
//         }
//     })
//     return position
// }

function solution(spell, dic){
    let sortedSpell = spell.sort().join('')
    console.log(sortedSpell)
    for(let i = 0; i < dic.length; i++){
        if(dic[i].split().sort().join('') === sortedSpell){
            return 1
        }else{
            return 2
        }
    }
}

let a = [1, 2, 3]
let b = [1, 3, 2]
let c = b.sort()
console.log(c)


console.log(solution(["p", "o", "s"],["sod", "eocd", "qixm", "adio", "soo"]))