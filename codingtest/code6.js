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

// function solution(balls, share){
//     function x(num){
//         let result = 1;
//         for(let i = 2; i <= num; i++){
//             result *= i
//         }
//         return result
//     }
//     function combination(n, r){
//         return x(n) / (x(r) * x(n - r))
//     }
//     return combination(balls, share)
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

// function solution(spell, dic){
//     let sortedSpell = spell.sort().join('')
//     for(let word of dic){
//         let sortedWord = word.split('').sort().join('')
//         if(sortedSpell === sortedWord){
//             return 1
//         }
//     }
//     return 2
// }


// function solution(M, N){
//     return M * N -1
// }

// function solution(keyinput, board){
//     let position = [0,0]

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

// function solution(dots){
//     let Xs = dots.map(x => x[0])
//     let Ys = dots.map(y => y[1])

//     let width = Math.max(...Xs) - Math.min(...Xs)
//     let height = Math.max(...Ys) - Math.min(...Ys)

//     return width * height 
// }

// function solution(id_pw, db){
//     return db.some(inner => inner.length === id_pw.length && inner.every((value, index) => value === id_pw[index])) ? 'login' : 'wrong pw'
// }

// function solution(id_pw, db){
//     const [id, pw] = id_pw

//     for(let i = 0; i < db.length; i++) {
//         let [dbId, pwId] = db[i]
//         if(id === dbId){
//             if(pw === pwId){
//                 return 'login'
//             }else{
//                 return 'wrong pw'
//             }
//         }
        
//     }
//     return 'fail'
// }


// function solution(score){
//    let avg = score.map(v => (v[0]+v[1])/2)
//    console.log(avg)
//    let sorted = avg.slice().sort((a,b) => b-a)
//    console.log(sorted)
//    return avg.map(v => sorted.indexOf(v)+1)
// }

// function solution(chicken){
//     let coupons = chicken
//     let service = 0

//     while(coupons >= 10){
//         let current = Math.floor(coupons / 10)
//         service += current
//         console.log(coupons)

//         let newCoupons = coupons % 10
//         coupons = current + newCoupons
//     }
//     return service
// }

// function solution(chicken){
//     let answer = 0
//     let coupons = chicken

//     while(coupons >= 10){
//         answer = answer + parseInt(coupons/10)
//         console.log('answer: ', answer)
//         coupons = parseInt(coupons/10) + coupons%10
//         console.log('coupons: ', coupons)
//     }
//     return answer
// }

// function solution(n){
//     for(let i = 1; i <= n; i++) {
//         if(i % 3 === 0){
//             n++
//         }
//         if(String(i).includes('3') & i % 3 != 0){
//             n++
//         }
//     }
//     return n
// }

function solution(a, b){
    let n =1 
    for(let i = 1; i <= Math.min(a, b); i++) {
        if(a%i === 0 && b%i === 0){
            n = i
        }
    }
    b/=n
    while(b%2 === 0) b/=2
    while(b%5 === 0) b/=5
    return b === 1 ? 1 : 2
}

console.log(solution(15))