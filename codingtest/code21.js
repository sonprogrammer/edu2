// function solution(actions) {
//     const finalUser = new Set()
//     const voteMap ={}

//     for(const action of actions){
//         const [name, candidate] = action.split(' ')

//         for(const c in voteMap){
//             if(voteMap[c].has(name)){
//                 voteMap[c].delete(name)
//             }
//         }

//         if(!voteMap[candidate]){
//             voteMap[candidate] = new Set()
//         }
//         voteMap[candidate].add(name)
//         console.log('vote', voteMap)
//     }
// }

// 1번 문제
// function solution(actions){
//     const attend = new Map()
//     let total ={}
//     for(const action of actions){
//         const[name, behave] = action.split(' ')
//         attend.set(name, behave)
//     }
//     console.log('fadsf',attend)

//     for(const [name, behave] of attend){
//         if(behave === 'leave'){
//             attend.delete(name)
//         }
//     }
//     const count = Array.from(attend).length
//     total.count= count
//     total.student = [...attend.keys()]

//     return total

// }

// function solution(actions){
//     let cart = new Map()
//     let cartSet = new Set()

//     for(const action of actions){
//         const [name, behave, books] = action.split(' ')
//         if(behave ==='add'){
//             if(!cart.has(name)){
//                 cart.set(name, new Set())
//             }
//             cart.get(name).add(books)
//         }else if(behave === 'remove'){
//             if(cart.has(name)){
//                 cart.get(name).delete(books)
//             }
//         }
//     }

//     const res = new Map()
//     for(const [name , books] of cart){
//         res.set(name, Array.from(books))
//     }

//     return [...res]
// }

// function solution(actions){
//     const map = new Map()

//     for(const action of actions){
//         const [name, behave, book] = action.split(' ')
//         if(behave === 'borrow'){
//             if(!map.has(name)){
//                 map.set(name, new Set())
//             }
//             map.get(name).add(book)
//             // console.log('map', map.get(name))

//         }else {
//             map.get(name).delete(book)
//         }
//     }

//     const  final = new Map
//     let biggest = []
//     let count = 0
//     for(const [name, books] of map){
//         final.set(name, Array.from(books))
//         console.log('book',books.size)

//         if(books.size > count){
//             count = books.size
//             biggest = [name]
//         }else if(books.size === count){
//             biggest.push(name)
//         }
//     }
//     console.log(biggest)
//     return [...final]
// }

// function solution(actions) {
//   let map = new Map();

//   for (const action of actions) {
//     const [me, behave, freind] = action.split(" ");

//     if (behave === "add") {
//       if (!map.has(me)) {
//         map.set(me, new Set());
//       }
//       map.get(me).add(freind);
//     }else{
//         map.get(me).delete(freind) //여기서 나오는 값 알려줘
//     }
//   }

//   let final = new Map()
//   let winner = []
//   let maxCount = 0
//   for(const [name, freind] of map){
//     final.set(name, Array.from(freind))
//     if(maxCount < freind.size){
//         maxCount = freind.size
//         winner = (name)
//     }else if(maxCount === freind.size){
//         winner.push(name)
//     }
//   }
//   return winner
// }

// function solution(actions){
//     let map = new Map()
//     for(let i = 0; i < actions.length; i++ ){
//         for(let j = 0; j < actions[i].length; j++){
//             if(!map.has(actions[i][j])){
//                 map.set(actions[i][j], 1)
//             }else{

//                 map.set(actions[i][j], map.get(actions[i][j]) +1)
//             }
//         }
//     }
//     let maxCount = 0
//     let res =[]

//     for(const [title, count] of map){
//         if(maxCount < count){
//             maxCount = count
//             res = [title]
//         }else if(maxCount === count){
//             res.push(title)
//         }
//     }
    
//     return res
// }


// function solution(actions){
//   let ansewr = new Map()

//   for(let action of actions){
//     const [name, act, book] = action.split(' ')

//     if(!ansewr.has(name)){
//       ansewr.set(name, new Set())
//     }
//     if(act === 'borrow'){
//       ansewr.get(name).add(book)
//     }else if(act === 'return'){
//       ansewr.get(name).delete(book)
//     }
//   }

//   let maxCount = 0
//   let result = []

//   for(const [name, books] of ansewr){
//     const count = books.size
//     if(count > maxCount){
//       maxCount = count
//       result = [{name, count}]
//     }else if(count === maxCount){
//       result.push({name, count})
//     }
//   }
//   return result
// }


// function solution(actions){
//   let attendees = new Set()
//   let map = new Map()

//   for(let action of actions){
//     const [name, act] = action.split(' ')
//     if(act === 'join'){
//       attendees.add(name)
//       map.set(name, (map.get(name) || 0) + 1)
//     }else if(act === 'leave'){
//       attendees.delete(name)
//       map.delete(name)
//     }
//   }
//   return {attendees, count: map.size}
// }


// function solution(actions){
//   let map = new Map()

//   for(let action of actions){
//     const [name, act, freind] = action.split(' ')

//     if(!map.has(name)) map.set(name, new Set())
    
//     if(act === 'add'){
//       map.get(name).add(freind)
//     }else if(act === 'remove'){
//       map.get(name).delete(freind)
//     }
//   }

//   let maxFreind = 0
//   let result = []
//   for(let [name, f] of map){
//     const count = f.size
//     if(maxFreind < count){
//       maxFreind = count
//       result = [name]
//     }else if(maxFreind === count){
//       result.push(name)
//     }
//   }
//   return result.map(name => ({name, count : maxFreind}))
// }


// function solution(actions){
//   let map = new Map()

//   for(let action of actions){
//     let [name, act, seat] = action.split(' ')
//     if(!map.has(name)) map.set(name, new Set())

//     if(act === 'reserve'){
//       map.get(name).add(seat)
//     }else if(act === 'cancel'){
//       map.get(name).delete(seat)
//     }
//   }
//   console.log(map)
//   let maxSeat = 0
//   let names = []
//   for(let [name, seat] of map){
//     const count = seat.size
//     if(maxSeat < count){
//       maxSeat = count
//       names = [name]
//     }else if ( maxSeat === count){
//       names.push(name)
//     }
//   }
//   return names.map(res => {return {name: res, count: maxSeat}})
// }



// function solution(actions){
//   let res = new Map()

//   for(let action of actions){
//     const [name , act, book] = action.split(' ')

//     if(!res.has(name)) res.set(name, new Set())

//     if(act === 'borrow'){
//       res.get(name).add(book)
//     }else if(act ==='return'){
//       res.get(name).delete(book)
//     }
//   }
//   console.log(res)
//   let maxCount = 0
//   let names = []

//   for(let [name, book] of res){
//     const bookCount = book.size
//     if(maxCount < bookCount){
//       maxCount = bookCount
//       names = [name]
//     }else if(maxCount === bookCount){
//       names.push(name)
//     }
//   }
//   return names.map(a => ({ name: a, count: maxCount}))
// }

// function solution(actions){
//   let online = new Set()
//   let loginCount = new Map()

//   for(let action of actions){
//     const [name, act] = action.split(' ')
//     if(act === 'login'){
//       online.add(name)
//       loginCount.set(name, (loginCount.get(name) || 0) + 1)
//     }else if(act === 'logout'){
//       online.delete(name)
//     }
//   }

//   return {
//     online: Array.from(online),
//     loginCount
//   }
// }

function solution(actions) {
  let online = new Set()
  let loginCount = new Map()

  for(let action of actions){
    const [name, act] = action.split(' ')

    if(act === 'login'){
      online.add(name)
      loginCount.set(name, (loginCount.get(name)|| 0) + 1)
    }else{
      online.delete(name)
    }
  }

  let maxCount = 0
  let top = []

  for(let [name, count] of loginCount){
    if(maxCount< count){
      maxCount = count
      top = [name]
    }else if( maxCount === count){
      top.push(name)
    }
  }

  return {
    currentUser: Array.from(online),
    topUser: top.map(a => ({name: a, count: maxCount}))
  }
}




console.log(
  solution([
 "Alice login",
  "Bob login",
  "Alice logout",
  "Alice login",
  "Charlie login",
  "Bob logout",
  "Alice logout",
  "Charlie logout",
  "Bob login"
  ])
);
