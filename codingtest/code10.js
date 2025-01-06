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


function sol(map){
    for(let i = 0; i < map.length; i++){
        for(let j = 0; j < map[i].length; j++){
            if(map[i][j]){
                return `선배님은 ${방 + 1}번째 방, ${자리 + 1}번째 자리에 있습니다.`;
            }
        }
    }
    return "선배님을 찾을 수가 없습니다.";

}

console.log(sol([
    [0], [1, 0], [0], [0, 0], [0, 0]
  ]))