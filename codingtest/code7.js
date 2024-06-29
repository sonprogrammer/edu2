function solution(p){
    let arr = p.split(' + ')
    let xNum = arr.filter(n => n.includes('x'))
                  .map(n => n.replace('x', '') || '1') //값이 그냥 빈문자열이면 false를 반환하여 || 논리연산자로 1이 나온다
                  .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    console.log(xNum)
    let num = arr.filter(n => !isNaN(n))
                 .reduce((acc, cur) => acc + parseInt(cur, 10), 0)
    
    let answer = []
    if(xNum) answer.push(`${xNum === 1 ? '' : xNum}x`)
    if(num) answer.push(num)
    return answer.join(' + ')
}

console.log(solution("3x + 7 + x"))