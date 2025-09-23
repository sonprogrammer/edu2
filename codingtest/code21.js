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

console.log(
  solution([
    "Alice add Bob",
    "Alice add Charlie",
    "Bob add Alice",
    "Charlie add Alice",
    "Alice remove Bob",
    "David add Alice",
    "Bob add Charlie",
    "Charlie remove Alice",
  ])
);
