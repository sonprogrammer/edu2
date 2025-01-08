// function solution(a, b){
//     let company = a;
//     company =b;
//     return company
// }
// function solution(recommend){
//     const menu = recommend
//     return menu
// }


// function solution(n, donuts){
//     let res = n / donuts;
//     return res
// }


// function solution(n, members){
//     const total = n + 6000;
//     const pay = 4100 * members
//     return total - pay 
// }


// function solution(name, birth){
//     return name+birth
// }

// function solution(birth, date){
//     const sum = birth+date
//     return "비밀번호는 " + sum + " 입니다."
// }


// function solution(month){
//     return Math.ceil(month/3)
// }

function solution(num1, num2){
    // const type1 = typeof(num1); 
    // const type2 = typeof num2;
    // return type1 + ' '+type2
    // return Number(num1) + Number(num2) 
}


// function solution(input){
//     return Number(input);
// }

// function solution(age){
    // if(name == '나사장'){
    //     return 'code100'
    // }else{
    //     return 'code50'
    // }
    // return name === '나사장' ? 'code100' : 'code50';
//     if(0<= age && age <= 3){
//         return '분유 스틱'
//     }else if(4 <= age && age <= 7){
//         return '초콜릿과 사탕'
//     }else{
//         return '쿠키'
//     }
// }

// function solution(year){
//     if(year === 3){
//         return 5
//     }else if(year === 5){
//         return 12
//     }else if(year === 10){
//         return 30
//     }else{
//         return 0
//     }
// }

// function solution(menuList, today){
//     if(!menuList.includes(today) && menuList.length <= 10){
//         menuList.push(today)
//         return menuList
//     }
//     else{
//         return menuList
//     }
// }

function solution(feature){
    // return stacks.sort().reverse()
    // let shiftOne = prev.shift()
    // prev.push(shiftOne)
    // prev.unshift(join)
    // return prev
    // const prevFirst = prev.shift()
    // prev.push(prevFirst)
    // prev.unshift(join)
    // return prev
    // const prevFirst = prev.shift()
    // return [join, ...prev, prevFirst]
   let indexbug = feature.indexOf('bug')
    if(indexbug === -1){
        return feature
    }
    // feature.splice(indexbug, 1) //지울 인덱스 번호, 갯수 => 그 값을 feature에서  빼는거임
    // return feature

    const arr1 = feature.slice(0, indexbug) // 배열에서 시작 요소 부터 원하는 인덱스 전까지
    const arr2 =feature.slice(indexbug + 1) // 뒤에 쉼표 뒤에 아무것도 쓰지 않으면 배열 끝까지임

    return arr1.concat(arr2)

    
    
    feature.slice(indexbug, ) //slice는 지정한 요소만 빼고 반환한다
}
// console.log(solution(["code", "bug"]))


// function sol(money){
//     return Math.floor(money / 57000)
// }


// function sol(prices){
//     const min = Math.min(...prices)
//     return min
// }


// function sol(vote){
//     const max = Math.max(...vote)
//     const one = vote.indexOf(max)
//     return one+1
// }

// function sol(list, limit, reports){
//     let sum = 0
//     let i = 0
//     while(i < list.length){
//         sum += list[i]
//         i += 1
//     }
//     if(sum + reports <= limit){
//         return true
//     }else{
//         return false
//     }
// }

// function sol(list){
//     let arr = []
//     for(let i =0; i < list.length; i++){
//         if(list[i] == 1){
//             arr.push("yes")
//         }else{
//             arr.push("no")
//         }
//     }
//     return arr
// }

// function sol(bill){
//     let arr = []
//     for(let i = 0; i < bill.length; i++){
//         let sum1 = 0
//         for(let j = 0; j < bill[i].length; j++){
//             sum1 += bill[i][j]
//         }
//         arr.push(sum1)
//     }
//     return arr
// }

// function sol(nameList){
//     let res = nameList.map(name => name+'님')
//     return res
// }
// function sol(userList, ip){
//     let arr = []
//     let res =userList.filter(userIp => userIp !== ip)
//     return res
// }

// function sol(barcode){
//     let arr = []
//     let zeroCount = 0
//     for(let i = 0; i < barcode.length; i++){
//         if(barcode[i] !== 0){
//             arr.push(barcode[i])
//         }else{
//             zeroCount++
//         }
//     }
//     for(let i = 0; i<zeroCount; i++){
//         arr.push(0)
//     }
//     return arr
// }

// function sol(barcode){
//     const zero = []
//     const rest = []

//     barcode.map(el => {
//         if(el === 0){
//             zero.push(el)
//         }else{
//             rest.push(el)
//         }
//     })
//     return [...rest, ...zero]
// }

// function sol(map){
//     let res = ''
//     let row = 0
//     let col = 0
//     for(let i = 0; i < map.length; i++){
//         if(map[i].includes(1)){
//             row = i + 1
//             for(let j = 0; j < map[row-1].length; j++){
//                 col = map[row-1].indexOf(1) + 1
//             }
//         }
        
//     }
//     if(row == 0 && col == 0){
//         return "선배님을 찾을 수가 없습니다."
//     }
//     return `선배님은 ${row}번째 방, ${col}번 자리에 있습니다.`
// }


// function sol(map){
//     for(let i = 0; i < map.length; i++){
//         for(let j = 0; j < map[i].length; j++){
//             if(map[i][j]){
//                 return `선배님은 ${방 + 1}번째 방, ${자리 + 1}번째 자리에 있습니다.`;
//             }
//         }
//     }
//     return "선배님을 찾을 수가 없습니다.";

// }

// console.log(sol([
//     [0], [1, 0], [0], [0, 0], [0, 0]
//   ]))

// function sol(word){
//     let reversedWord = word.split('').reverse().join('')
//     if(word === reversedWord ){
//         return true
//     }else{
//         return false
//     }
// }


// function sol(str){
//     const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//     console.log(ALPHABET.length)
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === ' '){
//             res += ' '
//             continue;
//         }
//         const index = ALPHABET.indexOf(str[i])
//         if(index === -1){
//             const UpperCase = ALPHABET.indexOf(str[i].toLowerCase())
//             console.log('UpperCase', UpperCase)
//             res += ALPHABET[ALPHABET.length - 1 - UpperCase].toUpperCase()
//         }else{
//             res += ALPHABET[ALPHABET.length - 1 - index].toLowerCase()
//         }
//     }
//     return res

// }

// function sol(str){
//     const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
//     let res = ''
//     for(let i = 0; i < str.length; i++){
//         if(str[i] ===  ' '){
//             res += ' '
//             continue;
//         }
//         const leng = ALPHABET.length
//         if(ALPHABET.indexOf(str[i]) !== -1){ //소문자
//             res += ALPHABET[leng - 1 - ALPHABET.indexOf(str[i])]
//         }else{
//             const Upper = ALPHABET.toUpperCase()
//             res += Upper[leng - 1 - Upper.indexOf(str[i])]
//         }
//     }
//     return res
// }


// function sol(str){
//     let res =''
//     if(str.includes('q') && str.includes('Q')){
//         return -1
//     }else{

//         for(let i = 0; i < str.length; i++){
//             if(str[i] === 'q'){
//                 res += 'a'
//             }else if(str[i] === 'Q'){
//                 res += 'A'
//             }else{
//                 res += str[i]
//             }
//         }
//     }
//     return res
// }


// function sol(str){
//     if(str.includes('q') === false && str.includes('Q') === false){
//         return -1;
//     }
//       return str.replaceAll('q', 'a').replaceAll('Q', 'A');
    

// }


// function sol(search, recommends){
//     let res = []
//     for(let i = 0; i < search.length; i++){
//         for(let j = 0; j < recommends.length; j++){
//             for(let k = 0; k < recommends[j].length; k++){
//                 if(search[i] == recommends[j][i]){
//                     res.push(search[i])
//                 }else{
//                     res.push('')
//                 }
//             }
//         }
//     }
//         return [...new Set(res)].join('')
    
// }


// function sol(search, recommends){
//     for(let i = search.length; i > 0; i--){
//         const searched = search.slice(0, i)
//         for(let j = 0; j < recommends.length; j++){
//             const word = recommends[j]
//             if(word.startsWith(searched) === false){
//                 break;
//             }

//             if(j === recommends.length - 1){
//                 return searched
//             }
//         }
//     }
//     return ''
// }

// console.log(sol( "autter", ["flower", "flow", "flight"]))


// function solution(search, recommends) {
//     let longestPrefix = ""; // 가장 긴 공통 접두사를 저장할 변수
  
//     // 추천 검색어 목록에서 하나씩 비교
//     for (let i = 0; i < recommends.length; i++) {
//       let currentPrefix = "";
//       let j = 0;
      
//       // search와 추천 검색어에서 공통된 부분을 찾기
//       while (j < search.length && j < recommends[i].length && search[j] === recommends[i][j]) {
//         currentPrefix += search[j];
//         j++;
//       }
      
//       // 가장 긴 공통 접두사를 갱신
//       if (currentPrefix.length > longestPrefix.length) {
//         longestPrefix = currentPrefix;
//       }
//     }
  
//     return longestPrefix;
//   }


// function sol(search, recommends){
//     for(let i = search.length; i > 0; i--){
//         const searched = search.slice(0, i)
//         for(let j = 0; j < recommends.length; j++){
//             const word = recommends[j]

//             if(!word.startsWith(searched)){
//                 break;
//             }
//             if(j === recommends.length - 1){
//                 return searched
//             }
//         }
//     }
//     return ''
// }


// function sol(name, sex, spouse) {
//     if(sex === 'male'){
//         return `결혼 후 당신의 full name은 바뀌지 않습니다.`
//     }else{ //여성이면 앞이름은 자신의 앞이름 뒷이름은 남편의 뒷이름.
//         const feName = name.split(' ')[0]
//         const lastName = spouse.split(' ')[1]
//         return `결혼 후 당신의 full name은 ${feName} ${lastName} 입니다.`
//     }
// }

//   console.log(sol("Calista Flockhart", "female", "Harrison Ford")); // calista ford
  

// function sol(team){
//      team.dev.push('원두')
//      let newTeam = team.dev.push('원두')
//      return newTeam
//     return team
//     // console.log('team', team)

// }



// function sol(team){
//     if(team.dev){
//         return team.dev
//     }else{
//         return -1
//     }
// }

// function sol(winners){
//     const arr = []
//     for(rank in winners){
//         for(let i = 1; i <= winners[rank]; i++) {
//             arr.push(Number(rank))
//         }
//     }
//     return arr
// }

// function sol(arr){
//     const team = {}
//     arr.map(num => {
//         if(team[num] === undefined){
//             team[num] = 1
//         }else{
//             team[num]++
//         }
//     })
//     const teamArr = Object.values(team)
//     const odd = teamArr.filter(num => num % 2 == 1)[0]

//     const teamKey = Object.keys(team)
//     const res = teamKey.filter(a => team[a] === odd)
    
//     return Number(res[0])
// }

// function sol(arr){
//     let criminal = ''
//     let times = 0
//     for(n in arr){
//         if(arr[n].time > times){
//             times = arr[n].time
//             criminal = arr[n].name
//         }
//     }
//     return `범인은 바로 ${criminal}입니다!`
// }

function sol(arr){
    let criminal = ''
    let times = 0
    for(let v of arr){
        if(v.time > times){
            times = v.time
            criminal = v.name
        }
    }
    return `범인은 바로 ${criminal}입니다!`
}


console.log(sol([
    {
      name: "카페",
      time: 5,
    },
    {
      name: "모카",
      time: 12,
    },
    {
      name: "라떼",
      time: 10,
    },
    {
      name: "아라비카",
      time: 1,
    },
  ]))

