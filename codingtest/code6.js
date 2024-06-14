function solution(arr){
    let count = 0
    for(let i = 0; i < arr.length; i++){
        let str = arr[i].toString()

        for(let j = 0; j < str.length; j++){
            if(str[j] === '7'){
                count++
            }
        }
    }
    return count
}

console.log(solution([7, 77, 17]))