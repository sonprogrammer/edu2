// function solution(date1, date2) {
//     // 연도 비교
//     if (date1[0] < date2[0]) {
//         return 1;
//     } else if (date1[0] > date2[0]) {
//         return 0;
//     }
    
//     // 연도가 같은 경우 월 비교
//     if (date1[1] < date2[1]) {
//         return 1;
//     } else if (date1[1] > date2[1]) {
//         return 0;
//     }
    
//     // 연도와 월이 같은 경우 날짜 비교
//     if (date1[2] < date2[2]) {
//         return 1;
//     } else {
//         return 0;
//     }
// }


// const solution = (data1, date2) => new Date(data1) < new Date(date2) ? 1 : 0

// const day = [2024, 6, 5]
// console.log('day', new Date(day))




// function solution(arr, flag){
//     let answer = []
//     for(let i = 0; i < arr.length; i++){
//         if(flag[i] == true){
//             answer.push(...Array(arr[i]*2).fill(arr[i]))
//         }else{
//             answer.splice(-arr[i], arr[i])
//         }
//     }
//     return answer
// }

// function solution(my_string, indices){
//     let res = ''
//     for(let i = 0; i < my_string.length; i++){
//         if(!indices.includes(i)){
//             res += my_string[i]
//         }
//     }
//     return res
// }

// function solution(my_string, s, e){
//     let str = my_string.slice(s, e+1).split('').reverse(). join('')
//     console.log(str)
//     return my_string.slice(0, s) + str + my_string.slice(e + 1)

// }


// function solution(intStrs, k, s, l){
//     let res = []
//     for(let i = 0; i < intStrs.length; i++){
//         let sub = intStrs[i].substring(s, s+l)
//         let num = parseInt(sub, 10)

//         if(num > k){
//             res.push(num)
//         }
//     }
//     return res
// }


// function solution(intStrs, k, s, l){
//     return intStrs.map(v => v.slice(s, s+l)).filter(v => v > k)
// }



// function solution(str1, str2){
//     let answer = '';
//     for(let i = 0; i < str1.length; i++){
//         if(i < str1.length){
//             answer += str1[i];
//         }
//         if(i < str2.length){
//             answer += str2[i];
//         }
//     }
//     return answer;
// }


// function solution(str1, str2){
//     return [...str1].map((x, idx) => x+str2[idx]).join('')
// }

function solution(myString, pat){
    let maxLength = 0
    let sub = ''

    for(let i = 0; i < myString.length; i++){
        for(let j = 0; j <= myString.length; j++){
            let substring = myString.substring(i, j)
            if(substring.endsWith(pat) && substring.length > maxLength){
                maxLength = substring.length
                sub = substring
            }
        }
    }
    return sub
}


console.log(solution("AbCdEFG", "dE"))