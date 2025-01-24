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

// function solution(spell, dic){
//     let sortedSpell = spell.sort().join('')
//     console.log(sortedSpell)
//     for(let i = 0; i < dic.length; i++){
//         if(dic[i].split().sort().join('') === sortedSpell){
//             return 1
//         }else{
//             return 2
//         }
//     }
// }



// function solution(spell, dic){
//     let newSpell = spell.sort().join('')
//     for(let i = 0; i < dic.length; i++){
//         let dicArr = dic[i].split('').sort().join('')
//         if(dicArr === newSpell){
//             return 1
//         }
        
//     }
//     return 2

// }


// console.log(solution(["p", "o", "s"],["sod", "eocd", "qixm", "adio", "soo"]))

// function solution(M, N){
//     return M * N -1
// }

// function solution(dots){
//     let X = dots.map(v => v[0])
//     let Y = dots.map(v => v[1])

//     let width = Math.max(...X) - Math.min(...X)
//     let height = Math.max(...Y) - Math.min(...Y)

//     return width * height
// }

// function solution(id_pw, db){
//     let [id, pw] = id_pw
//     for(let i = 0; i < db.length; i++){
//         if(db[i][0] == id && db[i][1] == pw){
//             return 'login'
//         }else if(db[i][0] == id && db[i][1] !== pw){
//             return 'wrong pw'
//         }
//     }
//     return 'fail'
// }

// function solution(id_pw, db){
//     let [id, pw] = id_pw
//     let map = new Map(db)
//     return map.has(id) ? (map.get(id) == pw ? 'login' : 'wrong pw') : 'fail'
// }

// function solution(chicken){
//     return Math.floor((chicken - 10) / 9 + 1 )
// }

// function solution(score){
//     let avg = score.map(v => (v[0]+v[1])/2)
//     console.log(avg)
//     let sorted = [...avg].sort((a,b)=> b - a)//오름차순
//     console.log(sorted)
//     return avg.map(v => sorted.indexOf(v)+1)
// }



// function solution(n){
//     for(let i = 1; i <=n; i++){
//         if(i % 3 == 0){
//             n++
//         }
//         if(String(i).includes('3') & i % 3 != 0){
//             n++
//         }
//     }
//     return n
// }

// function solution(a, b){
//     return (b+b).indexOf(a)
// }

// function solution(numArr, n){
//     let a = numArr.sort((a, b) => Math.abs(a - n) - Math.abs(b - n));

//     console.log(a)
// }

// function solution(numArr, n){
//     return numArr.sort((a, b) => {
//         const A = Math.abs(a - n)
//         console.log('A', A)
//         const B = Math.abs(b - n)
//         console.log('B', B)

//         if(A === B){
//             return b - a
//         }
//         return A - B
//     })
// }

// function solution(numArr, n){
//     return numArr.sort((a, b) => Math.abs(a-n) - Math.abs(b - n) || b -a)
// }

// function solution(p){
//     let arr = p.split(' + ')
//     let resX = []
//     let int = []
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].includes('x')){
//             resX.push(arr[i])
//         }else if(!isNaN(arr[i])){
//             int.push(Number(arr[i]))
//         }
//     }
//     let plusX = 0
//     for (let i = 0; i < resX.length; i++) {
//         let splitX = resX[i].split('x')[0]  // 'x' 앞부분만 추출
//         if (splitX === '' || splitX === '+') {
//             plusX += 1  // x가 앞에 없으면 1을 더함
//         } else if (splitX === '-') {
//             plusX -= 1  // x 앞에 -가 있으면 -1을 더함
//         } else {
//             plusX += Number(splitX)  // x 앞에 숫자가 있으면 그 값을 더함
//         }
//     }
//     let plusI = 0
//     for(let num of int){
//         plusI += num
//     }

//     if(plusI === 0 ){
//         return plusX +'x'
//     }else{
//         return plusX+'x' + ' + ' + plusI
//     }
// }

// console.log(solution("3x + 7 + x"))

// function solution(arr){
//     let res = {}

//     arr.forEach(num => {
//         if (res[num]) {
//             res[num]++;
//         } else {
//             res[num] = 1;
//         }
//     });
    
//     console.log(res)
    
//     //value의 값이 가장 큰 키값을 가져오게 하는거임
//     let values = Object.values(res)
//     console.log(values)
//     let maxnumber = Math.max(...values )
//     const maxCount = values.filter(value => value === maxnumber).length;
//     console.log(maxCount)
//     if(maxCount > 1){
//         return -1
//     }

//     const keyWithMaxValue = Object.keys(res).reduce((maxKey, key) => {
//         return res[key] > res[maxKey] ? key : maxKey;
//     });

// return Number(keyWithMaxValue)

// }  


// function solution(arr){
//     let res = {}

//     arr.forEach(num => {
//         if(res[num]){
//             res[num]++
//         }else{
//             res[num] = 1
//         }
//     })

//     //객체 중 가장 많은 value를 가지고 있는 key의 값을 가져오는것, value가 일치하면 -1

//     //가장 큰 value를 가지고 있는거 찾음
//     let values = Object.values(res) //values들만 배열로 만들어놓음
//     let max = Math.max(...values) //values중 가장 큰 값을 max에 담음
//     console.log(max)

//     //그 value의  값과 일치하는 키를 찾으면됨
//     const maxCount = values.filter(v => v === max).length //우선 가장 많이 있는 숫자들이 여러개이면 -1을 리턴하기 위함
//     if(maxCount > 1){
//         return -1
//     }

//     const matchKey = [] // key값을 찾기 위함

//     Object.keys(res).forEach(key => { //Object.keys(res)는 키값들만 배열로 나열됨
//         if(res[key] === max){
//             matchKey.push(key)
//         }
//     })
//     return Number(matchKey.join(''))

// }


console.log(solution([1, 1, 2, 3, 3, 3, 3, 3, 4, 4]))

