// function sol(n, arr1, arr2){
//     let arrOne = []
//     let arrTwo = []
//     for(let i = 0; i < arr1.length; i++){
//         let binaryOne =  arr1[i].toString(2)
//         if(binaryOne.length !== n){
//             let newOne = '0' + binaryOne
//             console.log('newOne', newOne)
//             arrOne.push(Number(newOne))
//         }else{
//             arrOne.push(Number(binaryOne))
//         }

//     }

//     return arrOne
// }

// function sol(n, arr1, arr2){
//     const res = []

//     for(let i = 0; i < n; i++){
//         const line = (arr1[i] | arr2[i]).toString(2).padStart(n, '0')

//         let converted = ''
//         for(let char of line){
//             if(char === '0'){
//                 converted += ' '
//             }else{
//                 converted += '#'
//             }
//         }
//         res.push(converted)
//         // res.push(line.replace(/1/g, '#').replace(/0/g,' '))
//     }
//     return res
// }

// function sol(s){
//     let res = ''
//     let num = s.split(' ')

//     let max = Math.max(...num)
//     let min = Math.min(...num)

//     res = max + ' ' + min
    
//     return res
// }

// function sol(a, b){
//     let res = 0
//     a.sort((c, d) => c - d )
//     b.sort((c, d) => d - c) //뒤에있는게 커야함
//     for(let i = 0; i < a.length; i++){
//         res += a[i]*b[i]
//     }
//     return res
// }

// function sol(s){
//     let res = ''
//     let first = s[0]

//     if(lower(first)){
//         let upper = first.toUpperCase()
//         res = upper + s.slice(1)
//     } 

//     for(let i = 1; i < res.length; i++){
//         if(!lower(res[i])){ //대문자이면
//             res = res.slice(0, i) + res[i].toLowerCase() + res.slice(i+1)
//         }
//     }


//     function lower(v){
//         return v === v.toLowerCase()
//     }
//     return res     
// }

function sol(s) {
    let answer = ''
    for(let i = 0; i < s.length; i++){
        if(i === 0 || s[i-1] === ' '){
            answer += (s[i].toUpperCase())
        }else{
            answer += s[i].toLowerCase()
        }
    }
    return answer
}


console.log(sol("for the last week"	))