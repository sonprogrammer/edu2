// console.log('Hello World')

// // 표준 입력에서 데이터를 읽어옴
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n')

// console.log(input)
// const input = fs.readFileSync('./input.txt').toString().trim()
// // 입력 값을 정수로 변환
// const a = parseInt(input[0]);
// const b = parseInt(input[1]);

// // a - b의 결과를 출력
// console.log(a + b);
// console.log(a - b);
// console.log(a * b);
// console.log(Math.floor(a / b));
// console.log(a % b);

let a = input[0] //first line
let b = input[1] //second line

x1 = b[2]
x2 = b[1]
x3 = b[0]

console.log(Number(a) * Number(x1))
console.log(Number(a) * Number(x2))
console.log(Number(a) * Number(x3))
console.log(Number(a) * Number(b))
